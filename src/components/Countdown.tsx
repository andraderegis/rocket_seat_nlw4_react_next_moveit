import { ChallengesContext } from 'context/ChallengesContext';
import { useContext, useEffect, useState } from 'react';
import styles from 'styles/components/Countdown.module.css';

const LABEL_CICLE_BUTTON = {
  START: 'Iniciar um ciclo',
  ABORT: 'Abandonar ciclo',
  FINISHED: 'Ciclo encerrado'
}

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return;
    }

    if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }

  }, [isActive, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}>
          {LABEL_CICLE_BUTTON.FINISHED}
        </button>
      ) : (
          <>
            { isActive ?
              (
                <button type="button"
                  onClick={resetCountdown}
                  className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                  {LABEL_CICLE_BUTTON.ABORT}
                </button>
              ) : (
                <button type="button"
                  onClick={startCountdown}
                  className={styles.countdownButton}>
                  {LABEL_CICLE_BUTTON.START}
                </button>
              )}

          </>
        )}
    </div>
  )
}
