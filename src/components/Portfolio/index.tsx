import styles from './Portfolio.module.css';
import { type JSX } from 'react';

interface Project {
  name: string;
  url: string;
  image: string;
}

const projects: Project[] = [
  { name: 'StockX', url: 'https://stockx.com', image: '/stockx.png' },
  { name: 'Scotts', url: 'https://scotts.com', image: '/scotts.png' },
  { name: 'Miracle-Gro', url: 'https://miraclegro.com', image: '/miracle-gro.png' },
  { name: 'Ortho', url: 'https://ortho.com', image: '/ortho.png' },
  { name: 'Roundup', url: 'https://roundup.com', image: '/roundup.png' },
  { name: 'Tomcat', url: 'https://tomcatbrand.com', image: '/tomcat.png' },
  { name: 'MyLawn App', url: 'https://www.scotts.com/en-us/mylawnapp', image: '/mylawn.png' },
  { name: 'Scotts Program', url: 'https://program.scotts.com/', image: '/scottsprogram.png' },
  { name: 'MyGro', url: 'https://mygro.com/', image: '/mygro.png' },
  { name: 'Provista', url: 'https://provistaturf.com/', image: '/provista.png' },
  { name: 'Cardinal Health', url: 'https://www.cardinalhealth.com', image: '/cardinal.png' },
  { name: 'Cordis', url: 'https://www.cordis.com/', image: '/cordis.png' },
  { name: 'GitHub', url: 'https://github.com/NSpencer4', image: '/github.png' },
  { name: 'Personal Storybook', url: 'https://storybook.chasethedeveloper.com', image: '/storybook.png' },
  { name: 'SMG Storybook', url: 'https://storybook.smgro.dev', image: '/storybook-gro.png' },
];

export const Portfolio = (): JSX.Element => {
  return (
    <section data-testid="portfolio-section" className={styles.section}>
      <h3 className={styles.sectionHeader}>{'// 04. Projects'}</h3>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <div className={styles.projectImageWrapper}>
              <img src={project.image} alt={project.name} className={styles.projectImage} />
            </div>
            <div className={styles.projectName}>{project.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
};
