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
                            I'm Chase, a Senior Software Engineer with 9 years of experience based in the Columbus, Ohio
                            Metropolitan Area.
                            <br/><br/>
                            Results-driven engineer with extensive experience translating ambiguous business requirements
                            into effective, maintainable software solutions. Strong collaborator and mentor with a
                            client-first mindset and a proven history of leading teams to successful delivery.
                            <br/><br/>
                            Extensive experience building high-scale, event-driven systems and eCommerce platforms using
                            modern engineering practices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  );
};
