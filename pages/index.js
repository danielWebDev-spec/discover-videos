import Head from "next/head";
import Banner from "../components/banner/Banner";
import SectionCards from "../components/card/SectionCards";
import Navbar from "../components/nav/Navbar";
import styles from "../styles/Home.module.css";
import { getVideos } from "../lib/videos";

export async function getServerSideProps() {
  const animeVideos = await getVideos("anime trailers");
  const travelVideos = await getVideos("travel");
  const productivityVideos = await getVideos("productivity");

  return {
    props: {
      animeVideos,
      travelVideos,
      productivityVideos,
    },
  };
}

export default function Home({
  animeVideos,
  travelVideos,
  productivityVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix Clone using Youtube API</title>
        <meta name="description" content="Nextflix Clone using Youtube API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Navbar username="daniel@gmail.com" />
        <Banner
          title="Bleach"
          subTitle="Fade to Black"
          imgUrl="/static/Bleach.jpg"
        />
        <div className={styles.sectionWrapper}>
          <SectionCards
            title="Anime Trailers"
            videos={animeVideos}
            size="large"
          />
          <SectionCards title="Travel" videos={travelVideos} size="small" />
          <SectionCards
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCards title="Popular" videos={animeVideos} size="small" />
        </div>
      </div>
    </div>
  );
}
