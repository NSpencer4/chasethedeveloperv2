import styles from './Education.module.css';

export const Education = (): JSX.Element => {
  return (
    <div data-testid="education-section" className={styles.educationSection}>
      <div className="container">
        <header data-testid="header-section" className={styles.headerSection}>
          <h2 data-testid="title-section" className={styles.titleSection}>Education</h2>
          <div data-testid="spacing-bar" className={styles.spacingBar}></div>
        </header>
        <br/>
        <div className="row top-space">
          <div className="col-md-12">
            <div data-testid="wsuPic" className={styles.wsuPic}>
              <img
              src="/Wright_State_University_logo.png"
              alt="wsu" />
              </div>
          </div>
        </div>
        <br/>
        <div className="row top-space">
          <div className="col-md-12">
            <p>Bachelor of Computer Science</p>
            <p><strong>Graduated:</strong> 2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};
