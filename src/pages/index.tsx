import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chase Spencer | Software Developer</title>
        <meta name="description" content="Chase Spencer - Full-stack developer with 6+ years experience" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <Hero />
        <TechStack />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerLine}>-- END OF PAGE --</p>
        <p className={styles.footerVersion}>v2.0.0-terminal</p>
      </footer>
    </div>
  );
};

export default Home;
