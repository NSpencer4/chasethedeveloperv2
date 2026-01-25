import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Resume.module.css';
import { jobs, additionalExperience, formatPeriodForResume } from '../data/experience';

const contactInfo = {
  name: 'Chase Spencer',
  title: 'Senior Software Engineer',
  location: 'Columbus, Ohio Metropolitan Area',
  email: 'n.chase.spencer@gmail.com',
  linkedin: 'linkedin.com/in/chase-spencer4',
  website: 'chasespencer.dev',
};

const summary =
  'Results-driven software engineer with 9+ years of experience translating ambiguous business requirements into effective, maintainable software solutions. Strong collaborator and mentor with a client-first mindset and a history of leading teams to successful delivery. Seeking opportunities to address diverse business problems using modern engineering practices.';

const skills = {
  'Programming & Frameworks':
    'TypeScript, React, Next.js, Angular, NestJS, ExpressJS, Kotlin, Spring Boot',
  'Cloud & Architecture':
    'AWS (Lambda, DynamoDB, SQS), Kafka, Event-Driven Systems, CQRS, Microservices',
  'DevOps & CI/CD': 'Terraform, CircleCI, GitLab CI',
  'Observability & Analytics': 'Datadog, Databricks, Monte Carlo',
  Databases: 'MySQL, DynamoDB, PostgreSQL',
};

// Transform jobs data for resume format
const experience = jobs
  .filter(job => !job.isCurrent || job.company !== 'The Scotts Miracle-Gro Company' || job.position !== 'eBusiness Intern')
  .slice(0, 5); // Only show the top 5 positions

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
          Download PDF
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
                  <p className={styles.jobTitle}>{job.position}</p>
                </div>
                <span className={styles.period}>{formatPeriodForResume(job.period)}</span>
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
