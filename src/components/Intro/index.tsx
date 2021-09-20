import cn from 'classnames';
import styles from './Intro.module.css';

export const Intro = (): JSX.Element => {
  return (
    <div data-testid="home-container" className={cn(styles.homeContainer, styles.backgroundTint)}>
      <div className="top-space">
        <div className={styles.introContainer}>
          <h1 className={styles.introName}>Chase Spencer</h1>
          <h2 className={styles.introTitle}>Software Developer</h2>
        </div>
      </div>
    </div>
  );
};
