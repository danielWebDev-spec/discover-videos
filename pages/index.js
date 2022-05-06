import Head from "next/head";
import Image from "next/image";
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
        <h1>Netflix clone with Youtube API</h1>
      </main>
    </div>
  );
}
