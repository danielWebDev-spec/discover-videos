import Card from "./Card";
import styles from "./sectionCards.module.css";

const SectionCards = (props) => {
  const { title, videos, size } = props;

  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return (
            <Card
              key={idx}
              id={idx}
              imgUrl={video.imgUrl}
              size={size}
              className={styles.imgCard}
            />
          );
        })}
      </div>
    </section>
  );
};
export default SectionCards;
