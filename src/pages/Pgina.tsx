import { FunctionComponent, useCallback } from "react";
import { Box } from "@mui/material";
import GroupMenuLogo from "../components/GroupMenuLogo";
import FrameComponent from "../components/FrameComponent";
import Descrip from "../components/Descrip";
import { useNavigate } from "react-router-dom";
import styles from "./Pgina.module.css";

const Pgina: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMingcuterightFillIconClick = useCallback(() => {
    navigate("/pag2");
  }, [navigate]);

  return (
    <div className={styles.pgina}>
      <GroupMenuLogo />
      <FrameComponent />
      <section className={styles.podcastCarousel}>
        <div className={styles.carouselContent}>
          <div className={styles.carouselContentChild} />
          <img
            className={styles.mingcuteleftFillIcon}
            loading="lazy"
            alt=""
            src="/mingcuteleftfill.svg"
          />
          <div className={styles.carouselLeftContainer}>
            <div className={styles.carouselLeftInner}>
              <div className={styles.carouselLeftIconContainer}>
                <img
                  className={styles.iconParkSolidleftC}
                  loading="lazy"
                  alt=""
                  src="/iconparksolidleftc@2x.png"
                />
              </div>
              <img
                className={styles.iconParkSolidrightC}
                loading="lazy"
                alt=""
                src="/iconparksolidrightc@2x.png"
              />
            </div>
          </div>
          <div className={styles.carouselRightContainer}>
            <div className={styles.carouselRightInner}>
              <img
                className={styles.image16Icon}
                loading="lazy"
                alt=""
                src="/image-161@2x.png"
              />
              <div className={styles.image15Wrapper}>
                <img
                  className={styles.image15Icon}
                  loading="lazy"
                  alt=""
                  src="/image-15@2x.png"
                />
              </div>
            </div>
            <div className={styles.podcastDescription}>
              <div className={styles.podcastDescriptionContent}>
                <Descrip />
                <div className={styles.carouselRight}>
                  <img
                    className={styles.mingcuterightFillIcon}
                    loading="lazy"
                    alt=""
                    src="/mingcuterightfill.svg"
                    onClick={onMingcuterightFillIconClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.image13Icon}
            loading="lazy"
            alt=""
            src="/image-13@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default Pgina;
