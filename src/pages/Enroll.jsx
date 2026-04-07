import { useState } from 'react'
import { Link } from 'react-router-dom'

const TERMINAL_LINES = [
  { text: './check_requirements.sh', cls: 'cmd' },
  { text: '✓ Réseaux de base .............. OK', cls: 'ok' },
  { text: '✓ Linux / bash .................. OK', cls: 'ok' },
  { text: '✓ Scripting de base ............. OK', cls: 'ok' },
  { text: '✓ Motivation x1000 .............. OK', cls: 'ok' },
  { text: '' },
  { text: './enroll --cohort=2025 --track=full', cls: 'cmd' },
  { text: '✓ Candidature enregistrée', cls: 'ok' },
  { text: '✓ Accès lab provisoire activé', cls: 'ok' },
  { text: '! Nombre de places limité — candidatez maintenant', cls: 'warn' },
]

export default function Enroll() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', level: 'Débutant', goal: 'Pentest / Red Team', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1400)
  }

  return (
    <main className="page-fade inner-page">
      <div className="page-hero">
        <div className="hero-grid" />
        <div className="page-hero-content">
          <span className="section-tag">&lt;enroll&gt;</span>
          <h1>Candidater à la Formation</h1>
          <p>Remplissez le formulaire pour rejoindre la prochaine cohorte CyberSec Bootcamp.</p>
        </div>
      </div>

      <section className="enroll-section" style={{ background: 'var(--bg-primary)' }}>
        <div className="enroll-content">

          {/* Terminal */}
          <div className="enroll-terminal">
            <div className="terminal-header">
              <span className="t-dot red" />
              <span className="t-dot yellow" />
              <span className="t-dot green" />
              <span className="t-title">enroll.sh</span>
            </div>
            <div className="terminal-body enroll-terminal-body">
              {TERMINAL_LINES.map((line, i) => (
                <p key={i} className={`t-line t-${line.cls || 'result'}`}>
                  {line.cls === 'cmd' && <span className="prompt">$ </span>}
                  {line.text}
                </p>
              ))}
            </div>

            {/* Info boxes */}
            <div className="enroll-info-boxes">
              <div className="info-box">
                <span className="info-box-title">Prochaine cohorte</span>
                <span className="info-box-value accent">Janvier 2026</span>
              </div>
              <div className="info-box">
                <span className="info-box-title">Places disponibles</span>
                <span className="info-box-value" style={{ color: 'var(--accent-red)' }}>12 / 20</span>
              </div>
              <div className="info-box">
                <span className="info-box-title">Format</span>
                <span className="info-box-value">Présentiel + Remote</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="enroll-form-wrap">
            {!submitted ? (
              <>
                <h2>Votre candidature</h2>
                <p>Nous vous répondrons sous 48h pour confirmer votre admission.</p>
                <form className="enroll-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nom complet</label>
                      <input name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Niveau actuel</label>
                      <select name="level" value={form.level} onChange={handleChange}>
                        <option>Débutant (prérequis acquis)</option>
                        <option>Intermédiaire</option>
                        <option>Avancé</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Objectif principal</label>
                      <select name="goal" value={form.goal} onChange={handleChange}>
                        <option>Pentest / Red Team</option>
                        <option>Blue Team / SOC</option>
                        <option>Cloud Security</option>
                        <option>GRC / Gouvernance</option>
                        <option>Tout le spectre</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message (optionnel)</label>
                    <textarea
                      name="message"
                      placeholder="Parlez-nous de votre parcours et de vos motivations..."
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                  <button type="submit" className="btn-primary full" disabled={loading}>
                    {loading ? '[ Envoi en cours... ]' : '▶ Envoyer ma candidature'}
                  </button>
                </form>
              </>
            ) : (
              <div className="enroll-success-screen">
                <div className="success-icon">✓</div>
                <h2>Candidature envoyée !</h2>
                <p>Merci pour votre intérêt. Notre équipe vous contactera sous <strong>48h</strong> pour confirmer votre admission et discuter des modalités.</p>
                <div className="success-terminal">
                  <p><span className="prompt">$</span> <span className="t-ok">✓ Candidature #2025-{String(Math.floor(Math.random() * 900) + 100)} enregistrée</span></p>
                  <p><span className="prompt">$</span> <span className="t-ok">✓ Email de confirmation envoyé</span></p>
                  <p><span className="prompt">$</span> <span className="t-warn">! Réponse sous 48h ouvrées</span></p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                  <Link to="/modules" className="btn-secondary">Voir le programme</Link>
                  <Link to="/" className="btn-primary">Retour à l'accueil</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
