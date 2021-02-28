import { createContext, ReactNode, useState } from 'react';

interface ChallengesContextData {
  challengesCompleted: number,
  currentExperience: number;
  level: number;
  levelUp: () => void;
  startNewChallenge: () => void;

}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    console.log('new challenge');
  }

  return (
    <ChallengesContext.Provider
      value={{
        challengesCompleted,
        currentExperience,
        level,
        levelUp,
        startNewChallenge
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}

export default ChallengesProvider;
