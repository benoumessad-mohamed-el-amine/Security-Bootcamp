import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { modules } from '../data/modules'
import { moduleDetails } from '../data/moduleDetails'
import ScrollReveal from '../components/ScrollReveal'

/* ── helpers ─────────────────────────────────────────────── */
const DIFF_COLOR = {
  'Débutant': 'var(--accent)',
  'Intermédiaire': 'var(--accent-yellow)',
  'Avancé': 'var(--accent-red)',
  'Expert': '#c084fc',
}
const DIFF_STARS = { 'Débutant': 1, 'Intermédiaire': 2, 'Avancé': 4, 'Expert': 5 }

/* ═══════════════════════════════════════════════════════════
   SECTION RENDERERS
═══════════════════════════════════════════════════════════ */

/* ── Intro text ── */
function SectionIntro({ section }) {
  return (
    <ScrollReveal>
      <div className="detail-section">
        <div className="ds-header">
          <h2 className="ds-title">{section.title}</h2>
        </div>
        <div className="intro-body">
          <div className="intro-text">
            {section.content.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="intro-keypoints">
            {section.keyPoints.map((kp, i) => (
              <div key={i} className="keypoint">
                <span className="keypoint-icon">{kp.icon}</span>
                <span>{kp.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

/* ── Kill Chain ── */
function SectionKillChain({ section }) {
  const [active, setActive] = useState(null)
  const step = active !== null ? section.steps[active] : null

  return (
    <ScrollReveal>
      <div className="detail-section">
        <div className="ds-header">
          <h2 className="ds-title">{section.title}</h2>
          <p className="ds-sub">{section.subtitle}</p>
        </div>
        <p className="ds-desc">{section.description}</p>

        {/* Flow diagram */}
        <div className="kc-flow">
          {section.steps.map((s, i) => (
            <div key={s.num} className="kc-step-wrap">
              <button
                className={`kc-step ${active === i ? 'kc-step--active' : ''}`}
                style={{ '--kc-color': s.color, '--kc-bg': s.bg }}
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="kc-num">{s.num}</span>
                <span className="kc-icon">{s.icon}</span>
                <span className="kc-label">{s.label}</span>
              </button>
              {i < section.steps.length - 1 && (
                <span className="kc-arrow">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {step && (
          <div className="kc-detail" style={{ borderColor: step.color + '40' }}>
            <div className="kc-detail-header" style={{ color: step.color }}>
              <span className="kc-detail-icon">{step.icon}</span>
              <span className="kc-detail-name">Phase {step.num} — {step.label}</span>
            </div>
            <p className="kc-detail-desc">{step.desc}</p>
            <div className="kc-detail-cols">
              <div>
                <div className="kc-col-title" style={{ color: step.color }}>⚔ Techniques offensives</div>
                <div className="kc-tags">
                  {step.examples.map(e => (
                    <span key={e} className="tool-item" style={{ borderColor: step.color + '40', color: step.color }}>{e}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="kc-col-title" style={{ color: 'var(--accent-blue)' }}>🛡 Contre-mesures défensives</div>
                <p className="kc-defender">{step.defender}</p>
              </div>
            </div>
          </div>
        )}
        {!step && (
          <p className="kc-hint">↑ Cliquez sur une phase pour voir les détails et les contre-mesures</p>
        )}
      </div>
    </ScrollReveal>
  )
}

/* ── MITRE ATT&CK ── */
function SectionMitre({ section }) {
  const [hovered, setHovered] = useState(null)

  return (
    <ScrollReveal>
      <div className="detail-section">
        <div className="ds-header">
          <h2 className="ds-title">{section.title}</h2>
          <p className="ds-sub">{section.subtitle}</p>
        </div>
        <p className="ds-desc">{section.description}</p>

        <div className="mitre-grid">
          {section.tactics.map((tactic, i) => (
            <div
              key={tactic.id}
              className={`mitre-card ${hovered === i ? 'mitre-card--active' : ''}`}
              style={{ '--mc-color': tactic.color }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="mitre-card-top">
                <span className="mitre-icon">{tactic.icon}</span>
                <span className="mitre-id">{tactic.id}</span>
              </div>
              <div className="mitre-name">{tactic.name}</div>
              <div className="mitre-count">
                <span style={{ color: tactic.color }}>{tactic.count}</span> techniques
              </div>
              <div className="mitre-desc">{tactic.desc}</div>
            </div>
          ))}
        </div>

        <div className="mitre-note">
          <span className="prompt">$</span>
          <span>
            La matrice complète recense <strong style={{ color: 'var(--accent)' }}>196+ techniques</strong> et{' '}
            <strong style={{ color: 'var(--accent)' }}>411+ sous-techniques</strong> documentées sur{' '}
            <span style={{ color: 'var(--accent-blue)' }}>attack.mitre.org</span>
          </span>
        </div>
      </div>
    </ScrollReveal>
  )
}

/* ── Code Multi ── */
function CodeBlock({ block }) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(block.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="code-block-wrap">
      <div className="code-block-header">
        <span className="code-label">{block.label}</span>
        <button className="copy-btn" onClick={copy}>
          {copied ? '✓ Copié' : '⧉ Copier'}
        </button>
      </div>
      <pre className="code-block"><code>{block.code}</code></pre>
    </div>
  )
}

function SectionCodeMulti({ section }) {
  return (
    <ScrollReveal>
      <div className="detail-section">
        <div className="ds-header">
          <h2 className="ds-title">{section.title}</h2>
          <p className="ds-sub">{section.subtitle}</p>
        </div>
        <div className="code-blocks-list">
          {section.blocks.map((block, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <CodeBlock block={block} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

/* ── CTF Challenge ── */
function SectionCTF({ section }) {
  const [showFlag, setShowFlag] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const ch = section.challenge

  return (
    <ScrollReveal>
      <div className="detail-section">
        <div className="ds-header">
          <h2 className="ds-title">{section.title}</h2>
          <p className="ds-sub">{section.subtitle}</p>
        </div>

        <div className="ctf-layout">
          {/* Challenge Card */}
          <div className="ctf-card">
            <div className="ctf-card-header">
              <div className="ctf-meta">
                <span className="ctf-platform">{ch.platform}</span>
                <span className="ctf-category">{ch.category}</span>
                <span className="ctf-pts">{ch.points} pts</span>
              </div>
              <h3 className="ctf-name">{ch.name}</h3>
              <span className="ctf-diff">{ch.difficulty}</span>
            </div>
            <div className="ctf-desc">
              {ch.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="ctf-flag-zone">
              <span className="prompt">Flag format :</span>
              <code>picoCTF{'{'} ... {'}'}</code>
            </div>
          </div>

          {/* Steps */}
          <div className="ctf-steps">
            <div className="ctf-tabs">
              {ch.steps.map((s, i) => (
                <button
                  key={i}
                  className={`ctf-tab ${activeStep === i ? 'active' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  Étape {s.step}
                </button>
              ))}
            </div>

            {ch.steps.map((s, i) => activeStep === i && (
              <div key={i} className="ctf-step-content">
                <h4 className="ctf-step-title">
                  <span className="ctf-step-num">0{s.step}</span>
                  {s.title}
                </h4>
                <pre className="code-block"><code>{s.code}</code></pre>
                <div className="ctf-explain">
                  <span className="ctf-explain-icon">💡</span>
                  <p>{s.explain}</p>
                </div>
              </div>
            ))}

            <div className="ctf-flag-reveal">
              <button className="ctf-flag-btn" onClick={() => setShowFlag(!showFlag)}>
                {showFlag ? '🙈 Masquer le flag' : '🏁 Révéler le flag'}
              </button>
              {showFlag && (
                <div className="ctf-flag">
                  <code>{ch.flag}</code>
                </div>
              )}
            </div>

            <div className="ctf-lesson">
              <span className="ctf-lesson-icon">📚</span>
              <p>{ch.lesson}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

/* ── Lab Setup ── */
function SectionLabSetup({ section }) {
  return (
    <ScrollReveal>
      <div className="detail-section">
        <div className="ds-header">
          <h2 className="ds-title">{section.title}</h2>
          <p className="ds-sub">{section.subtitle}</p>
        </div>
        <p className="ds-desc">{section.description}</p>

        {/* Architecture diagram */}
        <div className="lab-diagram-wrap">
          <div className="lab-diagram-header">
            <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
            <span className="t-title">architecture-lab.txt</span>
          </div>
          <pre className="lab-diagram"><code>{section.diagram}</code></pre>
        </div>

        {/* Commands */}
        <div className="code-blocks-list" style={{ marginTop: '2rem' }}>
          {section.commands.map((cmd, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <CodeBlock block={{ label: cmd.label, code: cmd.code }} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

/* ── Section Router ── */
function SectionRenderer({ section }) {
  switch (section.type) {
    case 'intro-text':    return <SectionIntro section={section} />
    case 'kill-chain':    return <SectionKillChain section={section} />
    case 'mitre-attack':  return <SectionMitre section={section} />
    case 'code-multi':    return <SectionCodeMulti section={section} />
    case 'ctf-challenge': return <SectionCTF section={section} />
    case 'lab-setup':     return <SectionLabSetup section={section} />
    default: return null
  }
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */
export default function ModuleDetail() {
  const { id } = useParams()
  const mod = modules.find(m => m.id === Number(id))
  const detail = moduleDetails[Number(id)]
  const prev = modules.find(m => m.id === Number(id) - 1)
  const next = modules.find(m => m.id === Number(id) + 1)

  if (!mod) {
    return (
      <main className="page-fade inner-page" style={{ textAlign: 'center', paddingTop: '10rem' }}>
        <h2 style={{ fontFamily: 'var(--font-title)', color: 'var(--accent-red)' }}>Module introuvable</h2>
        <Link to="/modules" className="btn-primary" style={{ display: 'inline-flex', marginTop: '2rem' }}>
          ← Retour aux modules
        </Link>
      </main>
    )
  }

  const stars = DIFF_STARS[mod.difficulty] || 3

  return (
    <main className="page-fade inner-page">

      {/* ── MODULE HERO ── */}
      <div className="module-detail-hero">
        <div className="hero-grid" />
        <div className="module-detail-hero-inner">

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/modules">Modules</Link>
            <span>›</span>
            <span className="breadcrumb-current">{mod.title}</span>
          </div>

          <div className="module-detail-header">
            <div className="module-detail-number">{mod.number}</div>
            <div className="module-detail-meta">
              <span className={`module-tag ${mod.tag.cls}`}>{mod.tag.label}</span>
              <span className="meta-pill">{mod.week}</span>
              <span className="meta-pill">{mod.duration}</span>
              <span className="meta-pill" style={{ color: DIFF_COLOR[mod.difficulty], borderColor: DIFF_COLOR[mod.difficulty] + '60' }}>
                {'★'.repeat(stars)}{'☆'.repeat(5 - stars)} {mod.difficulty}
              </span>
            </div>
            <h1 className="module-detail-title">{mod.title}</h1>
            <p className="module-detail-desc">{mod.overview}</p>

            <div className="module-detail-quickstats">
              <div className="qs-item">
                <span className="qs-label">Outils</span>
                <div className="tool-items">
                  {mod.tools.slice(0, 4).map(t => <span key={t} className="tool-item">{t}</span>)}
                  {mod.tools.length > 4 && <span className="tool-item" style={{ color: 'var(--text-muted)' }}>+{mod.tools.length - 4}</span>}
                </div>
              </div>
              <div className="qs-item">
                <span className="qs-label">Objectifs</span>
                <span className="qs-value">{mod.objectives.length} compétences acquises</span>
              </div>
              <div className="qs-item">
                <span className="qs-label">Labs</span>
                <span className="qs-value">{mod.labs.length} exercices pratiques</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RICH SECTIONS (if detail exists) ── */}
      {detail ? (
        <div className="module-rich-body">
          {/* Table of contents */}
          <aside className="module-toc">
            <div className="toc-header">
              <span className="prompt">$</span> Contenu
            </div>
            <ul className="toc-list">
              {detail.sections.map((s, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className="toc-link">
                    <span className="toc-num">{String(i + 1).padStart(2, '0')}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="toc-objectives">
              <div className="toc-obj-title">Objectifs</div>
              {mod.objectives.map((obj, i) => (
                <div key={i} className="toc-obj-item">
                  <span className="t-ok">✓</span>
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </aside>

          <div className="module-sections">
            {detail.sections.map((section, i) => (
              <div key={i} id={`section-${i}`}>
                <SectionRenderer section={section} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ── FALLBACK — standard detail ── */
        <section className="module-detail-body">
          <div className="module-detail-grid">
            <div className="module-detail-left">
              <ScrollReveal>
                <div className="detail-card">
                  <h3><span className="prompt">$</span> Contenu du module</h3>
                  <ul className="detail-list">
                    {mod.items.map(item => <li key={item}><span className="t-ok">›</span> {item}</li>)}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="detail-card">
                  <h3><span className="prompt">$</span> Objectifs pédagogiques</h3>
                  <ul className="detail-list">
                    {mod.objectives.map(obj => <li key={obj}><span className="t-ok">✓</span> {obj}</li>)}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <div className="detail-card">
                  <h3><span className="prompt">$</span> Labs &amp; Exercices</h3>
                  <ul className="detail-list detail-list--labs">
                    {mod.labs.map((lab, i) => (
                      <li key={lab}>
                        <span className="lab-num">{String(i + 1).padStart(2, '0')}</span>
                        <span>{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
            <div className="module-detail-right">
              <ScrollReveal>
                <div className="detail-card">
                  <h3><span className="prompt">$</span> Outils</h3>
                  <div className="tool-items" style={{ marginTop: '0.8rem' }}>
                    {mod.tools.map(t => <span key={t} className="tool-item">{t}</span>)}
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <div className="detail-card detail-card--cta">
                  <h3>Prêt à commencer ?</h3>
                  <p>Ce module sera disponible dès le premier jour de formation.</p>
                  <Link to="/enroll" className="btn-primary" style={{ display: 'inline-flex', marginTop: '1rem' }}>
                    ◆ Candidater
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ── PREV / NEXT ── */}
      <div className="module-nav-bar">
        {prev ? (
          <Link to={`/modules/${prev.id}`} className="module-nav-btn module-nav-btn--prev">
            <span className="nav-arrow">←</span>
            <div>
              <span className="nav-label">Module précédent</span>
              <span className="nav-mod-title">{prev.number} — {prev.title}</span>
            </div>
          </Link>
        ) : <div />}

        <Link to="/modules" className="btn-secondary module-nav-all">☰ Tous les modules</Link>

        {next ? (
          <Link to={`/modules/${next.id}`} className="module-nav-btn module-nav-btn--next">
            <div>
              <span className="nav-label">Module suivant</span>
              <span className="nav-mod-title">{next.number} — {next.title}</span>
            </div>
            <span className="nav-arrow">→</span>
          </Link>
        ) : <div />}
      </div>
    </main>
  )
}
