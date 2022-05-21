import Link from "next/link";
import Card from "./Card";
import styles from "./sectionCards.module.css";

const SectionCards = (props) => {
  const { title, videos = [], size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return (
            <Link href={`/video/${encodeURIComponent(video.id)}`}>
              <a>
                <Card
                  key={idx}
                  id={idx}
                  imgUrl={video.imgUrl}
                  size={size}
                  className={styles.imgCard}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default SectionCards;
