import styles from './Contact.module.css';

export const Contact = (): JSX.Element => {
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
            <form className="form-horizontal" id="contactForm">
              <div className="control-group">
                <label className="control-label">Name</label>
                <div className="controls">
                  <input type="text" name="name" id="name" placeholder="Your name"
                         className="form-control input-lg" required/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Email Address</label>
                <div className="controls">
                  <input type="email" name="email" id="email"
                         placeholder="Your email address" className="form-control input-lg"
                         required/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <label className="control-label">Message</label>
                <div className="controls">
                  <textarea name="message" id="message" className="form-control input-lg" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="form-actions">
                <div id="success"></div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Submit
                  Message
                </button>
              </div>
            </form>
            {/*<div className="card">*/}
            {/*  <h3>Thank you for reaching out!</h3>*/}
            {/*</div>*/}
            <div className="col-sm-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
