import cn from 'classnames';
import Link from 'next/link';
import styles from './Hero.module.css';

export const Hero = (): JSX.Element => {
  return (
        <section data-testid="hero-section" className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={cn(styles.profileImage, 'scanlines')}>
                    <img
                        src="/profile.jpg"
                        alt="Chase Spencer"
                        className={cn(styles.profileImg, 'pixelated')}
                    />
                    <div className={styles.imageOverlay}></div>
                    <div className={styles.imageAccent}></div>
                </div>

                <div className={styles.introContent}>
                    <div className={styles.whoamiPrompt}>
                        <span className={styles.promptArrow}>➜</span>
                        <span className={styles.promptText}>$ whoami</span>
                    </div>

                    <h1 className={styles.name}>Chase Spencer</h1>

                    <div className={styles.titleRow}>
                        <span className={styles.title}>Software Engineer</span>
                        <span className="cursor-blink"></span>
                    </div>

                    <p className={styles.bio}>
                        Results-driven software engineer with 9+ years of experience translating ambiguous business
                        requirements into effective, maintainable software solutions. Strong collaborator and mentor
                        with a client-first mindset and a history of leading teams to successful delivery. Seeking
                        opportunities to address diverse business problems using modern engineering practices.
                    </p>

                    <Link href="/resume" className={styles.resumeLink}>
                        <span className={styles.resumeIcon}>&#x2B73;</span>
                        <span>View Resume</span>
                    </Link>
                </div>
            </div>

            <div className={styles.statusInfo}>
                <div className={styles.statusItem}>
                    <span className={styles.statusLabel}>uptime:</span>
                    <span className={styles.statusValue}>9+ years exp</span>
                </div>
                <div className={styles.statusItem}>
                    <span className={styles.statusLabel}>status:</span>
                    <span className={styles.statusValueGreen}>open_to_work</span>
                </div>
                <div className={styles.statusItem}>
                    <span className={styles.statusLabel}>location:</span>
                    <span className={styles.statusValue}>Columbus, OH</span>
                </div>
            </div>
        </section>
  );
};
