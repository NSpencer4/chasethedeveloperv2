import styles from './Contact.module.css';
import React, { useState } from 'react';
import { submitContact } from '../../services/submission-api';

export const Contact = () => {
  const [nameVal, setNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [messageVal, setMessageVal] = useState('');
  const [scraperVal, setScraperVal] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await submitContact(nameVal, emailVal, messageVal, scraperVal);
      if (response.success) {
        setFormSubmitted(true);
      } else {
        setError(response.message || 'Failed to send message');
      }
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section data-testid="contact-section" className={styles.section}>
      <h3 className={styles.sectionHeader}>{'// 06. Connect'}</h3>

      <div className={styles.terminalBox}>
        <div className={styles.terminalPrompt}>
          <span className={styles.promptSymbol}>$</span>
          <span className={styles.promptCommand}>
            curl -X POST /api/contact
          </span>
        </div>
        <div className={styles.terminalOutput}>
          <div className={styles.jsonLine}>
            <span className={styles.jsonKey}>"email":</span>
            <span className={styles.jsonValue}>"chase@thespencers.email"</span>
          </div>
          <div className={styles.jsonLine}>
            <span className={styles.jsonKey}>"github":</span>
            <span className={styles.jsonValue}>"github.com/NSpencer4"</span>
          </div>
          <div className={styles.jsonLine}>
            <span className={styles.jsonKey}>"linkedin":</span>
            <span className={styles.jsonValue}>"linkedin.com/in/chase-spencer4"</span>
          </div>
        </div>
      </div>

      {!formSubmitted ? (
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={nameVal}
              onChange={(e) => setNameVal(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              value={emailVal}
              onChange={(e) => setEmailVal(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              value={messageVal}
              onChange={(e) => setMessageVal(e.target.value)}
              className={styles.textarea}
              required
            ></textarea>
          </div>
          <input
            className={styles.scraperCheck}
            type="text"
            name="scraperCheck"
            id="scraperCheck"
            value={scraperVal}
            onChange={(e) => setScraperVal(e.target.value)}
            autoComplete="off"
          />
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            <span className="material-symbols-outlined">mail</span>
            <span>{isSubmitting ? 'SENDING...' : 'SEND_MESSAGE'}</span>
          </button>
        </form>
      ) : (
        <div className={styles.successCard}>
          <span className={styles.successIcon}>✓</span>
          <h3 className={styles.successTitle}>Message sent!</h3>
          <p className={styles.successText}>Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      )}
    </section>
  );
};
