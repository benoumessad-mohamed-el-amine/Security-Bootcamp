import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { to: '/', label: 'Home', exact: true },
  { to: '/modules', label: 'Modules' },
  { to: '/tools', label: 'Arsenal' },
  { to: '/certifications', label: 'Certifications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // scroll to top on route change
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <NavLink to="/" className="nav-brand">
        <span className="nav-icon">☢</span>
        <span className="nav-title">CYBER<span className="accent">SEC</span> BOOTCAMP</span>
      </NavLink>

      <ul className="nav-links">
        {links.map(({ to, label, exact }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={exact}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <NavLink to="/enroll" className="nav-cta">S'inscrire</NavLink>
        <div className="nav-status">
          <span className="status-dot" />
          <span className="status-text">SECURE</span>
        </div>
      </div>
    </nav>
  )
}
