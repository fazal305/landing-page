import { projects } from '../data/projects'
import { experience } from '../data/experience'
import { site } from '../data/site'
import { getUniqueStack } from '../utils/getUniqueStack'
import { ArrowUpRightIcon } from './icons'
import styles from './Credibility.module.css'

const stats = [
  { value: String(projects.length), label: 'Real projects, built and deployed end-to-end' },
  { value: String(experience.length), label: 'Verified internships, credentials on file' },
  { value: String(getUniqueStack().length) + '+', label: 'Technologies used across shipped work' },
]

export function Credibility() {
  const stack = getUniqueStack()

  return (
    <section className={`section ${styles.credibility}`} aria-label="Credibility">
      <div className="container">
        <div className={styles.statRow}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className={styles.stackRow}>
          <p className={styles.stackLabel}>Technologies I actually work in</p>
          <ul className={styles.stackList}>
            {stack.map((tech) => (
              <li key={tech} className={styles.stackPill}>
                {tech}
              </li>
            ))}
          </ul>
          <a href={site.github} target="_blank" rel="noreferrer noopener" className={styles.githubLink}>
            See every repository on GitHub
            <ArrowUpRightIcon className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </section>
  )
}
