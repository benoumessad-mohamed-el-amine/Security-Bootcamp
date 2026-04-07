import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TerminalHero from '../components/TerminalHero'
import ScrollReveal from '../components/ScrollReveal'

const STATS = [
  { target: 16, label: 'Semaines' },
  { target: 11, label: 'Modules' },
  { target: 40, label: 'Outils couverts' },
  { target: 60, label: '% Pratique' },
]

const FEATURES = [
  { icon: '⚙', title: 'Format Intensif', desc: '8 à 10h par jour, mix théorie 40% / pratique 60%. Apprenez comme un vrai pro en conditions réelles.' },
  { icon: '⚔', title: 'Labs Réels', desc: 'Environnements de lab dédiés : VMs, Docker, réseaux isolés. Attaquez et défendez des infrastructures réalistes.' },
  { icon: '◎', title: 'Prérequis', desc: 'Réseaux de base, Linux, scripting. Pas besoin d\'être expert — mais il faut avoir les fondations solides.' },
  { icon: '✓', title: 'Certif Ready', desc: 'Préparation complète aux certifs OSCP, CEH, CISSP, CompTIA Security+ directement intégrée au cursus.' },
]

function StatCounter({ target, label }) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1400
        const step = 16
        const inc = target / (duration / step)
        let current = 0
        const timer = setInterval(() => {
          current += inc
          if (current >= target) { el.textContent = target; clearInterval(timer) }
          else el.textContent = Math.floor(current)
        }, step)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div className="stat">
      <span ref={ref} className="stat-num">0</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Home() {
  return (
    <main className="page-fade">
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">▶ FORMATION INTENSIVE — 16 SEMAINES</div>
          <h1 className="hero-title">
            <span className="glitch">DEVENEZ UN</span>
            <br />
            <span className="hero-accent">EXPERT EN<br />CYBERSÉCURITÉ</span>
          </h1>
          <p className="hero-sub">
            Formation avancée couvrant le Red Team, Blue Team, Cryptographie,<br />
            Cloud Security et bien plus. De zéro à expert opérationnel.
          </p>
          <div className="hero-stats">
            {STATS.map((s, i) => (
              <span key={s.label}>
                <StatCounter target={s.target} label={s.label} />
                {i < STATS.length - 1 && <span className="stat-sep">|</span>}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <Link to="/modules" className="btn-primary">▶ Explorer les modules</Link>
            <Link to="/enroll" className="btn-secondary">◆ Candidater maintenant</Link>
          </div>
        </div>
        <TerminalHero />
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-header">
          <span className="section-tag">&lt;overview&gt;</span>
          <h2>La Formation</h2>
        </div>
        <div className="about-grid">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 80}>
              <div className="about-card">
                <div className="card-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: f.desc.replace(/40%|60%/g, m => `<strong>${m}</strong>`) }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <div>
            <h2>Prêt à commencer votre transformation ?</h2>
            <p>Rejoignez la prochaine cohorte et devenez un expert en cybersécurité.</p>
          </div>
          <div className="cta-band-actions">
            <Link to="/modules" className="btn-secondary">Voir le programme</Link>
            <Link to="/enroll" className="btn-primary">Candidater</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
