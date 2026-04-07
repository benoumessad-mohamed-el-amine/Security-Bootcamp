import { toolCategories } from '../data/tools'
import ScrollReveal from '../components/ScrollReveal'

export default function Tools() {
  return (
    <main className="page-fade inner-page">
      <div className="page-hero">
        <div className="hero-grid" />
        <div className="page-hero-content">
          <span className="section-tag">&lt;arsenal&gt;</span>
          <h1>Stack d'Outils</h1>
          <p>Les outils utilisés par les professionnels du secteur — tous couverts pendant la formation.</p>
        </div>
      </div>

      <section className="tools-section" style={{ background: 'var(--bg-primary)' }}>
        <div className="tools-grid">
          {toolCategories.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={(i % 4) * 70}>
              <div className="tool-category">
                <div className="tool-cat-header">
                  <span className="tool-cat-icon">{cat.icon}</span>
                  <span>{cat.label}</span>
                </div>
                <div className="tool-items">
                  {cat.items.map(item => (
                    <span key={item} className="tool-item">{item}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="tools-note">
            <span className="prompt">$</span>
            <span className="footer-cmd">
              # Tous ces outils sont utilisés dans des environnements de lab légaux et contrôlés
            </span>
            <span className="t-ok">✓</span>
          </div>
        </ScrollReveal>
      </section>
    </main>
  )
}
