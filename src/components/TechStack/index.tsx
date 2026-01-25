import styles from './TechStack.module.css';
import { type JSX } from 'react';

const technologies = [
  // Programming & Frameworks
  { name: 'TypeScript', icon: 'javascript', color: 'primary' },
  { name: 'React', icon: 'javascript', color: 'cyan' },
  { name: 'Next.js', icon: 'code', color: 'primary' },
  { name: 'Angular', icon: 'code', color: 'orange' },
  { name: 'Node.js', icon: 'terminal', color: 'green' },
  { name: 'NestJS', icon: 'deployed_code', color: 'orange' },
  { name: 'Express', icon: 'terminal', color: 'green' },
  { name: 'Kotlin', icon: 'code', color: 'purple' },
  { name: 'Spring Boot', icon: 'eco', color: 'green' },
  { name: 'GraphQL', icon: 'hub', color: 'pink' },
  // Cloud & Architecture
  { name: 'AWS', icon: 'cloud', color: 'orange' },
  { name: 'GCP', icon: 'cloud', color: 'primary' },
  { name: 'Kafka', icon: 'swap_horiz', color: 'primary' },
  { name: 'Redis', icon: 'memory', color: 'orange' },
  { name: 'DynamoDB', icon: 'database', color: 'orange' },
  // DevOps & CI/CD
  { name: 'Terraform', icon: 'construction', color: 'purple' },
  { name: 'CircleCI', icon: 'sync', color: 'green' },
  // Observability
  { name: 'Datadog', icon: 'monitoring', color: 'purple' },
  { name: 'Databricks', icon: 'analytics', color: 'orange' },
  // Databases
  { name: 'PostgreSQL', icon: 'database', color: 'primary' },
  { name: 'MySQL', icon: 'database', color: 'cyan' },
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
