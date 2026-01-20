// Create: /y-cam-cyntaf/assets/js/benchmark.js
(function () {
  "use strict";

  /* =========================
     CONFIG
     ========================= */
  // Use your live Apps Script endpoint here:
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/REPLACE_ME/exec";

  const STORAGE_KEYS = {
    start: "tidybutt_ycc_distanceTravelled_v1_start",
    end: "tidybutt_ycc_distanceTravelled_v1_end",
    anonId: "tidybutt_ycc_distanceTravelled_v1_anonId",
    lastSentAt: "tidybutt_ycc_distanceTravelled_v1_lastSentAt",
    lastSentPayloadHash: "tidybutt_ycc_distanceTravelled_v1_lastSentPayloadHash"
  };

  const ITEMS = [
    { id: "listen_general", title: "Listening: I feel ok listening to Welsh, even if I only catch a few words.", why: "Why this matters: catching a word or two is real listening progress. You do not need full sentences to be improving." },
    { id: "listen_audio", title: "Listening with audio: I feel confident using audio (voice notes, clips, or live audio) to learn Welsh.", why: "Why this matters: audio helps your ear tune in. Replaying small clips builds familiarity without pressure." },
    { id: "speak_one_word", title: "Speaking: I feel ok saying a word or short phrase out loud (even if my accent feels unsure).", why: "Why this matters: speaking is physical practice. Your mouth and confidence both improve through tiny attempts." },
    { id: "speak_non_welsh_speaker", title: "Speaking with other learners: I feel ok speaking Welsh with someone who is also learning (not a confident Welsh speaker).", why: "Why this matters: learner-to-learner practice is low pressure and builds fluency through shared effort." },
    { id: "speak_confident_welsh_speaker", title: "Speaking with a confident Welsh speaker: I feel ok trying Welsh with someone who speaks it confidently.", why: "Why this matters: this is a common fear. Even one brave attempt builds real-world confidence." },
    { id: "reading_recognise", title: "Reading: I can recognise familiar Welsh words or patterns when I see them.", why: "Why this matters: recognition is the foundation of reading. You are training your brain to spot Welsh quickly." },
    { id: "writing_message", title: "Writing: I feel ok writing a short Welsh message (even if it is simple, and I use a cheat sheet).", why: "Why this matters: writing slows language down in a helpful way. Simple messages are still genuine Welsh use." },
    { id: "public_space", title: "Public spaces: I feel ok using Welsh in a public setting (shop, café, workplace, or community space).", why: "Why this matters: real-life use is the goal. A small moment in public is a big confidence milestone." }
  ];

  const SCALE = [
    { v: 0, a: "Not yet" },
    { v: 1, a: "Just starting" },
    { v: 2, a: "A bit" },
    { v: 3, a: "Mostly" },
    { v: 4, a: "Yes, comfortably" }
  ];

  const MAX_PER_ITEM = 4;
  const MAX_TOTAL = ITEMS.length * MAX_PER_ITEM;

  /* =========================
     DOM
     ========================= */
  const els = {};
  function grab() {
    els.main = document.getElementById("dtMain");
    els.form = document.getElementById("dtForm");

    els.modeStartBtn = document.getElementById("dtModeStart");
    els.modeEndBtn = document.getElementById("dtModeEnd");
    els.modeHint = document.getElementById("dt-mode-hint");

    els.scoreText = document.getElementById("dtScoreText");
    els.scorePct = document.getElementById("dtScorePct");
    els.barFill = document.getElementById("dtBarFill");
    els.supportMsg = document.getElementById("dtSupportMessage");

    els.summaryStartValue = document.getElementById("dtSummaryStartValue");
    els.summaryEndValue = document.getElementById("dtSummaryEndValue");
    els.summaryDistanceValue = document.getElementById("dtSummaryDistanceValue");
    els.summaryStartSub = document.getElementById("dtSummaryStartSub");
    els.summaryEndSub = document.getElementById("dtSummaryEndSub");
    els.summaryDistanceSub = document.getElementById("dtSummaryDistanceSub");

    els.guidanceMessage = document.getElementById("dtGuidanceMessage");
    els.guidanceLists = document.getElementById("dtGuidanceLists");
    els.strengthsList = document.getElementById("dtStrengthsList");
    els.nextStepsList = document.getElementById("dtNextStepsList");

    els.saveBtn = document.getElementById("dtSaveBtn");
    els.saveBottomBtn = document.getElementById("dtSaveBottomBtn");
    els.topBtn = document.getElementById("dtTopBtn");

    els.copyBtn = document.getElementById("dtCopyBtn");
    els.docBtn = document.getElementById("dtDocBtn");
    els.printBtn = document.getElementById("dtPrintBtn");
    els.sendBtn = document.getElementById("dtSendBtn");
    els.resetBtn = document.getElementById("dtResetBtn");
    els.statusEl = document.getElementById("dtStatus");
    els.lastSentNote = document.getElementById("dtLastSentNote");

    els.modalOverlay = document.getElementById("dtModalOverlay");
    els.modalCancel = document.getElementById("dtModalCancel");
    els.modalSend = document.getElementById("dtModalSend");
    els.consentBox = document.getElementById("dtConsent");

    // Basic existence check
    return !!(els.main && els.form && els.sendBtn);
  }

  /* =========================
     UTIL
     ========================= */
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function safeParse(jsonStr) {
    try { return JSON.parse(jsonStr); } catch { return null; }
  }

  function nowISO() { return new Date().toISOString(); }

  function formatLocalTime(iso) {
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return "";
      return d.toLocaleString("en-GB", {
        year: "numeric", month: "short", day: "2-digit",
        hour: "2-digit", minute: "2-digit"
      });
    } catch { return ""; }
  }

  function setStatus(msg, isError) {
    if (!els.statusEl) return;
    if (!msg) { els.statusEl.textContent = ""; return; }
    els.statusEl.innerHTML = isError
      ? "<strong>Note:</strong> " + escapeHtml(msg)
      : escapeHtml(msg);
  }

  function getAnonId() {
    const existing = localStorage.getItem(STORAGE_KEYS.anonId);
    if (existing) return existing;
    const id = "anon_" + Math.random().toString(16).slice(2) + "_" + Date.now().toString(16);
    localStorage.setItem(STORAGE_KEYS.anonId, id);
    return id;
  }

  function readSnapshot(which) {
    const key = which === "start" ? STORAGE_KEYS.start : STORAGE_KEYS.end;
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = safeParse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  }

  function writeSnapshot(which, data) {
    const key = which === "start" ? STORAGE_KEYS.start : STORAGE_KEYS.end;
    localStorage.setItem(key, JSON.stringify(data));
  }

  function clearAllSnapshots() {
    localStorage.removeItem(STORAGE_KEYS.start);
    localStorage.removeItem(STORAGE_KEYS.end);
  }

  function computeTotal(scores) {
    let total = 0;
    for (const item of ITEMS) {
      const v = scores[item.id];
      if (v === 0 || v) total += Number(v);
    }
    return total;
  }

  function scoreToText(total) {
    const pct = MAX_TOTAL === 0 ? 0 : Math.round((total / MAX_TOTAL) * 100);
    return `${total}/${MAX_TOTAL} (${pct}%)`;
  }

  function categoryTagText(itemId) {
    if (itemId.startsWith("listen")) return "Listening";
    if (itemId.startsWith("speak")) return "Speaking";
    if (itemId.startsWith("reading")) return "Reading";
    if (itemId.startsWith("writing")) return "Writing";
    if (itemId.startsWith("public")) return "Real-life use";
    return "Confidence";
  }

  function setLastSentNoteFromStorage() {
    const iso = localStorage.getItem(STORAGE_KEYS.lastSentAt);
    if (!iso) { if (els.lastSentNote) els.lastSentNote.textContent = ""; return; }
    const nice = formatLocalTime(iso);
    if (els.lastSentNote) {
      els.lastSentNote.textContent = nice
        ? `Last sent: ${nice} (stored on this device only)`
        : "";
    }
  }

  function setSendQueuedUI() {
    if (!els.sendBtn) return;
    els.sendBtn.textContent = "Sent (queued)";
    els.sendBtn.classList.add("is-queued");
    els.sendBtn.disabled = true;
  }

  function maybeRestoreQueuedUI() {
    // If user already sent from this device, show queued state immediately.
    const iso = localStorage.getItem(STORAGE_KEYS.lastSentAt);
    if (iso) setSendQueuedUI();
  }

  async function shaLike(str) {
    // Tiny stable hash for “same payload” checking.
    // Not crypto-strong, just a quick checksum.
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(16);
  }

  /* =========================
     BUILD FORM
     ========================= */
  function buildForm() {
    let html = "";
    ITEMS.forEach((item, idx) => {
      const legendId = `dt-legend-${item.id}`;
      const whyId = `dt-why-${item.id}`;
      const notesId = `dt-notes-${item.id}`;

      html += `<fieldset class="dt-item" aria-labelledby="${legendId}" aria-describedby="${whyId}">`;
      html += `  <legend class="dt-legend" id="${legendId}">${escapeHtml(`${idx + 1}. ${item.title}`)}</legend>`;
      html += `  <p class="dt-why" id="${whyId}">${escapeHtml(item.why)}</p>`;
      html += `  <div class="dt-tag" aria-label="Skill area">${escapeHtml(categoryTagText(item.id))}</div>`;

      html += `  <div class="dt-scale" role="group" aria-label="Confidence scale">`;
      html += `    <div class="dt-scale-row">`;

      SCALE.forEach((opt) => {
        const inputId = `dt-${item.id}-${opt.v}`;
        const name = `score_${item.id}`;
        html += `      <label class="dt-choice" for="${inputId}">`;
        html += `        <input type="radio" id="${inputId}" name="${name}" value="${opt.v}" aria-label="${escapeHtml(`${opt.a} (${opt.v})`)}" />`;
        html += `        <span class="dt-num">${opt.v}</span>`;
        html += `        <span class="dt-anchor">${escapeHtml(opt.a)}</span>`;
        html += `      </label>`;
      });

      html += `    </div>`;
      html += `  </div>`;

      html += `  <div class="dt-notes">`;
      html += `    <label for="${notesId}">Notes to self (private, optional)</label>`;
      html += `    <textarea class="dt-textarea" id="${notesId}" name="note_${item.id}" placeholder="Do not include personal data. For example: where I noticed Welsh, what felt easier, what I want to try next."></textarea>`;
      html += `  </div>`;
      html += `</fieldset>`;
    });

    els.form.innerHTML = html;
  }

  /* =========================
     RESPONSES
     ========================= */
  function getCurrentResponses() {
    const scores = {};
    const notes = {};
    for (const item of ITEMS) {
      const selected = els.form.querySelector(`input[name="score_${item.id}"]:checked`);
      if (selected) scores[item.id] = Number(selected.value);

      const noteEl = els.form.querySelector(`textarea[name="note_${item.id}"]`);
      notes[item.id] = noteEl ? String(noteEl.value || "") : "";
    }
    return { scores, notes };
  }

  function setResponsesFromSnapshot(snapshot) {
    if (!snapshot) return;

    for (const item of ITEMS) {
      const radios = els.form.querySelectorAll(`input[name="score_${item.id}"]`);
      radios.forEach((r) => (r.checked = false));

      const val = snapshot.scores ? snapshot.scores[item.id] : undefined;
      if (val === 0 || val) {
        const input = els.form.querySelector(`input[name="score_${item.id}"][value="${val}"]`);
        if (input) input.checked = true;
      }

      const noteEl = els.form.querySelector(`textarea[name="note_${item.id}"]`);
      if (noteEl) {
        const n = snapshot.notes && typeof snapshot.notes[item.id] === "string" ? snapshot.notes[item.id] : "";
        noteEl.value = n;
      }
    }
  }

  /* =========================
     UI UPDATES
     ========================= */
  let mode = "start";

  function updateModeHint() {
    if (!els.modeHint) return;
    els.modeHint.textContent =
      mode === "start"
        ? "Start checkpoint: this captures a baseline for you."
        : "End checkpoint: compare to your Start checkpoint to see your distance travelled.";
  }

  function updateProgressUI() {
    const current = getCurrentResponses();
    const answeredCount = Object.keys(current.scores).length;
    const total = computeTotal(current.scores);
    const pct = MAX_TOTAL === 0 ? 0 : Math.round((total / MAX_TOTAL) * 100);

    if (els.scoreText) els.scoreText.innerHTML = `Overall: <strong>${total}</strong> out of <strong>${MAX_TOTAL}</strong>`;
    if (els.scorePct) els.scorePct.textContent = `${pct}%`;
    if (els.barFill) els.barFill.style.width = `${pct}%`;

    if (!els.supportMsg) return;

    if (answeredCount === 0) {
      els.supportMsg.textContent = "Start anywhere. One item is enough for today.";
    } else if (answeredCount < ITEMS.length) {
      els.supportMsg.textContent = "Nice. You have started. You can leave any item blank if it does not fit today.";
    } else {
      if (pct <= 25) els.supportMsg.textContent = "This looks like an honest baseline. Being at the start is expected and welcome here.";
      else if (pct <= 55) els.supportMsg.textContent = "You are building foundations. Keep noticing small wins. They add up.";
      else if (pct <= 80) els.supportMsg.textContent = "You have lots to work with already. The course can help make it feel more automatic.";
      else els.supportMsg.textContent = "You are feeling very ready. You can use the course to stay relaxed and make it social.";
    }

    renderSummaryCard();
  }

  function renderSummaryCard() {
    const startSnap = readSnapshot("start");
    const endSnap = readSnapshot("end");

    const current = getCurrentResponses();
    const currentTotal = computeTotal(current.scores);

    const startTotal = startSnap ? computeTotal(startSnap.scores || {}) : null;
    const endTotal = endSnap ? computeTotal(endSnap.scores || {}) : null;

    // Start box
    if (startTotal === null) {
      if (mode === "start" && Object.keys(current.scores).length > 0) {
        els.summaryStartValue.textContent = `${scoreToText(currentTotal)} (not saved)`;
      } else {
        els.summaryStartValue.textContent = "Not saved yet";
      }
      els.summaryStartSub.textContent = "Complete and save your Start checkpoint to capture a baseline.";
    } else {
      els.summaryStartValue.textContent = scoreToText(startTotal);
      els.summaryStartSub.textContent = `Saved on: ${formatLocalTime(startSnap.savedAt || "") || "saved"}`;
    }

    // End box
    if (endTotal === null) {
      if (mode === "end" && Object.keys(current.scores).length > 0) {
        els.summaryEndValue.textContent = `${scoreToText(currentTotal)} (not saved)`;
      } else {
        els.summaryEndValue.textContent = "Not saved yet";
      }
      els.summaryEndSub.textContent = "Complete and save your End checkpoint to see distance travelled.";
    } else {
      els.summaryEndValue.textContent = scoreToText(endTotal);
      els.summaryEndSub.textContent = `Saved on: ${formatLocalTime(endSnap.savedAt || "") || "saved"}`;
    }

    // Distance box
    if (startTotal !== null && endTotal !== null) {
      const delta = endTotal - startTotal;
      const sign = delta > 0 ? "+" : delta < 0 ? "−" : "";
      els.summaryDistanceValue.textContent = `${sign}${Math.abs(delta)} points`;
      els.summaryDistanceSub.textContent = delta === 0
        ? "Steady counts. Consistency is still progress."
        : "That is real distance travelled. Small changes count.";
      renderGuidance(startSnap, endSnap);
    } else {
      els.summaryDistanceValue.textContent = "Save both checkpoints to compare.";
      els.summaryDistanceSub.textContent = "Small changes count, including noticing and trying.";
      els.guidanceMessage.textContent = "Save your Start checkpoint now, and your End checkpoint in Session 6, to see your distance travelled.";
      els.guidanceLists.hidden = true;
    }
  }

  function renderGuidance(startSnap, endSnap) {
    const endScores = (endSnap && endSnap.scores) ? endSnap.scores : {};
    const strengths = [];
    const nextSteps = [];

    ITEMS.forEach((item) => {
      const v = Number(endScores[item.id]);
      if (!Number.isFinite(v)) return;
      if (v >= 3) strengths.push(item.title);
      else nextSteps.push(item.title);
    });

    els.guidanceMessage.textContent = "Use this as a gentle reflection. This is not a judgement.";
    els.guidanceLists.hidden = false;

    els.strengthsList.innerHTML = strengths.slice(0, 5).map((t) => `<li>${escapeHtml(t)}</li>`).join("");
    els.nextStepsList.innerHTML = nextSteps.slice(0, 5).map((t) => `<li>${escapeHtml(t)}</li>`).join("");
  }

  /* =========================
     ACTIONS
     ========================= */
  function openModal() {
    if (!els.modalOverlay) return;
    els.modalOverlay.setAttribute("data-open", "true");
    if (els.consentBox) els.consentBox.checked = false;
  }

  function closeModal() {
    if (!els.modalOverlay) return;
    els.modalOverlay.setAttribute("data-open", "false");
  }

  function saveSnapshot(which) {
    const { scores, notes } = getCurrentResponses();
    const payload = {
      version: "v1",
      which,
      savedAt: nowISO(),
      anonId: getAnonId(),
      scores,
      notes
    };
    writeSnapshot(which, payload);
    setStatus(`Saved ${which === "start" ? "Start" : "End"} checkpoint on this device.`, false);
    updateProgressUI();
  }

  function resetAll() {
    if (!confirm("Reset your saved Start and End checkpoints on this device?")) return;
    clearAllSnapshots();
    localStorage.removeItem(STORAGE_KEYS.lastSentAt);
    localStorage.removeItem(STORAGE_KEYS.lastSentPayloadHash);
    els.form.reset();
    if (els.sendBtn) {
      els.sendBtn.disabled = false;
      els.sendBtn.textContent = "Send to Tidy Butt";
      els.sendBtn.classList.remove("is-queued");
    }
    setStatus("Reset complete. Nothing is stored for this tool on this device.", false);
    setLastSentNoteFromStorage();
    updateProgressUI();
  }

  function copySummary() {
    const current = getCurrentResponses();
    const total = computeTotal(current.scores);
    const lines = [
      "Distance Travelled (private)",
      `Checkpoint: ${mode}`,
      `Overall: ${scoreToText(total)}`,
      "",
      "Notes:",
      ...ITEMS.map((it) => {
        const v = (current.scores[it.id] === 0 || current.scores[it.id]) ? current.scores[it.id] : "blank";
        const n = (current.notes[it.id] || "").trim();
        return `- ${it.id}: ${v}${n ? ` | ${n}` : ""}`;
      })
    ];
    navigator.clipboard.writeText(lines.join("\n")).then(
      () => setStatus("Copied summary to clipboard.", false),
      () => setStatus("Could not copy automatically. Try selecting text manually.", true)
    );
  }

  function printOrPdf() { window.print(); }

  async function sendNow() {
    if (!els.consentBox || !els.consentBox.checked) {
      setStatus("Please tick the consent box before sending.", true);
      return;
    }

    // Build a minimal payload (avoid accidental identifiers)
    const snapshot = {
      version: "v1",
      checkpoint: mode,
      sentAt: nowISO(),
      anonId: getAnonId(),
      ...getCurrentResponses()
    };

    // Prevent repeated identical sends from the same device
    const payloadStr = JSON.stringify(snapshot);
    const payloadHash = await shaLike(payloadStr);
    const lastHash = localStorage.getItem(STORAGE_KEYS.lastSentPayloadHash);
    if (lastHash && lastHash === payloadHash) {
      setStatus("Already sent (queued) from this device for the current answers.", false);
      setSendQueuedUI();
      setLastSentNoteFromStorage();
      closeModal();
      return;
    }

    setStatus("Sending (queued)…", false);

    try {
      // Fire-and-forget style: Apps Script should accept JSON
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: payloadStr
      });

      // With no-cors, we cannot reliably read response,
      // so treat the action as “queued”.
      localStorage.setItem(STORAGE_KEYS.lastSentAt, snapshot.sentAt);
      localStorage.setItem(STORAGE_KEYS.lastSentPayloadHash, payloadHash);

      setStatus("Sent (queued). Thank you.", false);
      setSendQueuedUI();
      setLastSentNoteFromStorage();
      closeModal();
    } catch (e) {
      setStatus("Send failed. You can try again, or download the Word document instead.", true);
    }
  }

  function initEvents() {
    // Mode toggles
    els.modeStartBtn?.addEventListener("click", () => {
      mode = "start";
      els.modeStartBtn.setAttribute("aria-pressed", "true");
      els.modeEndBtn.setAttribute("aria-pressed", "false");
      updateModeHint();
      const snap = readSnapshot("start");
      if (snap) setResponsesFromSnapshot(snap);
      updateProgressUI();
      setStatus("", false);
    });

    els.modeEndBtn?.addEventListener("click", () => {
      mode = "end";
      els.modeStartBtn.setAttribute("aria-pressed", "false");
      els.modeEndBtn.setAttribute("aria-pressed", "true");
      updateModeHint();
      const snap = readSnapshot("end");
      if (snap) setResponsesFromSnapshot(snap);
      updateProgressUI();
      setStatus("", false);
    });

    // Live update progress
    els.form.addEventListener("change", updateProgressUI);
    els.form.addEventListener("input", updateProgressUI);

    // Actions
    els.saveBtn?.addEventListener("click", () => saveSnapshot(mode));
    els.saveBottomBtn?.addEventListener("click", () => saveSnapshot(mode));
    els.topBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    els.copyBtn?.addEventListener("click", copySummary);
    els.printBtn?.addEventListener("click", printOrPdf);

    // Word doc button: keep as a stub unless you already have logic for it
    els.docBtn?.addEventListener("click", () => {
      setStatus("Word export is not wired in this clean build yet. If you want it, paste your existing export function and I will drop it in.", true);
    });

    els.sendBtn?.addEventListener("click", () => {
      // If already queued on this device, do not re-open modal
      if (els.sendBtn.disabled) {
        setStatus("Already sent (queued) from this device.", false);
        return;
      }
      openModal();
    });

    els.resetBtn?.addEventListener("click", resetAll);

    // Modal
    els.modalCancel?.addEventListener("click", closeModal);
    els.modalSend?.addEventListener("click", sendNow);

    // Close modal on overlay click
    els.modalOverlay?.addEventListener("click", (e) => {
      if (e.target === els.modalOverlay) closeModal();
    });

    // Escape closes modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && els.modalOverlay?.getAttribute("data-open") === "true") closeModal();
    });
  }

  /* =========================
     INIT
     ========================= */
  function init() {
    if (!grab()) return;

    buildForm();

    // Load start snapshot by default if present
    const startSnap = readSnapshot("start");
    if (startSnap) setResponsesFromSnapshot(startSnap);

    updateModeHint();
    updateProgressUI();
    setLastSentNoteFromStorage();
    maybeRestoreQueuedUI();

    initEvents();
  }

  // Important: layout.js rebuilds the DOM and then dispatches layout:ready.
  // Initialise after layout is ready, and also if the page loads without the shell for any reason.
  window.addEventListener("layout:ready", init);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
