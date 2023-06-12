import ColumnContainer from "./ColumnContainer";
import ColumnElement from "./ColumnElement";
import ColumnInsiderElement from "./ColumnInsiderElement";
import { CustomForm } from "../../components/Form";
import supabase from "../../supabase";

import styles from "./LogIn.module.css";

import video from "../../assets/testVideo.mp4";
import poster from "../../assets/testPoster.jpg";
import burnIcon from "../../assets/burnIcon.svg";
import videoMain from "../../assets/testMainVideo.mp4";
import { useContext } from "react";

const LogIn = () => {
  const videoSrc = video;
  const posterSrc = poster;

  const signUpUser = async (email, password) => {
    const { user, error } = await supabase.auth
      .signInWithPassword({
        email,
        password,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const playVideo = (videoRef) => {
    videoRef.current.play();
  };

  const stopVideo = (videoRef) => {
    setTimeout(() => {
      videoRef.current.pause();
    }, 1000);
  };


  return (
    <div className={styles.logIn}>
      <ColumnContainer>
        <ColumnElement order={2}>
          <ColumnInsiderElement
            name="Name"
            description="Description"
            video={videoSrc}
            // poster={poster}
            playVideo={playVideo}
            stopVideo={stopVideo}
          />
        </ColumnElement>
        <ColumnElement order={1}>
          <ColumnInsiderElement
            name="Name"
            description="Description"
            video={videoSrc}
            // poster={poster}
            playVideo={playVideo}
            stopVideo={stopVideo}
          />
        </ColumnElement>
      </ColumnContainer>

      <ColumnContainer>
        <ColumnElement order={1}>
          <ColumnInsiderElement
            name="Name"
            description="Description"
            video={videoSrc}
            // poster={poster}
            playVideo={playVideo}
            stopVideo={stopVideo}
          />
        </ColumnElement>
        <ColumnElement order={1}>
          <ColumnInsiderElement
            name="Name"
            description="Description"
            video={videoSrc}
            // poster={poster}
            playVideo={playVideo}
            stopVideo={stopVideo}
          />
        </ColumnElement>
        <ColumnElement order={1}>
          <ColumnInsiderElement
            name="Name"
            description="Description"
            video={videoSrc}
            // poster={poster}
            playVideo={playVideo}
            stopVideo={stopVideo}
          />
        </ColumnElement>
      </ColumnContainer>

      <ColumnContainer>
        <ColumnElement order={1}>
          <ColumnInsiderElement
            video={videoMain}
            playVideo={playVideo}
            stopVideo={stopVideo}
          >
            <img src={burnIcon} alt="Burn Icon" />
          </ColumnInsiderElement>
        </ColumnElement>
        <ColumnElement order={1.5}>
          <CustomForm signUpUser={signUpUser} />
        </ColumnElement>
      </ColumnContainer>
    </div>
  );
};

export default LogIn;
