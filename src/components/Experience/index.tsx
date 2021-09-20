import styles from './Experience.module.css';
import cn from 'classnames';

export const Experience = (): JSX.Element => {
  return (
    <div data-testid="experience-section" className={styles.experienceSection}>
      <div className='container'>
        <header data-testid="header-section" className={styles.headerSection}>
          <h2 data-testid="title-section" className={styles.titleSection}><span>Experience</span></h2>
          <div data-testid="spacing-bar" className={styles.spacingBar}></div>
        </header>
        <div className={styles.timelineBarStart}></div>
        <ul className={styles.timelineGlyph}>
          <li className={styles.timelineSection}>
            <div className={styles.timelineGlyphDiv}>
              <i className={cn('fab fa-python', styles.timelineFa)}></i>
            </div>
            <div className={styles.timelineCard}>
              <p className={styles.timelineCardDates}>
                Feb 2016 - Jan 2017
              </p>
              <div className={styles.timelineWsuCardImage}>
              </div>
              <div className={styles.timelineCardBody}>
                <h4 className={styles.timelineCardCompany}>
                  Wright State University
                </h4>
                <h6 className={styles.timelineCardPosition}>
                  Full-Stack Developer / Content Manager
                </h6>
                <br/>
                <ul className={styles.timelineList}>
                  <li>Supported a web application that is used to provide online classes to students
                    internationally
                  </li>
                  <li>30+ engineering and computer science classes on average that are offered through the
                    app
                  </li>
                  <li>Used by 2000+ students that generates tuition for the University</li>
                  <li>Developed the application using Django, Django REST Framework, AngularJS and various
                    other small
                    frameworks
                  </li>
                  <li>Managed content for the Engineering and Computer Science Department using Drupal</li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.timelineSection}>
            <div className={styles.timelineGlyphDiv}>
              <i className="fab fa-laravel timelineFa"></i>
            </div>
            <div className={styles.timelineCardInverted}>
              <p className={styles.timelineCardDates}>
                Aug 2016 - Apr 2017
              </p>
              <div className={styles.timelineOmniCardImage}>
              </div>
              <div className={styles.timelineCardBody}>
                <h4 className={styles.timelineCardCompany}>
                  OmniSpear Inc.
                </h4>
                <h6 className={styles.timelineCardPosition}>
                  Web Development Intern
                </h6>
                <br/>
                <ul className={styles.timelineList}>
                  <li>Supported clients by providing website and web application support</li>
                  <li>Supported Drupal 6 and 7 websites</li>
                  <li>Provided Drupal training</li>
                  <li>Supported WordPress websites</li>
                  <li>Provided Database Administration</li>
                  <li>Implemented Google Analytics</li>
                  <li>Implemented features and enhancements using Laravel</li>
                  <li>Implemented features and enhancements using AngularJS, JavaScript and JQuery</li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.timelineSection}>
            <div className={styles.timelineGlyphDiv}>
              <i className={cn('fab fa-angular', styles.timelineFa)}></i>
            </div>
            <div className={styles.timelineCard}>
              <p className={styles.timelineCardDates}>
                May 2015 - Sep 2017
              </p>
              <div className={styles.timelineSmgInternCardImage}>
              </div>
              <div className={styles.timelineCardBody}>
                <h4 className={styles.timelineCardCompany}>
                  The Scotts Miracle-Gro Company
                </h4>
                <h6 className={styles.timelineCardPosition}>
                  eBusiness Intern
                </h6>
                <br/>
                <ul className={styles.timelineList}>
                  <li>Developed 3 web applications used to improve critical business processes</li>
                  <li>Provided Project Management using Agile Methodology</li>
                  <li>Lead Project Advisory Board and Executive Steering Committee meetings</li>
                  <li>Designed/Developed RESTful APIs for applications using Google App Engine in Python</li>
                  <li>Documented the APIs fully using RAML</li>
                  <li>Developed full features using AngularJS, Angular 4 and various other front-end
                    frameworks
                  </li>
                  <li>Developed and provided quality assurance for all branded sites</li>
                  <li>Provided Full-Stack support in Drupal 8 to satisfy business needs</li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.timelineSection}>
            <div className={styles.timelineGlyphDiv}>
              <i className={cn('fab fa-drupal', styles.timelineFa)}></i>
            </div>
            <div className={styles.timelineCardInverted}>
              <p className={styles.timelineCardDates}>
                Oct 2017 - Sept 2018
              </p>
              <div className={styles.timelineSmgCardImage}>
              </div>
              <div className={styles.timelineCardBody}>
                <h4 className={styles.timelineCardCompany}>
                  The Scotts Miracle-Gro Company
                </h4>
                <h6 className={styles.timelineCardPosition}>
                  eBusiness Software Engineer
                </h6>
                <br/>
                <ul className={styles.timelineList}>
                  <li>Supported 13 branded sites using Drupal 8</li>
                  Examples: Scotts.com, Miraclegro.com, Roundup.com, Ortho.com
                  <li>Supported 10 branded stores using Magento</li>
                  Examples: Scottsprogram.com, Mygro.com, Scottsdirect.com
                  <li>Developed a user authentication system that utilized a REST API to improve application
                    performance</li>
                  <li>Setup Vagrant environments for local use</li>
                  <li>Upgraded AWS systems to ensure security</li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.timelineSection}>
            <div className={styles.timelineGlyphDiv}>
              <i className={cn('fab fa-adobe', styles.timelineFa)}></i>
            </div>
            <div className={styles.timelineCard}>
              <p className={styles.timelineCardDates}>
                Sept 2018 - Present
              </p>
              <div className={styles.timelineCardinalCardImage}>
              </div>
              <div className={styles.timelineCardBody}>
                <h4 className={styles.timelineCardCompany}>
                  Cardinal Health
                </h4>
                <h6 className={styles.timelineCardPosition}>
                  Software Engineer
                </h6>
                <br/>
                <ul className={styles.timelineList}>
                  <li>Supported market.cardinalhealth.com, a medical B2B eCommerce single-page-application (SPA) that provides hundreds of millions in revenue annually</li>
                  <li>Provided tested full-stack development using Angular, Spring Boot and AEM</li>
                  <li>Implemented OKTA authentication and credentials management integration</li>
                  <li>Upgraded the Market app from Angular 2 to Angular 7</li>
                  <li>Improved the Market application performance by 80%</li>
                  <li>Re-architected Market to be in a Content as a Service (CaaS) model using AEM as the Content Management System (CMS) and implemented the architecture</li>
                  <li>Implemented Paymetric credit card integration</li>
                  <li>Lead Analytics efforts using Adobe Analytics (Adobe Launch and Adobe DTM)</li>
                  <li>Lead content segmentation efforts using Adobe Target</li>
                  <li>Architected a Micro-Frontend strategy to utilize Web Components for multiple team integration with the Market SPA</li>
                  <li>Implemented production Concourse CI build pipelines</li>
                  <li>Created a single page application written in Angular used for unauthenticated traffic</li>
                  <li>Provided Angular training to partners</li>
                  <li>Provided AEM development and lead a development team to support the corporate website (cardinalhealth.com)</li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.timelineSection}>
            <div className={styles.timelineGlyphDiv}>
              <i className={cn('fab fa-react', styles.timelineFa)}></i>
            </div>
            <div className={styles.timelineCardInverted}>
              <p className={styles.timelineCardDates}>
                Nov 2020 - June 2021
              </p>
              <div className={styles.timelineSmgCardImage}>
              </div>
              <div className={styles.timelineCardBody}>
                <h4 className={styles.timelineCardCompany}>
                  The Scotts Miracle-Gro Company
                </h4>
                <h6 className={styles.timelineCardPosition}>
                  eBusiness Technical Lead
                </h6>
                <br/>
                <ul className={styles.timelineList}>
                  <li>Implemented an event-based architecture solution for the company's first Super Bowl sweepstakes advertisement (Super Bowl LV) for keepgrowingtoday.com using GCP Cloud Functions, Pub/Sub and Big Query that processed 400k+ submissions</li>
                  <li>Led a development team to build the company's enterprise component SDK following component-based architecture using React and Storybook</li>
                  <li>Led a development team to build the company's enterprise websites using React and headless APIs</li>
                  <li>Worked with UI/UX on creating a themeable component-based design system for the branded sites</li>
                  <li>Implemented CMS integrations using a headless CMS (Contentful) with GraphQL</li>
                  <li>Provided and improved existing build and deployment pipelines to improve code quality and reliability using Gitlab CI</li>
                </ul>
              </div>
            </div>
          </li>
          <li className={styles.timelineSection}>
            <div className={styles.timelineGlyphDiv}>
              <i className={cn('fab fa-node-js', styles.timelineFa)}></i>
            </div>
            <div className={styles.timelineCard}>
              <p className={styles.timelineCardDates}>
                June 2021 - Present
              </p>
              <div className={styles.timelineSmgCardImage}>
              </div>
              <div className={styles.timelineCardBody}>
                <h4 className={styles.timelineCardCompany}>
                  The Scotts Miracle-Gro Company
                </h4>
                <h6 className={styles.timelineCardPosition}>
                  eBusiness Senior Engineer
                </h6>
                <br/>
                <ul className={styles.timelineList}>
                  <li>Provided eCommerce microservice development using NestJS</li>
                  <li>Created an enterprise SDK Monorepo using Lerna for microservice shared modules</li>
                  <li>Provided microservice development to support the MyLawn App</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div className={styles.timelineEndBar}></div>
      </div>
    </div>
  );
};
