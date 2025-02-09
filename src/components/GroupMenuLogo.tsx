import { FunctionComponent } from "react";
import { Box } from "@mui/material";
import styles from "./GroupMenuLogo.module.css";

export type GroupMenuLogoType = {
  className?: string;
};

const GroupMenuLogo: FunctionComponent<GroupMenuLogoType> = ({
  className = "",
}) => {
  return (
    <header className={[styles.groupMenuLogo, className].join(" ")}>
      <div className={styles.groupMenuLogoChild} />
      <img
        className={styles.logoNtxLatamBlueTransparenIcon}
        loading="lazy"
        alt=""
        src="/logontxlatamblue-transparent-1@2x.png"
      />
      <div className={styles.logoContainerWrapper}>
        <div className={styles.logoContainer}>
          <div className={styles.logoPadding}>
            <div className={styles.logoBackground} />
          </div>
          <div className={styles.navigation}>
            <a className={styles.home}>Home</a>
            <a className={styles.projects}>Projects</a>
            <a className={styles.events}>Events</a>
            <div className={styles.podcastButton}>
              <a className={styles.podcast}>Podcast</a>
            </div>
            <a className={styles.ourTeam}>Our Team</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GroupMenuLogo;
