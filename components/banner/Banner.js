import styles from "./banner.module.css";
import Image from "next/image";

const Banner = (props) => {
  const { title, subTitle, imgUrl } = props;

  const handleOnPlay = () => {
    console.log("handle on play");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>N</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subTitle}>{subTitle}</div>
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
              <Image
                src="/static/play_arrow.svg"
                alt="Play Icon"
                width="32px"
                height="32px"
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
        className={styles.bannerImg}
      ></div>
    </div>
  );
};
export default Banner;
