import Head from "next/head";
import Banner from "../components/banner/Banner";
import Navbar from "../components/nav/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix Clone using Youtube API</title>
        <meta name="description" content="Nextflix Clone using Youtube API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar username="daniel@gmail.com" />
        <Banner
          title="Bleach"
          subTitle="Fade to Black"
          imgUrl="/static/Bleach.jpg"
        />
        {/* <Card /> */}
      </main>
    </div>
  );
}
