import styles from './Skills.module.css';
import cn from 'classnames';

export const Skills = (): JSX.Element => {
  return (
    <div data-testid="skills-section" className={styles.skillsSection}>
      <div className="container">
        <header data-testid="header-section" className={styles.headerSection}>
          <h2 data-testid="title-section" className={styles.titleSection}>Skills</h2>
          <div data-testid="spacing-bar" className={styles.spacingBar}></div>
        </header>
        <div className="row no-negative-margin">
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="angular" className={cn('fab fa-angular skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="adobe" className={cn('fab fa-adobe skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="drupal" className={cn('fab fa-drupal skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row no-negative-margin">
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="php" className={cn('fab fa-php skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="python" className={cn('fab fa-python skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="java" className={cn('fab fa-java skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row no-negative-margin">
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="js" className={cn('fab fa-js skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="aws" className={cn('fab fa-aws skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="google" className={cn('fab fa-google skills-fa', styles.skillsFa)}></i>

            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row no-negative-margin">
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="wordpress" className={cn('fab fa-wordpress skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="magento" className={cn('fab fa-magento skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="css3" className={cn('fab fa-css3-alt skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row no-negative-margin">
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="git" className={cn('fab fa-git-square skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="github" className={cn('fab fa-github-square skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="html5" className={cn('fab fa-html5 skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <div className="row no-negative-margin">
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="react" className={cn('fab fa-react skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="sass" className={cn('fab fa-sass skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
          <div className="col-4">
            <div className={styles.skillsImgDiv}>
              <i data-testid="node" className={cn('fab fa-node skills-fa', styles.skillsFa)}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
