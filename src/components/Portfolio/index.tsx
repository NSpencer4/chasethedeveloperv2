import styles from './Portfolio.module.css';
import cn from 'classnames';

export const Portfolio = (): JSX.Element => {
  return (
    <div data-testid="portfolio-section" className={styles.portfolioSection}>
      <div className="container">
        <header data-testid="header-section" className={styles.headerSection}>
          <h2 data-testid="title-section" className={styles.titleSection}>Portfolio</h2>
          <p>Projects I've Worked On:</p>
          <div data-testid="spacing-bar" className={styles.spacingBar}></div>
        </header>
        <br/>
        <div className="row top-space">
          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://scotts.com">
                <img src="https://scottsmiraclegro.com/wp-content/themes/Corporate-Site-WP/images/logos/scotts.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://miraclegro.com">
                <img src="https://scottsmiraclegro.com/wp-content/themes/Corporate-Site-WP/images/logos/mg.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://ortho.com">
                <img src="https://scottsmiraclegro.com/wp-content/themes/Corporate-Site-WP/images/logos/ortho.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>
          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://roundup.com">
                <img src="https://scottsmiraclegro.com/wp-content/uploads/2016/03/rup.png" className={styles.portfolioImg}
                     alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://tomcatbrand.com">
                <img src="https://scottsmiraclegro.com/wp-content/uploads/2017/09/tc2.png" className={styles.portfolioImg}
                     alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://scottsrootfactory.com">
                <img src="https://www.scottsrootfactory.com/sites/g/files/oydgjc166/files/asset_images/logo.jpg"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://www.scotts.com/en-us/mylawnapp">
                <img src="/mylawn.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://program.scotts.com/">
                <img src="/scottsprogram.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://mygro.com/">
                <img src="/mygro.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://provistaturf.com/">
                <img src="/provista.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://www.cardinalhealth.com">
                <img src="/cardinal.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://www.cordis.com/">
                <img src="/cordis.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://petroleumhistoryblog.com">
                <img src="https://petroleumhistoryblog.files.wordpress.com/2016/04/ohio-book-scan.jpg?w=316&h=449"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="http://joycedayton.com">
                <img src="/joyce-dayton-logo.jpg"
                     className="portfolio-img smaller-imgs" alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://sims-lohman.com">
                <img src="/sims.png"
                     className="portfolio-img smaller-imgs" alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://www.drhaworth.com">
                <img src="/drhaworth.png"
                     className="portfolio-img xs-imgs" alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://www.intellicasting.com">
                <img src="https://www.intellicasting.com/images/intellicasting_logo.png"
                     className="portfolio-img xs-imgs" alt="img"/>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-xs-6">
            <div className={cn('card', styles.portfolioCards)}>
              <a href="https://github.com/NSpencer4">
                <img src="/github.png"
                     className={styles.portfolioImg} alt="img"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
