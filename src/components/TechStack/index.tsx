import styles from './TechStack.module.css';

const technologies = [
  { name: 'React', icon: 'javascript', color: 'cyan' },
  { name: 'Angular', icon: 'code', color: 'orange' },
  { name: 'Node.js', icon: 'terminal', color: 'green' },
  { name: 'Python', icon: 'code', color: 'cyan' },
  { name: 'Java', icon: 'coffee', color: 'orange' },
  { name: 'TypeScript', icon: 'javascript', color: 'primary' },
  { name: 'AWS', icon: 'cloud', color: 'purple' },
  { name: 'GCP', icon: 'cloud', color: 'primary' },
  { name: 'PostgreSQL', icon: 'database', color: 'orange' },
  { name: 'Git', icon: 'merge_type', color: 'green' },
  { name: 'Docker', icon: 'deployed_code', color: 'primary' },
  { name: 'PHP', icon: 'code', color: 'purple' },
];

export const TechStack = (): JSX.Element => {
  return (
    <section data-testid="techstack-section" className={styles.section}>
      <h3 className={styles.sectionHeader}>{'// 01. Tech Stack'}</h3>
      <div className={styles.card}>
        <div className={styles.techGrid}>
          {technologies.map((tech) => (
            <div key={tech.name} className={styles.techPill}>
              <span className={`material-symbols-outlined ${styles.techIcon} ${styles[tech.color]}`}>
                {tech.icon}
              </span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
