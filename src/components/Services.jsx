import { services } from '../data/services'
import { AppWindowIcon, WorkflowIcon, SparkleIcon, GlobeIcon } from './icons'
import styles from './Services.module.css'

const iconById = {
  'web-apps': AppWindowIcon,
  'business-systems': WorkflowIcon,
  'ai-integrations': SparkleIcon,
  websites: GlobeIcon,
}

const accentById = {
  'web-apps': 'sky',
  'business-systems': 'lime',
  'ai-integrations': 'coral',
  websites: 'sun',
}

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2 style={{ fontSize: 'var(--fs-display-md)', marginBottom: 'var(--space-4)' }}>Where I can help</h2>
          <p style={{ fontSize: 'var(--fs-body-lg)', maxWidth: '38rem' }}>
            Four things I actually build — scoped to what you need, quoted before any work starts.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => {
            const Icon = iconById[service.id]
            const accent = accentById[service.id]
            return (
              <article key={service.id} className={styles.card}>
                <div className={`${styles.iconWrap} ${styles[`icon-${accent}`]}`}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.name}>{service.name}</h3>
                <p className={styles.description}>{service.description}</p>

                <dl className={styles.metaList}>
                  <div>
                    <dt>Who it's for</dt>
                    <dd>{service.audience}</dd>
                  </div>
                  <div>
                    <dt>What you get</dt>
                    <dd>{service.outcome}</dd>
                  </div>
                </dl>

                <ul className={styles.tagList}>
                  {service.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
