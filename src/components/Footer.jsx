import { site } from '../data/site'
import { MailIcon, GithubIcon, LinkedinIcon } from './icons'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div>
            <p className={styles.wordmark}>{site.brand}</p>
            <p className={styles.tagline}>{site.title} — {site.location}</p>
          </div>

          <nav aria-label="Footer">
            <ul className={styles.navList}>
              {site.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className={styles.socialList}>
            <li>
              <a href={`mailto:${site.email}`} className={styles.socialLink} aria-label={`Email ${site.name}`}>
                <MailIcon className={styles.socialIcon} />
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.socialLink}
                aria-label={`${site.name} on GitHub`}
              >
                <GithubIcon className={styles.socialIcon} />
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.socialLink}
                aria-label={`${site.name} on LinkedIn`}
              >
                <LinkedinIcon className={styles.socialIcon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
