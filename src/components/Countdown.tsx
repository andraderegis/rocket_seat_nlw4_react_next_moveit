import { CountdownContext } from 'context/CountdownContext';
import { useContext, useEffect, useState } from 'react';
import styles from 'styles/components/Countdown.module.css';

const LABEL_CICLE_BUTTON = {
  START: 'Iniciar um ciclo',
  ABORT: 'Abandonar ciclo',
  FINISHED: 'Ciclo encerrado'
}

export function Countdown() {
  const {
    isActive,
    hasFinished,
    minutes,
    seconds,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
