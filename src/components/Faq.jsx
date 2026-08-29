import { faqs } from '../data/faq'
import { ArrowDownIcon } from './icons'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-heading" style={{ fontSize: 'var(--fs-display-md)' }}>
            Questions clients actually ask
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.summary}>
                <span>{item.question}</span>
                <ArrowDownIcon className={styles.chevron} />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
