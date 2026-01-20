<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Tidy Butt: Y Cam Cyntaf | Distance Travelled (Confidence Check-in)</title>

  <link rel="stylesheet" href="/y-cam-cyntaf/assets/css/styles.css" />
  <script defer src="/y-cam-cyntaf/assets/js/layout.js"></script>

  <style>
    /* Component-only styling (dt-*) */
    .dt-container{ width: min(1100px, 100%); margin: 0 auto; }
    .dt-card{
      background:#fff;
      border: 1px solid rgba(67,167,227,0.22);
      border-radius: 26px;
      box-shadow: 0 0 0 1px rgba(67,167,227,0.18), 0 18px 55px rgba(67,167,227,0.14);
      overflow:hidden;
    }
    .dt-header{
      padding: 22px;
      background: linear-gradient(90deg, rgba(107,32,210,0.10), rgba(67,167,227,0.10));
      border-bottom: 1px solid rgba(17,24,39,0.10);
    }
    .dt-title{ margin:0 0 10px 0; font-size: 28px; line-height: 1.15; }
    .dt-intro{ margin:0; color: rgba(17,24,39,0.72); line-height:1.6; max-width: 80ch; }
    .dt-reassure{
      margin-top: 12px;
      padding: 12px 14px;
      border-radius: 16px;
      background: rgba(255,152,29,0.14);
      border: 1px solid rgba(255,152,29,0.22);
      color: rgba(17,24,39,0.86);
    }

    .dt-body{ padding: 22px; display:grid; gap: 14px; }

    .dt-row{ display:grid; grid-template-columns: 1fr; gap: 12px; align-items:start; }
    @media (min-width: 920px){
      .dt-row{ grid-template-columns: 1.45fr 1fr; gap: 14px; }
      .dt-summary-grid{ grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .dt-summary-lists{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }

    .dt-panel{
      background:#fff;
      border: 1px solid rgba(17,24,39,0.10);
      border-radius: 20px;
      padding: 16px;
      box-shadow: 0 10px 24px rgba(17,24,39,0.06);
    }
    .dt-panel h2{ margin:0 0 8px 0; font-size: 16px; }

    .dt-small, .dt-hint, .dt-message, .dt-footer-note{
      margin:0;
      color: rgba(17,24,39,0.68);
      font-size: 13px;
      line-height: 1.55;
    }
    .dt-hint{ margin-top: 8px; }

    .dt-mode{ display:flex; flex-wrap:wrap; gap:10px; align-items:center; }

    .dt-seg{
      display:inline-flex;
      border: 1px solid rgba(17,24,39,0.12);
      border-radius: 999px;
      overflow:hidden;
      background: rgba(17,24,39,0.03);
    }
    .dt-seg button{
      appearance:none;
      border:0;
      background: transparent;
      color: rgba(17,24,39,0.90);
      padding: 10px 12px;
      cursor:pointer;
      font-weight: 900;
      letter-spacing: 0.2px;
      min-width: 140px;
    }
    .dt-seg button[aria-pressed="true"]{
      background: rgba(84,57,184,0.14);
    }

    .dt-items{ display:grid; gap:14px; }

    fieldset.dt-item{
      border: 1px solid rgba(17,24,39,0.10);
      border-radius: 20px;
      padding: 14px;
      margin: 0;
      background: rgba(17,24,39,0.02);
    }
    fieldset.dt-item:nth-of-type(odd){
      background: rgba(67,167,227,0.06);
      border-color: rgba(67,167,227,0.16);
    }
    fieldset.dt-item:nth-of-type(even){
      background: rgba(255,152,29,0.08);
      border-color: rgba(255,152,29,0.16);
    }
    .dt-legend{ padding:0 6px; font-weight: 900; line-height: 1.35; color: rgba(17,24,39,0.94); }
    .dt-why{ margin: 8px 0 10px 0; color: rgba(17,24,39,0.72); font-size: 13px; line-height: 1.5; }
    .dt-tag{
      display:inline-flex;
      align-items:center;
      gap: 6px;
      font-size: 12px;
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid rgba(17,24,39,0.10);
      background:#fff;
      color: rgba(17,24,39,0.70);
      margin-top: 6px;
      width: fit-content;
    }

    .dt-scale{ display:grid; gap:10px; margin-top:10px; }
    .dt-scale-row{ display:grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; }
    @media (max-width: 640px){ .dt-scale-row{ grid-template-columns: 1fr; } }

    .dt-choice{
      position: relative;
      border: 1px solid rgba(17,24,39,0.10);
      border-radius: 16px;
      padding: 10px 10px 12px;
      background: #fff;
      min-height: 64px;
      display:flex;
      flex-direction:column;
      gap: 6px;
      justify-content: space-between;
      box-shadow: 0 10px 18px rgba(17,24,39,0.05);
    }
    .dt-choice input{ position:absolute; inset:0; opacity:0; cursor:pointer; }
    .dt-choice .dt-num{
      font-size: 12px;
      color: rgba(17,24,39,0.55);
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    .dt-choice .dt-anchor{ font-weight: 900; font-size: 13px; line-height: 1.25; color: rgba(17,24,39,0.92); }

    .dt-choice:has(input:checked){
      border-color: rgba(255,152,29,0.55);
      background: rgba(255,152,29,0.14);
    }
    .dt-choice:has(input:focus-visible){
      outline: 3px solid rgba(255,152,29,0.35);
      outline-offset: 2px;
    }

    .dt-notes{ margin-top: 10px; display:grid; gap:6px; }
    .dt-notes label{ font-size: 13px; font-weight: 900; color: rgba(17,24,39,0.82); }

    textarea.dt-textarea{
      width:100%;
      resize: vertical;
      min-height: 74px;
      max-height: 240px;
      padding: 10px 10px;
      border-radius: 16px;
      border: 1px solid rgba(17,24,39,0.10);
      background:#fff;
      color: rgba(17,24,39,0.92);
      font-family: inherit;
      line-height: 1.45;
    }
    textarea.dt-textarea:focus-visible{
      outline: 3px solid rgba(255,152,29,0.35);
      outline-offset: 2px;
    }

    .dt-scoreline{ display:flex; flex-wrap:wrap; gap:10px; align-items:baseline; justify-content:space-between; }
    .dt-score{ color: rgba(17,24,39,0.72); font-size: 13px; }
    .dt-score strong{ color: rgba(17,24,39,0.92); font-size: 14px; }

    .dt-bar{
      height: 12px;
      border-radius: 999px;
      background: rgba(17,24,39,0.08);
      border: 1px solid rgba(17,24,39,0.10);
      overflow: hidden;
      margin-top: 8px;
    }
    .dt-bar > span{
      display:block;
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, rgba(255,152,29,0.85), rgba(67,167,227,0.75));
      border-radius: 999px;
      transition: width 240ms ease;
    }

    .dt-actions, .dt-bottom-actions{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      align-items:center;
      justify-content:flex-start;
      margin-top: 10px;
    }

    .dt-btn{
      appearance:none;
      border: 1px solid rgba(0,0,0,0.10);
      background: var(--tidy-orange, #ff981d);
      color: #1b1205;
      padding: 10px 12px;
      border-radius: 999px;
      cursor: pointer;
      font-weight: 900;
      letter-spacing: 0.2px;
      font-size: 13px;
      box-shadow: 0 10px 22px rgba(17,24,39,0.10);
    }
    .dt-btn:hover{ filter: brightness(0.98); }
    .dt-btn:focus-visible{ outline: 3px solid rgba(255,152,29,0.35); outline-offset: 2px; }

    .dt-btn.danger{
      background: #fff;
      color: #b91c1c;
      border-color: rgba(185,28,28,0.22);
    }
    .dt-btn.is-queued{
      background: rgba(17,24,39,0.06);
      color: rgba(17,24,39,0.60);
      border-color: rgba(17,24,39,0.10);
      cursor: default;
      box-shadow: none;
    }

    .dt-status{ min-height: 1.2em; color: rgba(17,24,39,0.70); font-size: 13px; line-height: 1.4; margin-top: 8px; }
    .dt-status strong{ color: rgba(17,24,39,0.92); }

    .dt-summary-grid{ display:grid; gap: 10px; margin-top: 10px; }
    .dt-summary-box{
      border: 1px solid rgba(17,24,39,0.10);
      border-radius: 20px;
      padding: 12px;
      background:#fff;
      box-shadow: 0 10px 20px rgba(17,24,39,0.06);
    }
    .dt-summary-label{
      font-size: 12px;
      color: rgba(17,24,39,0.55);
      letter-spacing: 0.2px;
      text-transform: uppercase;
      font-weight: 900;
    }
    .dt-summary-value{
      margin-top: 6px;
      font-weight: 900;
      font-size: 16px;
      line-height: 1.2;
      color: rgba(17,24,39,0.92);
    }
    .dt-summary-sub{
      margin-top: 6px;
      color: rgba(17,24,39,0.72);
      font-size: 13px;
      line-height: 1.45;
    }
    .dt-summary-guidance{
      margin-top: 12px;
      border-top: 1px solid rgba(17,24,39,0.10);
      padding-top: 12px;
    }
    .dt-summary-h3{ margin:0 0 8px 0; font-size: 15px; }
    .dt-summary-lists{ display:grid; gap: 10px; margin-top: 10px; }
    .dt-summary-list{
      border: 1px solid rgba(17,24,39,0.10);
      border-radius: 20px;
      padding: 12px;
      background: rgba(17,24,39,0.02);
    }
    .dt-summary-h4{ margin:0 0 8px 0; font-size: 14px; color: rgba(17,24,39,0.92); }
    .dt-summary-ul{ margin:0; padding-left: 18px; color: rgba(17,24,39,0.72); line-height: 1.5; font-size: 13px; }
    .dt-summary-ul li{ margin:6px 0; }

    .dt-modal-overlay{
      position: fixed;
      inset: 0;
      background: rgba(17,24,39,0.55);
      display: none;
      align-items: center;
      justify-content: center;
      padding: 18px;
      z-index: 9999;
    }
    .dt-modal-overlay[data-open="true"]{ display:flex; }
    .dt-modal{
      width: min(680px, 100%);
      background: #fff;
      border: 1px solid rgba(17,24,39,0.12);
      border-radius: 20px;
      box-shadow: 0 18px 40px rgba(17,24,39,0.16);
      padding: 16px;
    }
    .dt-modal h3{ margin:0 0 8px 0; font-size: 16px; color: rgba(17,24,39,0.92); }
    .dt-modal p{ margin:0 0 10px 0; color: rgba(17,24,39,0.70); font-size: 13px; line-height: 1.55; }
    .dt-modal-box{
      border: 1px solid rgba(17,24,39,0.10);
      border-radius: 16px;
      background: rgba(17,24,39,0.02);
      padding: 12px;
      margin-top: 10px;
    }
    .dt-modal-actions{ display:flex; flex-wrap:wrap; gap:10px; margin-top:12px; justify-content:flex-end; }

    .sr-only{
      position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden;
      clip: rect(0,0,0,0); white-space:nowrap; border:0;
    }

    @media print{
      .dt-actions, .dt-bottom-actions, .dt-modal-overlay{ display:none !important; }
      .dt-card, .dt-panel, fieldset.dt-item{ box-shadow:none !important; }
    }
  </style>
</head>

<body>
  <div data-page-content data-sidebar="true">
    <h1>Distance Travelled</h1>
    <p class="small">
      A private confidence check-in you can use in Session 1 and Session 6. This is not graded and you cannot fail.
    </p>

    <main class="dt-container" id="dtMain">
      <section id="distance-travelled" class="dt-card" aria-labelledby="dt-title">
        <header class="dt-header">
          <h2 id="dt-title" class="dt-title">Distance Travelled: a private confidence check-in</h2>

          <p class="dt-intro">
            This is a gentle way to notice your progress. You can use it twice: once at the start (Session 1) and again at the end (Session 6).
            It focuses on what you have <strong>noticed</strong>, <strong>tried</strong>, and <strong>recognised</strong>.
          </p>

          <div class="dt-reassure" role="note" aria-label="Reassurance">
            <strong>This is private, not graded, and you cannot fail.</strong>
            Nothing is sent anywhere unless you choose to send it. If you save, it stays on this device only.
          </div>
        </header>

        <div class="dt-body">
          <div class="dt-row">
            <section class="dt-panel dt-controls" aria-labelledby="dt-setup-title">
              <h2 id="dt-setup-title">Choose your checkpoint</h2>

              <div class="dt-mode" aria-label="Checkpoint mode selector">
                <span><strong>I am doing:</strong></span>
                <div class="dt-seg" role="group" aria-label="Start or End checkpoint">
                  <button type="button" id="dtModeStart" aria-pressed="true">Start of course</button>
                  <button type="button" id="dtModeEnd" aria-pressed="false">End of course</button>
                </div>
              </div>

              <p class="dt-hint" id="dt-mode-hint"></p>

              <p class="dt-small">
                How to use the scale: pick the statement that matches how you feel <strong>today</strong>.
                If you are unsure between two, choose the lower one. That keeps this low pressure.
              </p>

              <p class="dt-footer-note">
                Tip: If you want to keep this entirely offline with no saved data, you can still fill it in and use Print to save a PDF.
              </p>
            </section>

            <section class="dt-panel dt-progress" aria-labelledby="dt-progress-title">
              <h2 id="dt-progress-title">Your progress view</h2>

              <div class="dt-scoreline">
                <div class="dt-score" id="dtScoreText">Overall: <strong>0</strong> out of <strong>0</strong></div>
                <div class="dt-score" id="dtScorePct">0%</div>
              </div>

              <div class="dt-bar" aria-label="Overall progress bar">
                <span id="dtBarFill"></span>
              </div>

              <p class="dt-message" id="dtSupportMessage">
                Small changes count. Even noticing a word in the wild is real progress.
              </p>

              <div class="dt-actions" aria-label="Actions">
                <button class="dt-btn" type="button" id="dtSaveBtn">Save on this device</button>
                <button class="dt-btn" type="button" id="dtCopyBtn">Copy summary</button>
                <button class="dt-btn" type="button" id="dtDocBtn">Download Word document</button>
                <button class="dt-btn" type="button" id="dtPrintBtn">Print or Save as PDF</button>
                <button class="dt-btn" type="button" id="dtSendBtn">Send to Tidy Butt</button>
                <button class="dt-btn danger" type="button" id="dtResetBtn">Reset</button>
              </div>

              <div class="dt-status" id="dtStatus" aria-live="polite"></div>
              <p class="dt-footer-note" id="dtLastSentNote"></p>
            </section>
          </div>

          <form id="dtForm" class="dt-items" novalidate></form>

          <div class="dt-bottom-actions" aria-label="After questions actions">
            <button class="dt-btn" type="button" id="dtSaveBottomBtn">Save on this device</button>
            <button class="dt-btn" type="button" id="dtTopBtn">Go to top of page</button>
          </div>

          <section class="dt-panel dt-summary" aria-labelledby="dtSummaryTitle">
            <h2 id="dtSummaryTitle">Your checkpoint summary</h2>
            <p class="dt-small" id="dtSummaryIntro">
              This summary is private to you. It is designed to help you notice progress, not to judge you.
            </p>

            <div class="dt-summary-grid" role="group" aria-label="Summary scores">
              <div class="dt-summary-box" aria-label="Start score box">
                <div class="dt-summary-label">Start of course</div>
                <div class="dt-summary-value" id="dtSummaryStartValue">Not saved yet</div>
                <div class="dt-summary-sub" id="dtSummaryStartSub">Complete and save your Start checkpoint to capture a baseline.</div>
              </div>

              <div class="dt-summary-box" aria-label="End score box">
                <div class="dt-summary-label">End of course</div>
                <div class="dt-summary-value" id="dtSummaryEndValue">Not saved yet</div>
                <div class="dt-summary-sub" id="dtSummaryEndSub">Complete and save your End checkpoint to see distance travelled.</div>
              </div>

              <div class="dt-summary-box" aria-label="Distance travelled box">
                <div class="dt-summary-label">Distance travelled</div>
                <div class="dt-summary-value" id="dtSummaryDistanceValue">Save both checkpoints to compare.</div>
                <div class="dt-summary-sub" id="dtSummaryDistanceSub">Small changes count, including noticing and trying.</div>
              </div>
            </div>

            <div class="dt-summary-guidance" aria-label="Guidance">
              <h3 class="dt-summary-h3" id="dtGuidanceTitle">Support and next steps</h3>
              <p class="dt-message" id="dtGuidanceMessage"></p>

              <div class="dt-summary-lists" id="dtGuidanceLists" hidden>
                <div class="dt-summary-list">
                  <h4 class="dt-summary-h4">Strengths you can lean on</h4>
                  <ul class="dt-summary-ul" id="dtStrengthsList"></ul>
                </div>

                <div class="dt-summary-list">
                  <h4 class="dt-summary-h4">Confidence to expand next</h4>
                  <ul class="dt-summary-ul" id="dtNextStepsList"></ul>
                </div>
              </div>

              <p class="dt-footer-note" id="dtGuidanceFooter">
                Reminder: this is private, not graded, and you cannot fail. Your scores are simply a way to notice what is changing over time.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>

    <div class="dt-modal-overlay" id="dtModalOverlay" data-open="false">
      <div class="dt-modal" role="dialog" aria-modal="true" aria-labelledby="dtModalTitle">
        <h3 id="dtModalTitle">Send your checkpoint scores to Tidy Butt</h3>
        <p>
          This is optional. It helps us evaluate the course.
          Please do not include personal data such as names, contact details, addresses, or anything that identifies you or someone else.
        </p>

        <div class="dt-modal-box">
          <label for="dtConsent">
            <input type="checkbox" id="dtConsent" />
            <span>
              I understand this sends my scores and notes from this tool.
              I will not include personal data.
            </span>
          </label>
        </div>

        <div class="dt-modal-actions">
          <button class="dt-btn" type="button" id="dtModalCancel">Cancel</button>
          <button class="dt-btn" type="button" id="dtModalSend">Send now</button>
        </div>

        <p class="dt-footer-note" style="margin-top:10px;">
          If sending fails, you can download the Word document and send it later if you choose.
        </p>
      </div>
    </div>
  </div>

  <script>
    (function () {
      "use strict";

      /* =========================
         CONFIG
         ========================= */
      var APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzu-Suutn_00ELOAjaU6RiQNEO0QPQinn89mCDu5hf6azw82TSiK9rPS3hc4hUOd9jGLg/exec";

      var STORAGE_KEYS = {
        start: "tidybutt_ycc_distanceTravelled_v1_start",
        end: "tidybutt_ycc_distanceTravelled_v1_end",
        anonId: "tidybutt_ycc_distanceTravelled_v1_anonId",
        lastSentAt: "tidybutt_ycc_distanceTravelled_v1_lastSentAt"
      };

      var ITEMS = [
        { id: "listen_general", title: "Listening: I feel ok listening to Welsh, even if I only catch a few words.", why: "Why this matters: catching a word or two is real listening progress. You do not need full sentences to be improving." },
        { id: "listen_audio", title: "Listening with audio: I feel confident using audio (voice notes, clips, or live audio) to learn Welsh.", why: "Why this matters: audio helps your ear tune in. Replaying small clips builds familiarity without pressure." },
        { id: "speak_one_word", title: "Speaking: I feel ok saying a word or short phrase out loud (even if my accent feels unsure).", why: "Why this matters: speaking is physical practice. Your mouth and confidence both improve through tiny attempts." },
        { id: "speak_non_welsh_speaker", title: "Speaking with other learners: I feel ok speaking Welsh with someone who is also learning (not a confident Welsh speaker).", why: "Why this matters: learner-to-learner practice is low pressure and builds fluency through shared effort." },
        { id: "speak_confident_welsh_speaker", title: "Speaking with a confident Welsh speaker: I feel ok trying Welsh with someone who speaks it confidently.", why: "Why this matters: this is a common fear. Even one brave attempt builds real-world confidence." },
        { id: "reading_recognise", title: "Reading: I can recognise familiar Welsh words or patterns when I see them.", why: "Why this matters: recognition is the foundation of reading. You are training your brain to spot Welsh quickly." },
        { id: "writing_message", title: "Writing: I feel ok writing a short Welsh message (even if it is simple, and I use a cheat sheet).", why: "Why this matters: writing slows language down in a helpful way. Simple messages are still genuine Welsh use." },
        { id: "public_space", title: "Public spaces: I feel ok using Welsh in a public setting (shop, café, workplace, or community space).", why: "Why this matters: real-life use is the goal. A small moment in public is a big confidence milestone." }
      ];

      var SCALE = [
        { v: 0, a: "Not yet" },
        { v: 1, a: "Just starting" },
        { v: 2, a: "A bit" },
        { v: 3, a: "Mostly" },
        { v: 4, a: "Yes, comfortably" }
      ];

      var MAX_PER_ITEM = 4;
      var MAX_TOTAL = ITEMS.length * MAX_PER_ITEM;

      var form, modeStartBtn, modeEndBtn, modeHint;
      var scoreText, scorePct, barFill, supportMsg;
      var saveBtn, saveBottomBtn, topBtn, copyBtn, docBtn, printBtn, sendBtn, resetBtn;
      var statusEl, lastSentNote;
      var summaryStartValue, summaryEndValue, summaryDistanceValue, summaryStartSub, summaryEndSub, summaryDistanceSub;
      var guidanceMessage, guidanceLists, strengthsList, nextStepsList;
      var modalOverlay, modalCancel, modalSend, consentBox;

      var mode = "start";
      var lastFocusEl = null;

      function escapeHtml(str) {
        return String(str)
          .replaceAll("&", "&amp;")
          .replaceAll("<", "&lt;")
          .replaceAll(">", "&gt;")
          .replaceAll('"', "&quot;")
          .replaceAll("'", "&#039;");
      }

      function safeParse(jsonStr) {
        try { return JSON.parse(jsonStr); } catch (e) { return null; }
      }

      function nowISO() { return new Date().toISOString(); }

      function formatLocalTime(iso) {
        try {
          var d = new Date(iso);
          if (isNaN(d.getTime())) return "";
          return d.toLocaleString("en-GB", { year: "numeric", month: "short", day: "2-digit", hour: "2-digit", minute: "2-digit" });
        } catch (e) { return ""; }
      }

      function setStatus(msg, isError) {
        if (!statusEl) return;
        if (!msg) { statusEl.textContent = ""; return; }
        statusEl.innerHTML = isError ? "<strong>Note:</strong> " + escapeHtml(msg) : escapeHtml(msg);
      }

      function setLastSentNoteFromStorage() {
        var iso = localStorage.getItem(STORAGE_KEYS.lastSentAt);
        if (!iso) { lastSentNote.textContent = ""; return; }
        var nice = formatLocalTime(iso);
        lastSentNote.textContent = nice ? ("Last sent (queued): " + nice + " (stored on this device only)") : "";
      }

      function setSendQueuedUI() {
        if (!sendBtn) return;
        sendBtn.textContent = "Sent (queued)";
        sendBtn.classList.add("is-queued");
        sendBtn.disabled = true;
      }

      function restoreSendUIIfPreviouslySent() {
        var iso = localStorage.getItem(STORAGE_KEYS.lastSentAt);
        if (iso) setSendQueuedUI();
      }

      function getAnonId() {
        var existing = localStorage.getItem(STORAGE_KEYS.anonId);
        if (existing) return existing;
        var id = "anon_" + Math.random().toString(16).slice(2) + "_" + Date.now().toString(16);
        localStorage.setItem(STORAGE_KEYS.anonId, id);
        return id;
      }

      function readSnapshot(which) {
        var key = which === "start" ? STORAGE_KEYS.start : STORAGE_KEYS.end;
        var raw = localStorage.getItem(key);
        if (!raw) return null;
        var parsed = safeParse(raw);
        if (!parsed || typeof parsed !== "object") return null;
        return parsed;
      }

      function writeSnapshot(which, data) {
        var key = which === "start" ? STORAGE_KEYS.start : STORAGE_KEYS.end;
        localStorage.setItem(key, JSON.stringify(data));
      }

      function clearAllSnapshots() {
        localStorage.removeItem(STORAGE_KEYS.start);
        localStorage.removeItem(STORAGE_KEYS.end);
      }

      function computeTotal(scores) {
        var total = 0;
        for (var i = 0; i < ITEMS.length; i++) {
          var item = ITEMS[i];
          var v = scores[item.id];
          if (v === 0 || v) total += Number(v);
        }
        return total;
      }

      function scoreToText(total) {
        var pct = MAX_TOTAL === 0 ? 0 : Math.round((total / MAX_TOTAL) * 100);
        return total + "/" + MAX_TOTAL + " (" + pct + "%)";
      }

      function categoryTagText(itemId) {
        if (itemId.indexOf("listen") === 0) return "Listening";
        if (itemId.indexOf("speak") === 0) return "Speaking";
        if (itemId.indexOf("reading") === 0) return "Reading";
        if (itemId.indexOf("writing") === 0) return "Writing";
        if (itemId.indexOf("public") === 0) return "Real-life use";
        return "Confidence";
      }

      function buildForm() {
        var html = "";
        for (var i = 0; i < ITEMS.length; i++) {
          var item = ITEMS[i];
          var legendId = "dt-legend-" + item.id;
          var whyId = "dt-why-" + item.id;
          var notesId = "dt-notes-" + item.id;

          html += "<fieldset class='dt-item' aria-labelledby='" + legendId + "' aria-describedby='" + whyId + "'>";
          html += "  <legend class='dt-legend' id='" + legendId + "'>" + escapeHtml((i + 1) + ". " + item.title) + "</legend>";
          html += "  <p class='dt-why' id='" + whyId + "'>" + escapeHtml(item.why) + "</p>";
          html += "  <div class='dt-tag' aria-label='Skill area'>" + escapeHtml(categoryTagText(item.id)) + "</div>";

          html += "  <div class='dt-scale' role='group' aria-label='Confidence scale'>";
          html += "    <div class='dt-scale-row'>";

          for (var s = 0; s < SCALE.length; s++) {
            var opt = SCALE[s];
            var inputId = "dt-" + item.id + "-" + opt.v;
            var name = "score_" + item.id;

            html += "      <label class='dt-choice' for='" + inputId + "'>";
            html += "        <input type='radio' id='" + inputId + "' name='" + name + "' value='" + opt.v + "' aria-label='" + escapeHtml(opt.a) + " (" + opt.v + ")' />";
            html += "        <span class='dt-num'>" + opt.v + "</span>";
            html += "        <span class='dt-anchor'>" + escapeHtml(opt.a) + "</span>";
            html += "      </label>";
          }

          html += "    </div>";
          html += "  </div>";

          html += "  <div class='dt-notes'>";
          html += "    <label for='" + notesId + "'>Notes to self (private, optional)</label>";
          html += "    <textarea class='dt-textarea' id='" + notesId + "' name='note_" + item.id + "' placeholder='Do not include personal data. For example: where I noticed Welsh, what felt easier, what I want to try next.'></textarea>";
          html += "  </div>";
          html += "</fieldset>";
        }

        form.innerHTML = html;
      }

      function getCurrentResponses() {
        var scores = {};
        var notes = {};
        for (var i = 0; i < ITEMS.length; i++) {
          var item = ITEMS[i];
          var scoreName = "score_" + item.id;
          var selected = form.querySelector("input[name='" + scoreName + "']:checked");
          if (selected) scores[item.id] = Number(selected.value);

          var noteEl = form.querySelector("textarea[name='note_" + item.id + "']");
          notes[item.id] = noteEl ? String(noteEl.value || "") : "";
        }
        return { scores: scores, notes: notes };
      }

      function setResponsesFromSnapshot(snapshot) {
        if (!snapshot) return;

        for (var i = 0; i < ITEMS.length; i++) {
          var item = ITEMS[i];
          var val = snapshot.scores ? snapshot.scores[item.id] : undefined;

          var radios = form.querySelectorAll("input[name='score_" + item.id + "']");
          radios.forEach(function (r) { r.checked = false; });

          if (val === 0 || val) {
            var input = form.querySelector("input[name='score_" + item.id + "'][value='" + val + "']");
            if (input) input.checked = true;
          }

          var noteEl = form.querySelector("textarea[name='note_" + item.id + "']");
          if (noteEl) {
            var n = snapshot.notes && typeof snapshot.notes[item.id] === "string" ? snapshot.notes[item.id] : "";
            noteEl.value = n;
          }
        }
      }

      function buildGuidanceFromSnapshot(snap) {
        var strengths = [];
        var nextSteps = [];

        for (var i = 0; i < ITEMS.length; i++) {
          var item = ITEMS[i];
          var v = Number((snap.scores || {})[item.id]);
          if (!Number.isFinite(v)) continue;

          if (v >= 3) strengths.push(item);
          else nextSteps.push(item);
        }

        return { strengths: strengths.slice(0, 5), nextSteps: nextSteps.slice(0, 5) };
      }

      function renderSummaryCard() {
        var startSnap = readSnapshot("start");
        var endSnap = readSnapshot("end");

        var current = getCurrentResponses();
        var currentTotal = computeTotal(current.scores);

        var startTotal = startSnap ? computeTotal(startSnap.scores || {}) : null;
        var endTotal = endSnap ? computeTotal(endSnap.scores || {}) : null;

        if (startTotal === null) {
          summaryStartValue.textContent = (mode === "start" && Object.keys(current.scores).length > 0)
            ? scoreToText(currentTotal) + " (not saved)"
            : "Not saved yet";
          summaryStartSub.textContent = "Complete and save your Start checkpoint to capture a baseline.";
        } else {
          summaryStartValue.textContent = scoreToText(startTotal);
          summaryStartSub.textContent = "Saved on this device.";
        }

        if (endTotal === null) {
          summaryEndValue.textContent = (mode === "end" && Object.keys(current.scores).length > 0)
            ? scoreToText(currentTotal) + " (not saved)"
            : "Not saved yet";
          summaryEndSub.textContent = "Complete and save your End checkpoint to see distance travelled.";
        } else {
          summaryEndValue.textContent = scoreToText(endTotal);
          summaryEndSub.textContent = "Saved on this device.";
        }

        if (startTotal !== null && endTotal !== null) {
          var delta = endTotal - startTotal;
          var sign = delta > 0 ? "+" : delta < 0 ? "−" : "";
          summaryDistanceValue.textContent = sign + Math.abs(delta) + " points";
          summaryDistanceSub.textContent = delta === 0
            ? "Steady counts. Consistency is still progress."
            : "That is real distance travelled. Small changes count.";

          guidanceMessage.textContent = "Use this as a gentle reflection. This is not a judgement.";
          guidanceLists.hidden = false;

          var guidance = buildGuidanceFromSnapshot(endSnap);

          strengthsList.innerHTML = guidance.strengths.map(function (it) {
            return "<li>" + escapeHtml(it.title) + "</li>";
          }).join("");

          nextStepsList.innerHTML = guidance.nextSteps.map(function (it) {
            return "<li>" + escapeHtml(it.title) + "</li>";
          }).join("");
        } else {
          summaryDistanceValue.textContent = "Save both checkpoints to compare.";
          summaryDistanceSub.textContent = "Small changes count, including noticing and trying.";
          guidanceMessage.textContent = "Save your Start checkpoint now, and your End checkpoint in Session 6, to see your distance travelled.";
          guidanceLists.hidden = true;
          strengthsList.innerHTML = "";
          nextStepsList.innerHTML = "";
        }
      }

      function updateProgressUI() {
        var current = getCurrentResponses();
        var answeredCount = Object.keys(current.scores).length;
        var total = computeTotal(current.scores);
        var pct = MAX_TOTAL === 0 ? 0 : Math.round((total / MAX_TOTAL) * 100);

        scoreText.innerHTML = "Overall: <strong>" + total + "</strong> out of <strong>" + MAX_TOTAL + "</strong>";
        scorePct.textContent = pct + "%";
        barFill.style.width = pct + "%";

        if (answeredCount === 0) {
          supportMsg.textContent = "Start anywhere. One item is enough for today.";
        } else if (answeredCount < ITEMS.length) {
          supportMsg.textContent = "Nice. You have started. You can leave any item blank if it does not fit today.";
        } else {
          if (pct <= 25) supportMsg.textContent = "This looks like an honest baseline. Being at the start is expected and welcome here.";
          else if (pct <= 55) supportMsg.textContent = "You are building foundations. Keep noticing small wins. They add up.";
          else if (pct <= 80) supportMsg.textContent = "You have lots to work with already. The course can help make it feel more automatic.";
          else supportMsg.textContent = "You are feeling very ready. You can use the course to stay relaxed and make it social.";
        }

        renderSummaryCard();
      }

      function setMode(newMode) {
        mode = newMode;
        modeStartBtn.setAttribute("aria-pressed", mode === "start" ? "true" : "false");
        modeEndBtn.setAttribute("aria-pressed", mode === "end" ? "true" : "false");

        modeHint.textContent = mode === "start"
          ? "Start checkpoint: this captures a baseline for you."
          : "End checkpoint: compare to your Start checkpoint to see your distance travelled.";

        var snap = readSnapshot(mode);
        if (snap) setResponsesFromSnapshot(snap);

        updateProgressUI();
      }

      function saveSnapshot(which) {
        var current = getCurrentResponses();
        var payload = {
          version: "v1",
          which: which,
          savedAt: nowISO(),
          anonId: getAnonId(),
          scores: current.scores,
          notes: current.notes
        };
        writeSnapshot(which, payload);
        setStatus("Saved " + (which === "start" ? "Start" : "End") + " checkpoint on this device.", false);
        updateProgressUI();
      }

      function resetAll() {
        if (!confirm("Reset your saved Start and End checkpoints on this device?")) return;

        clearAllSnapshots();
        localStorage.removeItem(STORAGE_KEYS.lastSentAt);

        form.reset();
        setMode("start");

        sendBtn.disabled = false;
        sendBtn.textContent = "Send to Tidy Butt";
        sendBtn.classList.remove("is-queued");

        setStatus("Reset complete. Nothing is stored for this tool on this device.", false);
        setLastSentNoteFromStorage();
        updateProgressUI();
      }

      function copySummary() {
        var current = getCurrentResponses();
        var total = computeTotal(current.scores);

        var lines = [
          "Distance Travelled (private)",
          "Checkpoint: " + mode,
          "Overall: " + total + "/" + MAX_TOTAL,
          "",
          "Notes:"
        ];

        for (var i = 0; i < ITEMS.length; i++) {
          var it = ITEMS[i];
          var v = (current.scores[it.id] === 0 || current.scores[it.id]) ? current.scores[it.id] : "blank";
          var n = (current.notes[it.id] || "").trim();
          lines.push("- " + it.title + " | " + v + (n ? (" | " + n) : ""));
        }

        navigator.clipboard.writeText(lines.join("\n")).then(
          function () { setStatus("Copied summary to clipboard.", false); },
          function () { setStatus("Could not copy automatically. Try selecting text manually.", true); }
        );
      }

      function exportWord() {
        var current = getCurrentResponses();
        var total = computeTotal(current.scores);

        var rows = ITEMS.map(function (it) {
          var v = (current.scores[it.id] === 0 || current.scores[it.id]) ? String(current.scores[it.id]) : "";
          var n = (current.notes[it.id] || "").trim();

          return "<tr>" +
            "<td style='padding:8px;border:1px solid #ddd;'><strong>" + escapeHtml(it.title) + "</strong><br/><span style='color:#666;'>" + escapeHtml(it.why) + "</span></td>" +
            "<td style='padding:8px;border:1px solid #ddd;width:90px;text-align:center;'>" + escapeHtml(v) + "</td>" +
            "<td style='padding:8px;border:1px solid #ddd;'>" + escapeHtml(n) + "</td>" +
          "</tr>";
        }).join("");

        var lastSentIso = localStorage.getItem(STORAGE_KEYS.lastSentAt);
        var lastSentLine = lastSentIso ? ("<p><strong>Last sent (queued):</strong> " + escapeHtml(formatLocalTime(lastSentIso)) + "</p>") : "";

        var html =
          "<!doctype html><html><head><meta charset='utf-8'></head><body>" +
          "<h2>Distance Travelled: Confidence Check-in</h2>" +
          "<p><strong>Checkpoint:</strong> " + escapeHtml(mode) + "</p>" +
          "<p><strong>Overall:</strong> " + escapeHtml(String(total)) + "/" + escapeHtml(String(MAX_TOTAL)) + "</p>" +
          lastSentLine +
          "<p style='color:#666;'>Private reflection. Not graded. No right or wrong answers.</p>" +
          "<table style='border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:12pt;'>" +
          "<thead><tr>" +
          "<th style='text-align:left;padding:8px;border:1px solid #ddd;'>Statement</th>" +
          "<th style='text-align:center;padding:8px;border:1px solid #ddd;'>Score</th>" +
          "<th style='text-align:left;padding:8px;border:1px solid #ddd;'>Notes</th>" +
          "</tr></thead>" +
          "<tbody>" + rows + "</tbody>" +
          "</table>" +
          "</body></html>";

        var blob = new Blob(["\ufeff", html], { type: "application/msword" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Distance-Travelled-" + mode + "-" + new Date().toISOString().slice(0,10) + ".doc";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(a.href);

        setStatus("Exported Word document.", false);
      }

      function openModal() {
        lastFocusEl = document.activeElement;
        modalOverlay.setAttribute("data-open", "true");
        consentBox.checked = false;
        modalSend.focus();
      }

      function closeModal() {
        modalOverlay.setAttribute("data-open", "false");
        if (lastFocusEl && typeof lastFocusEl.focus === "function") lastFocusEl.focus();
      }

      function sendQueued(payload) {
        // "Queued" send pattern: use no-cors so it doesn't break on Apps Script headers
        return fetch(APPS_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      }

      function doSendNow() {
        if (!consentBox.checked) {
          setStatus("Please tick the consent box before sending.", true);
          return;
        }

        var current = getCurrentResponses();
        var payload = {
          version: "v1",
          sentAt: nowISO(),
          anonId: getAnonId(),
          checkpoint: mode,
          scores: current.scores,
          notes: current.notes
        };

        setStatus("Sending (queued)…", false);

        sendQueued(payload).then(function () {
          // With no-cors we can't read the response. Treat as queued.
          var iso = nowISO();
          localStorage.setItem(STORAGE_KEYS.lastSentAt, iso);

          setStatus("Sent (queued). Thank you.", false);
          setSendQueuedUI();
          setLastSentNoteFromStorage();
          closeModal();
        }).catch(function () {
          setStatus("Send failed. You can try again, or download the Word document instead.", true);
        });
      }

      function init() {
        // Grab DOM
        form = document.getElementById("dtForm");
        modeStartBtn = document.getElementById("dtModeStart");
        modeEndBtn = document.getElementById("dtModeEnd");
        modeHint = document.getElementById("dt-mode-hint");

        scoreText = document.getElementById("dtScoreText");
        scorePct = document.getElementById("dtScorePct");
        barFill = document.getElementById("dtBarFill");
        supportMsg = document.getElementById("dtSupportMessage");

        saveBtn = document.getElementById("dtSaveBtn");
        saveBottomBtn = document.getElementById("dtSaveBottomBtn");
        topBtn = document.getElementById("dtTopBtn");

        copyBtn = document.getElementById("dtCopyBtn");
        docBtn = document.getElementById("dtDocBtn");
        printBtn = document.getElementById("dtPrintBtn");
        sendBtn = document.getElementById("dtSendBtn");
        resetBtn = document.getElementById("dtResetBtn");
        statusEl = document.getElementById("dtStatus");
        lastSentNote = document.getElementById("dtLastSentNote");

        summaryStartValue = document.getElementById("dtSummaryStartValue");
        summaryEndValue = document.getElementById("dtSummaryEndValue");
        summaryDistanceValue = document.getElementById("dtSummaryDistanceValue");
        summaryStartSub = document.getElementById("dtSummaryStartSub");
        summaryEndSub = document.getElementById("dtSummaryEndSub");
        summaryDistanceSub = document.getElementById("dtSummaryDistanceSub");

        guidanceMessage = document.getElementById("dtGuidanceMessage");
        guidanceLists = document.getElementById("dtGuidanceLists");
        strengthsList = document.getElementById("dtStrengthsList");
        nextStepsList = document.getElementById("dtNextStepsList");

        modalOverlay = document.getElementById("dtModalOverlay");
        modalCancel = document.getElementById("dtModalCancel");
        modalSend = document.getElementById("dtModalSend");
        consentBox = document.getElementById("dtConsent");

        buildForm();

        // Load start snapshot by default if it exists
        var startSnap = readSnapshot("start");
        if (startSnap) setResponsesFromSnapshot(startSnap);

        // Mode hint
        modeHint.textContent = "Start checkpoint: this captures a baseline for you.";

        // Wire events
        modeStartBtn.addEventListener("click", function () { setMode("start"); });
        modeEndBtn.addEventListener("click", function () { setMode("end"); });

        form.addEventListener("change", updateProgressUI);
        form.addEventListener("input", updateProgressUI);

        saveBtn.addEventListener("click", function () { saveSnapshot(mode); });
        saveBottomBtn.addEventListener("click", function () { saveSnapshot(mode); });
        topBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

        copyBtn.addEventListener("click", copySummary);
        docBtn.addEventListener("click", exportWord);
        printBtn.addEventListener("click", function () { window.print(); });

        sendBtn.addEventListener("click", function () {
          if (sendBtn.disabled) {
            setStatus("Already sent (queued) from this device.", false);
            return;
          }
          openModal();
        });

        resetBtn.addEventListener("click", resetAll);

        modalCancel.addEventListener("click", closeModal);
        modalSend.addEventListener("click", doSendNow);

        modalOverlay.addEventListener("click", function (e) {
          if (e.target === modalOverlay) closeModal();
        });

        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && modalOverlay.getAttribute("data-open") === "true") closeModal();
        });

        // Initial paint
        updateProgressUI();
        setLastSentNoteFromStorage();
        restoreSendUIIfPreviouslySent();
      }

      // IMPORTANT: layout.js rebuilds the page then dispatches layout:ready.
      // Initialise on layout:ready so everything is bound to the final DOM.
      window.addEventListener("layout:ready", init);
    })();
  </script>
</body>
</html>
