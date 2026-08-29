import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'
import { useActiveSection } from '../hooks/useActiveSection'
import { MenuIcon, CloseIcon } from './icons'
import styles from './Navigation.module.css'

export function Navigation() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(site.nav.map((link) => link.href.replace('#', '')))

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={`${styles.inner} container`}>
        <a href="#top" className={styles.wordmark}>
          {site.brand}
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.linkList}>
            {site.nav.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink} aria-current={isActive ? 'true' : undefined}>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="#contact" className={`btn btn-primary ${styles.ctaDesktop}`}>
            Get a Quote
          </a>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open navigation'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon className={styles.menuIcon} /> : <MenuIcon className={styles.menuIcon} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
        inert={!menuOpen}
      >
        <ul className={styles.mobileLinkList}>
          {site.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          Get a Quote
        </a>
      </div>
    </header>
  )
}
