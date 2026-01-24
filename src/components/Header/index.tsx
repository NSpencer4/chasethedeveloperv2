import styles from './Header.module.css';

export const Header = (): JSX.Element => {
  return (
    <header data-testid="header-component" className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.terminalInfo}>
          <span className={`material-symbols-outlined ${styles.terminalIcon}`}>terminal</span>
          <h2 className={styles.terminalText}>user@portfolio:~$</h2>
        </div>
        <div className={styles.trafficLights}>
          <div className={`${styles.dot} ${styles.dotRed}`}></div>
          <div className={`${styles.dot} ${styles.dotYellow}`}></div>
          <div className={`${styles.dot} ${styles.dotGreen}`}></div>
        </div>
      </div>
    </header>
  );
};
