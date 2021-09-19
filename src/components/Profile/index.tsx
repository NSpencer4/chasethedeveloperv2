import cn from 'classnames';
import styles from './Profile.module.css';

export const Profile = (): JSX.Element => {
  return (
    <div data-testid="profile-section" className={cn(styles.profileSection)}>
      <div className="container">
        <header data-testid="header-section" className={styles.headerSection}>
          <h2 data-testid="title-section" className={styles.titleSection}>About Me</h2>
          <div data-testid="spacing-bar" className={styles.spacingBar}></div>
        </header>
        <div className="row top-space">
          <div data-testid="about-section" className={cn('col-sm-8 col-sm-offset-2', styles.aboutSection)}>
            <img data-testid="about-me-pic" src="/snowboarding.jpg" alt="" className={styles.aboutMeImg}/>
            <p data-testid="about-me-p" className={styles.aboutMeParagraph}>
              I'm Chase, a full-stack developer with 6+ years of fortune 500 development experience based in Columbus, Ohio.
              <br/><br/>
              I am a caffeine-driven developer interested in designing and implementing software that
              solves complex and often times ambiguous business problems.
              I'm a team player with experience leading and training product teams.
              <br/><br/>
              Seeking opportunities that provide exposure to unique and interesting business problems that I can
              help solve using modern solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
