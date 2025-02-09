import { FunctionComponent, useCallback } from "react";
import { Box } from "@mui/material";
import GroupMenuLogo from "../components/GroupMenuLogo";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import Descrip from "../components/Descrip";
import styles from "./Pag.module.css";

const Pag: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMingcuteleftFillIconClick = useCallback(() => {
    navigate("/pgina");
  }, [navigate]);

  return (
    <div className={styles.pag2}>
      <img
        className={styles.mingcuterightFillIcon}
        alt=""
        src="/mingcuterightfill.svg"
      />
      <GroupMenuLogo />
      <FrameComponent />
      <div className={styles.leftFill}>
        <img
          className={styles.mingcuteleftFillIcon}
          alt=""
          src="/mingcuteleftfill.svg"
        />
        <img
          className={styles.mingcuteleftFillIcon1}
          loading="lazy"
          alt=""
          src="/mingcuteleftfill.svg"
          onClick={onMingcuteleftFillIconClick}
        />
      </div>
      <img
        className={styles.mingcuterightFillIcon1}
        loading="lazy"
        alt=""
        src="/mingcuterightfill.svg"
      />
      <section className={styles.podcastPreview}>
        <div className={styles.podcastOne}>
          <img
            className={styles.image14Icon}
            loading="lazy"
            alt=""
            src="/image-14@2x.png"
          />
        </div>
        <div className={styles.podcastTwo}>
          <div className={styles.podcastTwoChild} />
          <div className={styles.podcastImageTwo}>
            <img
              className={styles.image16Icon}
              loading="lazy"
              alt=""
              src="/image-16@2x.png"
            />
          </div>
          <div className={styles.podcastThree}>
            <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
            <div className={styles.podcastDescription}>
              <Descrip
                descripHeight="unset"
                descripMinWidth="unset"
                descrip1MarginTop="-182px"
                descrip2AlignSelf="unset"
                descrip2MarginLeft="-9px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pag;
