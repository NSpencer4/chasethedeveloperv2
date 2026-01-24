import styles from './Experience.module.css';
import cn from 'classnames';

interface Job {
  company: string;
  position: string;
  period: string;
  isCurrent: boolean;
  description: string;
  tech: { name: string; color: string }[];
}

const jobs: Job[] = [
  {
    company: 'StockX',
    position: 'Senior Software Engineer',
    period: 'Nov 2021 - Present',
    isCurrent: true,
    description: 'Supporting marketplace services enabling 100,000+ daily bid/ask placements and order systems processing 30,000+ daily orders. Building TypeScript AWS Lambdas, Kafka, and DynamoDB solutions. Led migration to Nx monorepo and established CI pipelines using CircleCI and Terraform.',
    tech: [
      { name: 'TypeScript', color: 'primary' },
      { name: 'AWS', color: 'orange' },
      { name: 'Kafka', color: 'purple' },
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    position: 'Senior Software Engineer',
    period: 'June 2021 - Oct 2021',
    isCurrent: false,
    description: 'Implemented eCommerce microservices using NestJS. Established an enterprise SDK monorepo using Lerna for shared modules. Contributed to microservice initiatives supporting the MyLawn App.',
    tech: [
      { name: 'NestJS', color: 'cyan' },
      { name: 'TypeScript', color: 'primary' },
      { name: 'Lerna', color: 'purple' },
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    position: 'Tech Lead, Frontend Applications',
    period: 'Nov 2020 - June 2021',
    isCurrent: false,
    description: 'Engineered event-based architecture for Super Bowl LV sweepstakes processing 400,000+ submissions using GCP Cloud Functions and Pub/Sub. Led frontend team building enterprise component SDK using React and Storybook.',
    tech: [
      { name: 'React', color: 'cyan' },
      { name: 'GCP', color: 'primary' },
      { name: 'Storybook', color: 'orange' },
    ],
  },
  {
    company: 'Cardinal Health',
    position: 'Software Engineer',
    period: 'Sept 2018 - Nov 2020',
    isCurrent: false,
    description: 'Supported market.cardinalhealth.com, a B2B medical eCommerce SPA generating $1B+ in annual revenue. Improved application performance by 80% and led Angular upgrade from v2 to v7. Designed micro-frontend architecture using Web Components.',
    tech: [
      { name: 'Angular', color: 'orange' },
      { name: 'Spring Boot', color: 'green' },
      { name: 'AEM', color: 'purple' },
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    position: 'Software Engineer',
    period: 'Oct 2017 - Sept 2018',
    isCurrent: false,
    description: 'Supported 13 Drupal 8 branded sites (Scotts.com, MiracleGro.com, Roundup.com, Ortho.com) and 10 Magento-based DTC stores driving multi-million-dollar annual sales. Established Travis CI pipelines and implemented monitoring with New Relic.',
    tech: [
      { name: 'Drupal', color: 'primary' },
      { name: 'Magento', color: 'orange' },
      { name: 'New Relic', color: 'green' },
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    position: 'eBusiness Intern',
    period: 'May 2015 - Sept 2017',
    isCurrent: false,
    description: 'Built internal web applications to improve business workflows. Developed REST APIs on Google App Engine (Python) and implemented features using AngularJS and Angular 4.',
    tech: [
      { name: 'AngularJS', color: 'orange' },
      { name: 'Python', color: 'cyan' },
      { name: 'GAE', color: 'primary' },
    ],
  },
];

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
              <p className={styles.description}>{job.description}</p>
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
