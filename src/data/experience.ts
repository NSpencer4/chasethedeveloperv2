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
      'Built event-driven systems supporting Marketplace services (100k+ daily bid/ask placements) and Order services (30k+ daily orders).',
      'Led cross-functional teams to architect state machine systems using CQRS, Sagas, and Event Sourcing patterns, expanding order system capabilities.',
      'Orchestrated microservices migration into NX mono-repo and established CI/CD pipelines (CircleCI, Terraform) for improved collaboration and continuous delivery.',
      'Developed a Next.js/React testing tool to simulate ordering scenarios and saga workflows, accelerating integration times across teams.',
      'Implemented Databricks dashboards and Monte Carlo data quality alerts, reducing customer support volume and resolving critical incidents that saved millions in potential revenue loss.',
    ],
    tech: [
      { name: 'TypeScript', color: 'primary' },
      { name: 'Express', color: 'green' },
      { name: 'Next.js', color: 'purple' },
      { name: 'React', color: 'cyan' },
      { name: 'AWS Lambda', color: 'orange' },
      { name: 'Kafka', color: 'primary' },
      { name: 'SQS', color: 'green' },
      { name: 'DynamoDB', color: 'purple' },
      { name: 'GraphQL', color: 'cyan' },
      { name: 'NX', color: 'orange' },
      { name: 'CircleCI', color: 'primary' },
      { name: 'Terraform', color: 'green' },
      { name: 'Databricks', color: 'purple' },
      { name: 'Monte Carlo', color: 'cyan' },
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
      { name: 'NestJS', color: 'orange' },
      { name: 'TypeScript', color: 'primary' },
      { name: 'Lerna', color: 'green' },
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    position: 'Tech Lead, Frontend Applications',
    period: 'Nov 2020 - June 2021',
    isCurrent: false,
    bullets: [
      'Engineered event-driven architecture for Super Bowl LV sweepstakes processing 400k+ submissions using GCP Cloud Functions, Pub/Sub, and BigQuery.',
      'Led a development team building enterprise component SDK (React/Storybook) and themeable design system for branded sites.',
      'Implemented Contentful CMS with GraphQL integration and enhanced GitLab CI/CD pipelines for improved content workflows and build reliability.',
    ],
    tech: [
      { name: 'React', color: 'cyan' },
      { name: 'Next.js', color: 'purple' },
      { name: 'Storybook', color: 'orange' },
      { name: 'GCP', color: 'primary' },
      { name: 'Cloud Functions', color: 'green' },
      { name: 'Pub/Sub', color: 'purple' },
      { name: 'BigQuery', color: 'cyan' },
      { name: 'GraphQL', color: 'orange' },
      { name: 'Contentful', color: 'primary' },
      { name: 'GitLab CI', color: 'green' },
    ],
  },
  {
    company: 'Cardinal Health',
    position: 'Software Engineer, eCommerce Product & Experience – Medical',
    period: 'Sept 2018 - Nov 2020',
    isCurrent: false,
    bullets: [
      'Developed full-stack features for market.cardinalhealth.com, a B2B medical eCommerce SPA generating $1B+ in annual revenue using Angular, Spring Boot, and AEM headless CMS.',
      'Led Angular 2 → 7 upgrade achieving 80% performance improvement and architected micro-frontend strategy using Web Components for parallel team development.',
      'Integrated Paymetric payment processing, implemented Concourse CI pipelines, and led analytics initiatives using Adobe Analytics/Target for data-driven decision-making.',
    ],
    tech: [
      { name: 'Angular', color: 'orange' },
      { name: 'Spring Boot', color: 'green' },
      { name: 'AEM', color: 'purple' },
      { name: 'OKTA', color: 'cyan' },
      { name: 'Web Components', color: 'orange' },
      { name: 'Concourse CI', color: 'primary' },
      { name: 'Adobe Analytics', color: 'green' },
      { name: 'Adobe Target', color: 'purple' },
      { name: 'Micro-frontends', color: 'cyan' },
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    position: 'Software Engineer, eCommerce Development',
    period: 'Oct 2017 - Sept 2018',
    isCurrent: false,
    bullets: [
      'Supported 13 Drupal 8 branded sites and 10 Magento DTC stores, implementing monitoring with New Relic/Sumo Logic and Travis CI pipelines.',
      'Contributed to scalable Magento 2 architecture and integrated Vantiv payment processing for enhanced security.',
    ],
    tech: [
      { name: 'Drupal', color: 'primary' },
      { name: 'Magento', color: 'orange' },
      { name: 'New Relic', color: 'cyan' },
      { name: 'Sumo Logic', color: 'purple' },
      { name: 'Travis CI', color: 'green' },
    ],
  }
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
    company: 'The Scotts Miracle-Gro Company',
    title: 'eBusiness Intern',
    period: '2015-2017',
    description:
      'Built internal web applications and REST APIs (Google App Engine/Python) and implemented features using AngularJS/Angular 4 with Drupal 8 support.',
  },
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
