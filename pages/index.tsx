import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Professions from '../components/Professions';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

const Home: NextPage = ({ messages }) => {
  const t = useTranslations('home');
  const { locale } = useRouter();
  const cards = [
    {
      title: "Front end",
      description: "frontEndDescription",
      link: "FrontEnd",
    },
    {
      title: "Back end",
      description: "backEndDescription",
      link: "/",
      wip: true,
    }
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>My Roadmap</title>
        <meta name="description" content="The best path to learn." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className={styles.title}>My Roadmap</h1>
        <h2 className={styles.subtitle}>What do you want to be?</h2>
      </section>

      <main className={styles.professions}>
        {
          cards.map(i => (
            <Professions
              title={i.title}
              description={
                t(i.description, locale)
              }
              link={i.link}
              wip={i.wip}
            />
          ))
        }
      </main>
    </div>
  )
}

export default Home;
interface getStaticPropsTypes {
  locale: string;
}
export function getStaticProps({ locale }: getStaticPropsTypes) {
  return {
    props: {
      messages: {
        ...require(`../messages/home/${locale}.json`),
      },
    },
  }
}
