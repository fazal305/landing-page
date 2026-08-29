import profilePhoto from '../assets/profile-photo.jpg'
import { site } from '../data/site'
import { experience, education } from '../data/experience'
import { SquiggleDoodle } from './icons'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2 style={{ fontSize: 'var(--fs-display-md)' }}>The developer behind this</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.photoCol}>
            <div className={styles.photoFrame}>
              <img
                src={profilePhoto}
                alt={`${site.name}, ${site.title}`}
                className={styles.photo}
                width="320"
                height="320"
                loading="lazy"
              />
              <SquiggleDoodle className={styles.doodle} />
            </div>
            <p className={styles.photoCaption}>
              {site.name} — {site.location}
            </p>
          </div>

          <div className={styles.bioCol}>
            <p className={styles.bioLead}>
              I'm Fazal Abbas, a frontend-focused full-stack developer based in Karachi, Pakistan, currently studying
              software engineering while building and shipping real projects alongside coursework.
            </p>
            <p>
              My work centers on turning real business processes into usable software — patient records, service
              dispatch, quoting, workflow automation — rather than just decorative screens. I like working close to
              the actual data model and system behind an interface, not just the UI layer on top of it.
            </p>
            <p>
              I'd rather scope a project honestly and deliver something real than overpromise and hand over a
              mockup. Every project ships as working, deployed software — not a Figma file.
            </p>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Experience</h3>
              <ul className={styles.experienceList}>
                {experience.map((item) => (
                  <li key={item.org} className={styles.experienceItem}>
                    <div className={styles.experienceHead}>
                      <p className={styles.experienceOrg}>{item.org}</p>
                      <span className={styles.statusBadge}>{item.status}</span>
                    </div>
                    <p className={styles.experienceRole}>
                      {item.role} · {item.period}
                    </p>
                    <p className={styles.experienceSummary}>{item.summary}</p>
                    {item.credentials && (
                      <div className={styles.credentialRow}>
                        {item.credentials.map((c) => (
                          <a key={c.label} href={c.href} target="_blank" rel="noreferrer noopener" className={styles.credentialLink}>
                            {c.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>Education</h3>
              <ul className={styles.educationList}>
                {education.map((item) => (
                  <li key={item.org} className={styles.educationItem}>
                    <span className={styles.educationOrg}>{item.org}</span>
                    <span className={styles.educationProgram}>
                      {item.program}
                      {item.note ? ` — ${item.note}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
