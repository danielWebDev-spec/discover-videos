import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner/Banner";
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
        {/* <Navbar /> */}
        <Banner
          title="Clifford the Red Dog"
          subTitle="A Cute Dog"
          imgUrl="/static/clifford.webp"
        />
        {/* <Card /> */}
      </main>
    </div>
  );
}
