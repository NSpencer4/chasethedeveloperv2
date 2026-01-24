import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Resume.module.css';

interface Job {
  company: string;
  title: string;
  period: string;
  bullets: string[];
}

interface AdditionalRole {
  company: string;
  title: string;
  period: string;
  description: string;
}

const contactInfo = {
  name: 'Chase Spencer',
  title: 'Senior Software Engineer',
  location: 'Columbus, Ohio Metropolitan Area',
  email: 'n.chase.spencer@gmail.com',
  linkedin: 'linkedin.com/in/chase-spencer4',
  website: 'chasespencer.dev',
};

const summary =
  'Senior Software Engineer with 9+ years of experience designing and delivering high-scale, event-driven systems and eCommerce platforms. Skilled in distributed architectures, TypeScript/JavaScript, and AWS-based microservices. Proven leader and mentor, driving cross-functional teams to deliver maintainable, high-performance solutions.';

const skills = {
  'Programming & Frameworks':
    'TypeScript, JavaScript, React, Next.js, Angular, NestJS, ExpressJS, Kotlin, Spring Boot',
  'Cloud & Architecture':
    'AWS (Lambda, DynamoDB, SQS), Kafka, Event-Driven Systems, CQRS, Microservices',
  'DevOps & CI/CD': 'Terraform, CircleCI, GitLab CI',
  'Observability & Analytics': 'Datadog, Databricks, Monte Carlo',
  Databases: 'MySQL, DynamoDB, PostgreSQL',
};

const experience: Job[] = [
  {
    company: 'StockX',
    title: 'Senior Software Engineer',
    period: 'November 2021 – Present',
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
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    title: 'Senior Software Engineer, eBusiness',
    period: 'June 2021 – October 2021',
    bullets: [
      'Developed NestJS microservices, delivering scalable backend systems.',
      'Established an enterprise SDK monorepo using Lerna to manage shared modules across services.',
      'Supported MyLawn App microservices, improving performance and maintainability.',
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    title: 'Tech Lead, Frontend Applications',
    period: 'November 2020 – June 2021',
    bullets: [
      'Led frontend team in building a component-based React/Storybook SDK.',
      'Engineered an event-driven architecture for Super Bowl LV sweepstakes, processing 400k+ submissions using GCP Cloud Functions, Pub/Sub, and BigQuery.',
      'Developed enterprise websites using React and headless APIs aligned with organizational standards.',
      'Integrated Contentful + GraphQL, streamlining content workflows.',
      'Enhanced GitLab CI/CD pipelines, improving build reliability.',
    ],
  },
  {
    company: 'Cardinal Health',
    title: 'Software Engineer, eCommerce Product & Experience – Medical',
    period: 'September 2018 – November 2020',
    bullets: [
      'Supported market.cardinalhealth.com, a B2B SPA generating $1B+ in annual revenue.',
      'Delivered full-stack development using Angular, Spring Boot, and AEM headless CMS.',
      'Led upgrade of Market application from Angular 2 → Angular 7, improving performance by 80%.',
      'Designed micro-frontend architecture supporting parallel team development.',
      'Integrated Paymetric for secure credit card processing and led analytics initiatives using Adobe Analytics/Target.',
    ],
  },
  {
    company: 'The Scotts Miracle-Gro Company',
    title: 'Software Engineer, eCommerce Development',
    period: 'October 2017 – September 2018',
    bullets: [
      'Supported 13 Drupal 8 branded sites and 10 Magento DTC stores, driving multi-million-dollar sales.',
      'Implemented monitoring/alerting using New Relic and Sumo Logic and CI pipelines with Travis CI.',
      'Contributed to scalable Magento 2 architecture and secure payment integrations (Vantiv).',
    ],
  },
];

const additionalExperience: AdditionalRole[] = [
  {
    company: 'The Scotts Miracle-Gro Company',
    title: 'eBusiness Intern',
    period: '2015–2017',
    description:
        'Built internal web apps (Angular) and REST APIs on Google App Engine (Python), and supported Drupal 8 sites.',
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

const education = {
  school: 'Wright State University',
  degree: 'B.S., Computer Science',
  period: '2014–2018',
};

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Chase Spencer | Resume</title>
        <meta
          name="description"
          content="Chase Spencer - Senior Software Engineer Resume"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.printControls}>
        <button onClick={handlePrint} className={styles.downloadBtn}>
          <span className={styles.icon}>&#x2B73;</span> Download PDF
        </button>
        <Link href="/" className={styles.backLink}>
          &larr; Back to site
        </Link>
      </div>

      <article className={styles.resume}>
        {/* Header */}
        <header className={styles.header}>
          <img
            src="/profile.jpg"
            alt={contactInfo.name}
            className={styles.profilePhoto}
          />
          <h1 className={styles.name}>{contactInfo.name}</h1>
          <p className={styles.title}>{contactInfo.title}</p>
          <p className={styles.location}>{contactInfo.location}</p>
          <div className={styles.contactLinks}>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            <span className={styles.separator}>|</span>
            <a
              href={`https://${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.linkedin}
            </a>
            <span className={styles.separator}>|</span>
            <a
              href={`https://${contactInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.website}
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p className={styles.summaryText}>{summary}</p>
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Skills</h2>
          <div className={styles.skillsGrid}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className={styles.skillRow}>
                <span className={styles.skillCategory}>{category}:</span>
                <span className={styles.skillList}>{skillList}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          {experience.map((job, idx) => (
            <div key={idx} className={styles.job}>
              <div className={styles.jobHeader}>
                <div>
                  <h3 className={styles.company}>{job.company}</h3>
                  <p className={styles.jobTitle}>{job.title}</p>
                </div>
                <span className={styles.period}>{job.period}</span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Additional Experience */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Additional Experience</h2>
          {additionalExperience.map((role, idx) => (
            <div key={idx} className={styles.additionalRole}>
              <div className={styles.jobHeader}>
                <div>
                  <span className={styles.additionalCompany}>{role.company}</span>
                  <span className={styles.additionalTitle}> – {role.title}</span>
                </div>
                <span className={styles.period}>{role.period}</span>
              </div>
              <p className={styles.additionalDesc}>{role.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationRow}>
            <div>
              <span className={styles.school}>{education.school}</span>
              <span className={styles.degree}> – {education.degree}</span>
            </div>
            <span className={styles.period}>{education.period}</span>
          </div>
        </section>
      </article>
    </div>
  );
}
