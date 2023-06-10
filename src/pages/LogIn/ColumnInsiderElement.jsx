import { useRef } from "react";
import styles from "./ColumnInsiderElement.module.css";

const ColumnInsiderElement = (props) => {
  const videoRef = useRef(null);

  const playVideo = () => {
    props.playVideo(videoRef);
  };

  const stopVideo = () => {
    props.stopVideo(videoRef);
  };

  return (
    <div className={styles.columnInsiderElement}>
      <video
        ref={videoRef}
        onMouseEnter={playVideo}
        onMouseLeave={stopVideo}
        src={props.video}
        poster={props.poster}
      />
      <div className={styles.columnInsiderContent}>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
      </div>
      {props.children}
    </div>
  );
};

export default ColumnInsiderElement;
