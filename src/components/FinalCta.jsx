import { finalCta } from '../data/site'
import { ArrowUpRightIcon, ArrowDownIcon, LoopDoodle } from './icons'
import styles from './FinalCta.module.css'

export function FinalCta() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.panel}>
          <LoopDoodle className={styles.doodle} />
          <p className={`eyebrow ${styles.eyebrow}`}>{finalCta.eyebrow}</p>
          <h2 className={styles.headline}>{finalCta.headline}</h2>
          <div className={styles.ctaRow}>
            <a href={finalCta.primaryCta.href} className={`btn btn-primary ${styles.btn}`}>
              {finalCta.primaryCta.label}
              <ArrowUpRightIcon className={styles.icon} />
            </a>
            <a href={finalCta.secondaryCta.href} className={`btn btn-secondary ${styles.btn}`}>
              {finalCta.secondaryCta.label}
              <ArrowDownIcon className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
