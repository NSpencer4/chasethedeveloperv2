export interface Job {
  company: string;
  position: string;
  period: string;
  isCurrent: boolean;
  bullets: string[];
  tech: { name: string; color: string }[];
}

export const jobs: Job[] = [
  {
    company: 'StockX',
    position: 'Senior Software Engineer',
    period: 'Nov 2021 - Present',
    isCurrent: true,
    bullets: [
      'Supported Marketplace services (100k+ daily bid/ask placements) and Order services (30k+ daily orders).',
      'Built event-driven systems using TypeScript Lambdas, Kafka, SQS, and DynamoDB to streamline processing and enhance efficiency.',
      'Led cross-functional teams to design and implement integration solutions that expanded order system capabilities.',
      'Architected state machine systems using CQRS, Sagas, and Event Sourcing patterns for scalability and performance.',
      'Accelerated integration times by providing GraphQL development support to cross-functional teams.',
      'Orchestrated microservices migration into an NX mono-repo, improving code management and collaboration.',
      'Established CI/CD pipelines using CircleCI and Terraform for continuous delivery.',
      'Developed an internal testing tool (Next.js + React) enabling rapid simulation of ordering scenarios and saga patterns.',
      'Resolved critical on-call incidents, delivering solutions that saved the company millions in potential revenue loss.',
      'Implemented Databricks dashboards and Monte Carlo alerts to identify data anomalies, reducing customer support contacts.',
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
      'Implemented eCommerce microservices using NestJS framework, delivering robust and scalable solutions.',
      'Established a enterprise SDK monorepo with Lerna for efficient management of shared modules across microservices.',
      'Enhanced MyLawn App microservices, improving functionality and performance.',
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
      'Engineered event-driven architecture for Super Bowl LV sweepstakes (keepgrowingtoday.com), processing 400k+ submissions using GCP Cloud Functions, Pub/Sub, and BigQuery.',
      'Led a development team in building a enterprise component SDK using React and Storybook with component-based architecture.',
      'Collaborated with UI/UX teams to establish themeable component-based design system for branded sites.',
      'Oversaw the development of enterprise websites (NextJS + React)',
      'Implemented Contentful CMS with GraphQL integration, optimizing content management workflows.',
      'Enhanced GitLab CI/CD pipelines to improve code quality and build reliability.',
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

// Additional roles for resume
export interface AdditionalRole {
  company: string;
  title: string;
  period: string;
  description: string;
}

export const additionalExperience: AdditionalRole[] = [
  {
    company: 'OmniSpear Web & Network Solutions',
    title: 'Web Development Intern',
    period: '2016–2017',
    description:
      'Developed features with Laravel, AngularJS, and WordPress/Drupal support.',
  },
  {
    company: 'Wright State University',
    title: 'Full-Stack Developer & Content Manager',
    period: '2016–2017',
    description:
      'Maintained Django/AngularJS online courses for 2,000+ students.',
  },
  {
    company: 'Wright State University',
    title: 'Senior Technical Support Assistant',
    period: '2014–2016',
    description:
      'Provided advanced technical support, supervised student workers, and maintained labs.',
  },
];

// Helper function to format period for resume (full month names)
export function formatPeriodForResume(period: string): string {
  return period
    .replace('Nov', 'November')
    .replace('Oct', 'October')
    .replace('Sept', 'September')
    .replace('Dec', 'December')
    .replace('Jan', 'January')
    .replace('Feb', 'February')
    .replace('Mar', 'March')
    .replace('Apr', 'April')
    .replace('May', 'May')
    .replace('Jun', 'June')
    .replace('Jul', 'July')
    .replace('Aug', 'August')
    .replace(' - ', ' – '); // Use en dash for resume
}
