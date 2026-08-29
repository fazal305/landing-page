import { heroCopy, heroSkillTags, site } from '../data/site'
import profilePhoto from '../assets/profile-photo.jpg'
import { ArrowUpRightIcon, ArrowDownIcon, MailIcon, GithubIcon, LinkedinIcon, LoopDoodle, SquiggleDoodle } from './icons'
import styles from './Hero.module.css'

const tagClassByIndex = ['tag0', 'tag1', 'tag2']

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.backdrop} aria-hidden="true">
            <div className={styles.hill} />
            <div className={styles.hillFar} />
          </div>

          <LoopDoodle className={`${styles.doodle} ${styles.doodleLime}`} />
          <SquiggleDoodle className={`${styles.doodle} ${styles.doodleSun}`} />

          <div className={styles.availabilityCard}>
            <span className={styles.avatarWrap}>
              <img src={profilePhoto} alt="" className={styles.avatar} width="40" height="40" />
              <span className={styles.statusDot} aria-hidden="true" />
            </span>
            <div>
              <p className={styles.availabilityLabel}>Available for work</p>
              <p className={styles.availabilityName}>
                {site.name} — {site.title}
              </p>
            </div>
          </div>

          <ul className={styles.skillTags} aria-hidden="true">
            {heroSkillTags.map((tag, i) => (
              <li key={tag.label} className={`tag-pill tag-pill--${tag.variant} ${styles.floatTag} ${styles[tagClassByIndex[i]]}`}>
                {tag.label}
              </li>
            ))}
          </ul>

          <div className={styles.content}>
            <h1 className={styles.headline}>{heroCopy.headline}</h1>
            <p className={styles.subhead}>{heroCopy.subhead}</p>
            <div className={styles.ctaRow}>
              <a href={heroCopy.primaryCta.href} className={`btn btn-primary ${styles.ctaBtn}`}>
                {heroCopy.primaryCta.label}
                <ArrowUpRightIcon className={styles.ctaIcon} />
              </a>
              <a href={heroCopy.secondaryCta.href} className={`btn btn-secondary ${styles.ctaBtn}`}>
                {heroCopy.secondaryCta.label}
                <ArrowDownIcon className={styles.ctaIcon} />
              </a>
            </div>
          </div>

          <ul className={styles.dock} aria-label="Direct contact">
            <li>
              <a href={`mailto:${site.email}`} className={styles.dockLink} aria-label={`Email ${site.name}`}>
                <MailIcon className={styles.dockIcon} />
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.dockLink}
                aria-label={`${site.name} on GitHub`}
              >
                <GithubIcon className={styles.dockIcon} />
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.dockLink}
                aria-label={`${site.name} on LinkedIn`}
              >
                <LinkedinIcon className={styles.dockIcon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
