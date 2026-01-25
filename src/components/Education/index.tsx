import styles from './Education.module.css';
import { type JSX } from 'react';

export const Education = (): JSX.Element => {
  return (
    <section data-testid="education-section" className={styles.section}>
      <h3 className={styles.sectionHeader}>{'// 03. Education'}</h3>
      <div className={styles.timelineWrapper}>
        <div className={styles.timelineItem}>
          <div className={styles.commitDot}></div>
          <div className={styles.periodTag}>
            <span className={styles.periodLabel}>graduated:</span>
            <span className={styles.periodValue}>2018</span>
          </div>
          <div className={styles.card}>
            <div className={styles.logoWrapper}>
              <img
                src="/Wright_State_University_logo.png"
                alt="Wright State University"
                className={styles.logo}
              />
            </div>
            <h4 className={styles.institution}>Wright State University</h4>
            <p className={styles.degree}>Bachelor of Science, Computer Science</p>
            <p className={styles.location}>Dayton, Ohio</p>
          </div>
        </div>
      </div>
    </section>
  );
};
