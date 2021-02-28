import { ChallengesContext } from 'context/ChallengesContext';
import { useContext } from 'react';
import styles from 'styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/andraderegis.png" alt="Regis Andrade" />
      <div>
        <strong>Regis Andrade</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
