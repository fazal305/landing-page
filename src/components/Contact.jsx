import { site } from '../data/site'
import { MailIcon, GithubIcon, LinkedinIcon, ArrowUpRightIcon } from './icons'
import styles from './Contact.module.css'

const iconByType = {
  email: MailIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2 style={{ fontSize: 'var(--fs-display-md)', marginBottom: 'var(--space-4)' }}>Get in touch directly</h2>
          <p style={{ fontSize: 'var(--fs-body-lg)', maxWidth: '36rem' }}>
            No contact form — just real, direct ways to reach me. Email is the fastest way to start a quote.
          </p>
        </div>

        <ul className={styles.grid}>
          {site.contactLinks.map((link) => {
            const Icon = iconByType[link.icon]
            const external = link.icon !== 'email'
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.card}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer noopener' : undefined}
                >
                  <span className={styles.iconWrap}>
                    <Icon className={styles.icon} />
                  </span>
                  <span className={styles.label}>{link.label}</span>
                  <ArrowUpRightIcon className={styles.arrow} />
                </a>
              </li>
            )
          })}
        </ul>

        <p className={styles.locationNote}>
          {site.location} · {site.availability}
        </p>
      </div>
    </section>
  )
}
