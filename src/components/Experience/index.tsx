import styles from './Experience.module.css';
import cn from 'classnames';
import { type JSX } from 'react';
import { jobs } from '../../data/experience';

export const Experience = (): JSX.Element => {
  return (
    <section data-testid="experience-section" className={styles.section}>
      <h3 className={styles.sectionHeader}>{'// 02. Work History'}</h3>
      <div className={styles.timeline}>
        {jobs.map((job, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={cn(styles.commitDot, { [styles.commitDotCurrent]: job.isCurrent })}></div>
            <div className={styles.periodTag}>
              <span className={styles.periodLabel}>period:</span>
              <span className={styles.periodValue}>{job.period}</span>
              {job.isCurrent && <span className={styles.headTag}>(HEAD → main)</span>}
            </div>
            <div className={styles.card}>
              <h4 className={styles.company}>{job.company}</h4>
              <p className={styles.position}>{job.position}</p>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
              <div className={styles.techTags}>
                {job.tech.map((t) => (
                  <span key={t.name} className={cn(styles.techTag, styles[t.color])}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
