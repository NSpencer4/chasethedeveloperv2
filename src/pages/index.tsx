import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Intro } from '../components/Intro';
import { Profile } from '../components/Profile';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import 'bootstrap/dist/css/bootstrap.css';
import { Experience } from '../components/Experience';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chase Spencer</title>
        <meta name="description" content="Chase Spencer's Interactive Resume" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
              integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
              crossOrigin="anonymous" />
      </Head>

      <main className={styles.main}>
        <Intro />
        <Profile />
        <Skills />
        <Education />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
