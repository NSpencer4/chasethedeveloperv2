import styles from './AdditionalExperience.module.css';
import { type JSX } from 'react';
import { additionalExperience } from '../../data/experience';

export const AdditionalExperience = (): JSX.Element => {
  return (
    <section data-testid="additional-experience-section" className={styles.section}>
      <h3 className={styles.sectionHeader}>{'// 03. Additional Experience'}</h3>
      <div className={styles.grid}>
        {additionalExperience.map((role, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.company}>{role.company}</span>
              <span className={styles.separator}> · </span>
              <span className={styles.title}>{role.title}</span>
            </div>
            <div className={styles.period}>{role.period}</div>
            <p className={styles.description}>{role.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
