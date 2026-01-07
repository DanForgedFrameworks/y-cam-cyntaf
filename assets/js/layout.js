/* Home hero centring */
.hero--centre{
  text-align: center;
}
.hero--centre p{
  margin-left: auto;
  margin-right: auto;
}
.hero-subtitle{
  margin: .7rem auto 0 auto;
  font-size: 1.1rem;
  color: rgba(255,255,255,0.88);
}
.hero-lead{
  margin: .85rem auto 0 auto;
  max-width: 70ch;
}
.hero-actions--centre{
  justify-content: center;
}

/* Sessions grid: 3 per row, centred */
.session-grid{
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: .65rem;
  max-width: 720px;
  margin: .9rem auto 0 auto;
}
@media (max-width: 900px){
  .session-grid{
    grid-template-columns: repeat(2, minmax(160px, 1fr));
  }
}
@media (max-width: 520px){
  .session-grid{
    grid-template-columns: 1fr;
  }
}
