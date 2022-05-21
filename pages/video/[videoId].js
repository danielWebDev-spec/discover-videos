import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";
import clsx from "classnames";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();

  const video = {
    title: "Bleach: Fade to Black",
    publishTime: "2011-08-24",
    description: "Trailer for the third exciting Bleach Movie!",
    channelTitle: "vizmedia",
    viewCount: "474657",
  };

  const { title, publishTime, description, channelTitle, viewCount } = video;

  return (
    <div className={styles.container}>
      <Modal
        className={styles.modal}
        isOpen={true}
        contentLabel="Watch Video"
        onRequestClose={() => {
          router.back();
        }}
        overlayClassName={styles.overlay}
      >
        <iframe
          className={styles.videoPlayer}
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={`http://www.youtube.com/embed/${router.query.videoId}?enablejsapi=1&controls=1&rel=0`}
          frameborder="0"
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Channel: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Video;
