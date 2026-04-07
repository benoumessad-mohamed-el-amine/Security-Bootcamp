import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { modules } from '../data/modules'

const DIFFICULTY_COLOR = {
  'Débutant': 'var(--accent)',
  'Intermédiaire': 'var(--accent-yellow)',
  'Avancé': 'var(--accent-red)',
  'Expert': '#c084fc',
}

export default function Modules() {
  return (
    <main className="page-fade inner-page">
      <div className="page-hero">
        <div className="hero-grid" />
        <div className="page-hero-content">
          <span className="section-tag">&lt;modules&gt;</span>
          <h1>Programme Complet</h1>
          <p>11 modules couvrant l'intégralité du spectre cybersécurité — de 0 à expert opérationnel.</p>
          <div className="page-hero-meta">
            <span className="meta-pill">2 semaines</span>
            <span className="meta-pill">11 modules</span>
            <span className="meta-pill">60% pratique</span>
          </div>
        </div>
      </div>

      <section className="modules-section">
        <div className="modules-grid">
          {modules.map((mod, i) => (
            <ScrollReveal key={mod.id} delay={(i % 3) * 80}>
              <Link to={`/modules/${mod.id}`} className={`module-card ${mod.id === 11 ? 'featured' : ''}`}>
                <div className="module-number">{mod.number}</div>
                <div className="module-content">
                  <h3>{mod.title}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.6rem', alignItems: 'center' }}>
                    <span className={`module-tag ${mod.tag.cls}`}>{mod.tag.label}</span>
                    <span className="module-difficulty" style={{ color: DIFFICULTY_COLOR[mod.difficulty] || 'var(--accent)' }}>
                      {mod.difficulty}
                    </span>
                  </div>
                  <p className="module-desc">{mod.description}</p>
                  <ul>
                    {mod.items.slice(0, 3).map(item => (
                      <li key={item}>{item}</li>
                    ))}
                    {mod.items.length > 3 && <li className="more-items">+{mod.items.length - 3} autres sujets...</li>}
                  </ul>
                  {mod.certs && (
                    <div className="cert-badges" style={{ marginTop: '0.8rem' }}>
                      {mod.certs.map(c => <span key={c} className="cert-badge">{c}</span>)}
                    </div>
                  )}
                </div>
                <div className="module-footer">
                  <span className="module-day">{mod.day}</span>
                  <span className="module-link-arrow">→</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  )
}
