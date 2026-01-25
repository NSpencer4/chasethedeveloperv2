import styles from './Experience.module.css';
import cn from 'classnames';
import { type JSX } from 'react';

interface Job {
  company: string;
  position: string;
  period: string;
  isCurrent: boolean;
  bullets: string[];
  tech: { name: string; color: string }[];
}

const jobs: Job[] = [
  {
    company: 'StockX',
    position: 'Senior Software Engineer',
    period: 'Nov 2021 - Present',
    isCurrent: true,
    bullets: [
      'Maintained and enhanced marketplace services processing 100k+ daily bid/ask placements, improving throughput and reliability.',
      'Supported order and state machine services handling 30k+ daily orders, reducing processing errors.',
      'Led a team of engineers to design and implement integrations expanding order system capabilities.',
      'Designed Express.js microservices following CQRS patterns to improve scalability and performance.',
      'Orchestrated migration of microservices into an Nx monorepo, increasing code reuse and developer collaboration.',
      'Developed internal testing tools with Next.js and React to simulate complex ordering scenarios and saga patterns.',
      'Established CI/CD pipelines with CircleCI and Terraform, ensuring reliable delivery.',
      'Implemented Databricks dashboards and Monte Carlo alerts, reducing customer support volume by quickly detecting data anomalies.',
    ],
    tech: [
      { name: 'TypeScript', color: 'primary' },
      { name: 'Express', color: 'green' },
      { name: 'Next.js', color: 'primary' },
      { name: 'React', color: 'cyan' },
      { name: 'AWS', color: 'orange' },
      { name: 'Kafka', color: 'purple' },
      { name: 'DynamoDB', color: 'orange' },
      { name: 'CircleCI', color: 'green' },
      { name: 'Terraform', color: 'purple' },
      { name: 'Databricks', color: 'orange' },
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    position: 'Senior Software Engineer, eBusiness',
    period: 'June 2021 - Oct 2021',
    isCurrent: false,
    bullets: [
      'Developed NestJS microservices, delivering scalable backend systems.',
      'Established an enterprise SDK monorepo using Lerna to manage shared modules across services.',
      'Supported MyLawn App microservices, improving performance and maintainability.',
    ],
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
    bullets: [
      'Led frontend team in building a component-based React/Storybook SDK.',
      'Engineered an event-driven architecture for Super Bowl LV sweepstakes, processing 400k+ submissions using GCP Cloud Functions, Pub/Sub, and BigQuery.',
      'Developed enterprise websites using React and headless APIs aligned with organizational standards.',
      'Integrated Contentful + GraphQL, streamlining content workflows.',
      'Enhanced GitLab CI/CD pipelines, improving build reliability.',
    ],
    tech: [
      { name: 'React', color: 'cyan' },
      { name: 'Storybook', color: 'orange' },
      { name: 'GCP', color: 'primary' },
      { name: 'BigQuery', color: 'primary' },
      { name: 'GraphQL', color: 'purple' },
      { name: 'Contentful', color: 'cyan' },
      { name: 'GitLab CI', color: 'orange' },
    ],
  },
  {
    company: 'Cardinal Health',
    position: 'Software Engineer, eCommerce Product & Experience – Medical',
    period: 'Sept 2018 - Nov 2020',
    isCurrent: false,
    bullets: [
      'Supported market.cardinalhealth.com, a B2B SPA generating $1B+ in annual revenue.',
      'Delivered full-stack development using Angular, Spring Boot, and AEM headless CMS.',
      'Led upgrade of Market application from Angular 2 → Angular 7, improving performance by 80%.',
      'Designed micro-frontend architecture supporting parallel team development.',
      'Integrated Paymetric for secure credit card processing and led analytics initiatives using Adobe Analytics/Target.',
    ],
    tech: [
      { name: 'Angular', color: 'orange' },
      { name: 'Spring Boot', color: 'green' },
      { name: 'AEM', color: 'purple' },
      { name: 'Adobe Analytics', color: 'orange' },
      { name: 'Micro-frontends', color: 'cyan' },
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    position: 'Software Engineer, eCommerce Development',
    period: 'Oct 2017 - Sept 2018',
    isCurrent: false,
    bullets: [
      'Supported 13 Drupal 8 branded sites and 10 Magento DTC stores, driving multi-million-dollar sales.',
      'Implemented monitoring/alerting using New Relic and Sumo Logic and CI pipelines with Travis CI.',
      'Contributed to scalable Magento 2 architecture and secure payment integrations (Vantiv).',
    ],
    tech: [
      { name: 'Drupal', color: 'primary' },
      { name: 'Magento', color: 'orange' },
      { name: 'New Relic', color: 'green' },
      { name: 'Sumo Logic', color: 'purple' },
      { name: 'Travis CI', color: 'green' },
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    position: 'eBusiness Intern',
    period: 'May 2015 - Sept 2017',
    isCurrent: false,
    bullets: [
      'Built internal web applications and REST APIs (Google App Engine/Python).',
      'Implemented features using AngularJS/Angular 4 and supported Drupal 8 websites.',
    ],
    tech: [
      { name: 'AngularJS', color: 'orange' },
      { name: 'Angular', color: 'orange' },
      { name: 'Python', color: 'cyan' },
      { name: 'GAE', color: 'primary' },
      { name: 'Drupal', color: 'primary' },
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
