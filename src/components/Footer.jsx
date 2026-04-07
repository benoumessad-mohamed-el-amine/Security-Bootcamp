import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="nav-icon">☢</span>
          <span className="nav-title">CYBER<span className="accent">SEC</span> BOOTCAMP</span>
          <p>Formation cybersécurité de haut niveau.<br />Du pentest à la gouvernance.</p>
        </div>
        <div className="footer-links">
          <h4>Programme</h4>
          <Link to="/modules">Modules</Link>
          <Link to="/tools">Arsenal</Link>
          <Link to="/certifications">Certifications</Link>
        </div>
        <div className="footer-links">
          <h4>Légal</h4>
          <a href="#">Mentions légales</a>
          <a href="#">Éthique &amp; usage responsable</a>
          <a href="#">Confidentialité</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="prompt">root@cybersec:~$</span>
        <span className="footer-cmd">echo "Tous droits réservés — CyberSec Bootcamp 2025"</span>
        <span className="t-ok">✓</span>
      </div>
    </footer>
  )
}
