import { certifications } from '../data/certifications'
import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

function DifficultyBar({ level }) {
  return (
    <div className="diff-bar">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`diff-dot ${i < level ? 'active' : ''}`} />
      ))}
    </div>
  )
}

export default function Certifications() {
  return (
    <main className="page-fade inner-page">
      <div className="page-hero">
        <div className="hero-grid" />
        <div className="page-hero-content">
          <span className="section-tag">&lt;certifications&gt;</span>
          <h1>Certifications Préparées</h1>
          <p>Du niveau entrée au niveau expert — préparez-vous aux certifications les plus reconnues du secteur.</p>
        </div>
      </div>

      <section className="certs-section">
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={(i % 3) * 80}>
              <div className={`cert-card ${cert.variant}`}>
                <div className="cert-logo">{cert.logo}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-level">{cert.level}</div>
                <DifficultyBar level={cert.difficulty} />
                <p className="cert-desc">{cert.desc}</p>
                <div className="cert-topics">
                  {cert.topics.map(t => (
                    <span key={t} className="tool-item" style={{ fontSize: '0.68rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <div className="certs-cta">
            <h3>Toutes les certifications sont préparées dans le <Link to="/modules/11" style={{ color: 'var(--accent)' }}>Module 11 — Projet Final</Link></h3>
            <Link to="/enroll" className="btn-primary" style={{ display: 'inline-flex', marginTop: '1.5rem' }}>
              ◆ Candidater à la formation
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
