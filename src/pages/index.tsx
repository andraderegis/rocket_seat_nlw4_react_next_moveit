import { GetServerSideProps } from 'next';

import Head from 'next/head';

import { CompletedChallenges } from "components/CompletedChallenges";
import { Countdown } from "components/Countdown";
import { ExperienceBar } from "components/ExperienceBar";
import { Profile } from "components/Profile";
import { ChallengeBox } from 'components/ChallengeBox';

import styles from 'styles/pages/Home.module.css';

import { CountdownProvider } from 'context/CountdownContext';
import { ChallengesProvider } from 'context/ChallengesContext';

interface HomeProps {
  challengesCompleted: number;
  currentExperience: number;
  level: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      challengesCompleted={props.challengesCompleted}
      currentExperience={props.currentExperience}
      level={props.level}>
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div >
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { challengesCompleted, currentExperience, level } = ctx.req.cookies;

  return {
    props: {
      challengesCompleted: Number(challengesCompleted),
      currentExperience: Number(currentExperience),
      level: Number(level)
    }
  }
};
