import styles from 'styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      { hasActiveChallenge
        ? (
          <div className={styles.challengeActive}>
            <header>Ganha 400 xp</header>
            <main>
              <img src="icons/body.svg" alt="Challenge" />
              <strong>Novo Desafio</strong>
              <p>Levante e não deixe de fazer alongamentos. É importante para as articulações.</p>
            </main>

            <footer>
              <button
                type="button"
                className={styles.challengeFailedButton}>
                Falhei
                </button>
              <button type="button"
                className={styles.challengeSucceedButton}>
                Completei
                </button>
            </footer>
          </div>
        )
        : (
          <div className={styles.challengeNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios.
            </p>
          </div>
        )
      }
    </div>
  );
}
