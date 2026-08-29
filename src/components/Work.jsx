import { projects } from '../data/projects'
import { ArrowUpRightIcon, InfoIcon, PinDoodle } from './icons'
import flowpilotShot from '../assets/screenshots/flowpilot.png'
import clinicosShot from '../assets/screenshots/clinicos.png'
import serviceflowShot from '../assets/screenshots/serviceflow.png'
import aiChatbotShot from '../assets/screenshots/ai-chatbot.png'
import quoteRateShot from '../assets/screenshots/quote-rate.png'
import crmDashboardShot from '../assets/screenshots/crm-dashboard.png'
import styles from './Work.module.css'

const rotations = ['rotate0', 'rotate1', 'rotate2']

const screenshots = {
  flowpilot: flowpilotShot,
  clinicos: clinicosShot,
  serviceflow: serviceflowShot,
  'ai-chatbot': aiChatbotShot,
  'quote-rate': quoteRateShot,
  'crm-dashboard': crmDashboardShot,
}

export function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h2 style={{ fontSize: 'var(--fs-display-md)', marginBottom: 'var(--space-4)' }}>Projects that actually run</h2>
          <p style={{ fontSize: 'var(--fs-body-lg)', maxWidth: '38rem' }}>
            Six real, built projects — source available on GitHub, several deployed and live. Screenshots below are captured
            directly from the running apps, not mockups.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <article key={project.id} className={styles.card}>
              <div className={`${styles.polaroid} ${styles[rotations[i % rotations.length]]}`}>
                <PinDoodle className={styles.pin} />
                <div className={styles.photoFrame}>
                  <img
                    src={screenshots[project.screenshot]}
                    alt={`${project.name} screenshot`}
                    className={styles.photo}
                    loading="lazy"
                    width="1600"
                    height="1000"
                  />
                </div>
                <p className={styles.polaroidCaption}>{project.name}</p>
              </div>

              <div className={styles.content}>
                <span className={`tag-pill tag-pill--${project.accent} ${styles.accentTag}`}>{project.tagline}</span>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>

                {project.disclosure && (
                  <div className={styles.disclosure}>
                    <InfoIcon className={styles.disclosureIcon} />
                    <p>{project.disclosure}</p>
                  </div>
                )}

                <dl className={styles.metaGrid}>
                  <div>
                    <dt>Role</dt>
                    <dd>{project.role}</dd>
                  </div>
                  <div>
                    <dt>Problem</dt>
                    <dd>{project.problem}</dd>
                  </div>
                  <div>
                    <dt>Result</dt>
                    <dd>{project.result}</dd>
                  </div>
                </dl>

                <ul className={styles.stackList}>
                  {project.stack.map((tech) => (
                    <li key={tech} className={styles.stackTag}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className={styles.linkRow}>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer noopener" className={`btn btn-primary ${styles.linkBtn}`}>
                      Live project
                      <ArrowUpRightIcon className={styles.linkIcon} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`btn btn-secondary ${styles.linkBtn}`}
                  >
                    GitHub
                    <ArrowUpRightIcon className={styles.linkIcon} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
