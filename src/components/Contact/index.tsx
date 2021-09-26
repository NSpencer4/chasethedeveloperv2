import styles from './Contact.module.css';
import { useState } from 'react';
import { submitContact } from '../../services/submission-api';
import cn from 'classnames';

export const Contact = (): JSX.Element => {
  const [nameVal, setNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [messageVal, setMessageVal] = useState('');
  const [scraperVal, setScraperVal] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitForm = () => {
    submitContact(nameVal, emailVal, messageVal, scraperVal)
      .then(() => {
        setFormSubmitted(true);
      });
  };

  return (
    <div data-testid="contact-section" className={styles.contactSection}>
      <div className="container">
        <header data-testid="header-section" className={styles.headerSection}>
          <h2 data-testid="title-section" className={styles.titleSection}>Contact</h2>
          <div data-testid="spacing-bar" className={styles.spacingBar}></div>
        </header>
        <br/>
        <div className="row top-space">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            {
              !formSubmitted &&
              (<form className="form-horizontal" id="contactForm">
                <div className="control-group">
                  <label className="control-label">Name</label>
                  <div className="controls">
                    <input type="text" name="name" id="name" placeholder="Your name"
                           value={nameVal}
                           onChange={(e) => setNameVal(e.target.value)}
                           className="form-control input-lg"/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label">Email Address</label>
                  <div className="controls">
                    <input type="email" name="email" id="email"
                           value={emailVal}
                           onChange={(e) => setEmailVal(e.target.value)}
                           placeholder="Your email address" className="form-control input-lg"/>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="control-group">
                  <label className="control-label">Message</label>
                  <div className="controls">
                  <textarea name="message" id="message"
                            value={messageVal}
                            onChange={(e) => setMessageVal(e.target.value)}
                            className="form-control input-lg"></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <input
                  className={cn('form-control', styles.scraperCheck)}
                  type="text"
                  name="scraperCheck"
                  id="scraperCheck"
                  value={scraperVal}
                  onChange={(e) => setScraperVal(e.target.value)}
                  autoComplete="off"
                />
                <div className="form-actions">
                  <div id="success"></div>
                  <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={submitForm}>Submit
                    Message
                  </button>
                </div>
              </form>)
            }
            {
              formSubmitted &&
              (<div className="card">
                <h3>Thank you for reaching out!</h3>
              </div>)
            }
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
