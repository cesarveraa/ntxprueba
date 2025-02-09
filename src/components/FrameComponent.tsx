import { FunctionComponent } from "react";
import { Typography, Box } from "@mui/material";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <header
      className={[styles.suggestedPodcastsContentWrapper, className].join(" ")}
    >
      <div className={styles.suggestedPodcastsContent}>
        <h1 className={styles.suggestedPodcasts}>SUGGESTED PODCASTS</h1>
        <div className={styles.groupTextoAzul}>
          <div className={styles.groupTextoAzulChild} />
          <div className={styles.areYouInterested}>
            Are you interested in knowing a little more or do you want to have
            more information about Neuroscience, Neurotechnology and Research?
            We leave you the following podcasts that may interest you to
            complement your knowledge and can give you some interesting data
            about neuroscience.
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
