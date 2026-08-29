import { processSteps } from '../data/process'
import styles from './Process.module.css'

export function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">How I Work</p>
          <h2 style={{ fontSize: 'var(--fs-display-md)', marginBottom: 'var(--space-4)' }}>What happens after you reach out</h2>
          <p style={{ fontSize: 'var(--fs-body-lg)', maxWidth: '36rem' }}>
            No black-box handoff — here's what each stage actually looks like.
          </p>
        </div>

        <ol className={styles.timeline}>
          {processSteps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
