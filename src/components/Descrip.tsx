import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Box } from "@mui/material";
import styles from "./Descrip.module.css";

export type DescripType = {
  className?: string;

  /** Style props */
  descripHeight?: CSSProperties["height"];
  descripMinWidth?: CSSProperties["minWidth"];
  descrip1MarginTop?: CSSProperties["marginTop"];
  descrip2AlignSelf?: CSSProperties["alignSelf"];
  descrip2MarginLeft?: CSSProperties["marginLeft"];
};

const Descrip: FunctionComponent<DescripType> = ({
  className = "",
  descripHeight,
  descripMinWidth,
  descrip1MarginTop,
  descrip2AlignSelf,
  descrip2MarginLeft,
}) => {
  const descripStyle: CSSProperties = useMemo(() => {
    return {
      height: descripHeight,
      minWidth: descripMinWidth,
    };
  }, [descripHeight, descripMinWidth]);

  const descrip1Style: CSSProperties = useMemo(() => {
    return {
      marginTop: descrip1MarginTop,
    };
  }, [descrip1MarginTop]);

  const descrip2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: descrip2AlignSelf,
      marginLeft: descrip2MarginLeft,
    };
  }, [descrip2AlignSelf, descrip2MarginLeft]);

  const onVectorIconClick = useCallback(() => {
    window.open(
      "https://open.spotify.com/show/5vrxvfOgGfl7B9QDYn5tJw?si=Vj6bfcfjT0CcDkhjlTjW0Q&nd=1&dlsi=09b4a828763a4936"
    );
  }, []);

  return (
    <div className={[styles.descrip, className].join(" ")} style={descripStyle}>
      <div className={styles.descrip1} style={descrip1Style}>
        <div className={styles.descrip1Child} />
        <div className={styles.elOtroLadoContainer}>
          <p className={styles.elOtroLadoDelCerebro}>
            <span>
              <b>EL OTRO LADO DEL CEREBRO</b>
            </span>
          </p>
          <p className={styles.elOtroLadoDelCerebro}>
            <span>
              <span>Neurotransmitiendo - 2024</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.elOtroLadoDelCerebro}>
            <span>
              <span>{`​It is a podcast that features the participation of different specialists in psychology and neuroscience, whose objective is to explore the depths of the human mind. `}</span>
            </span>
          </p>
        </div>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
            onClick={onVectorIconClick}
          />
        </div>
      </div>
      <div className={styles.descrip1} style={descrip2Style}>
        <div className={styles.descrip1Child} />
        <div className={styles.miLtimaNeuronaContainer}>
          <p className={styles.elOtroLadoDelCerebro}>
            <span>
              <b>MI ÚLTIMA NEURONA</b>
            </span>
          </p>
          <p className={styles.elOtroLadoDelCerebro}>
            <span>
              <span>Jessica Chomik-Morales - 2022</span>
            </span>
          </p>
          <p className={styles.blankLine}>
            <span>
              <span>&nbsp;</span>
            </span>
          </p>
          <p className={styles.elOtroLadoDelCerebro}>
            <span>
              <span>
                ​It is a podcast whose objective is to provide information about
                neuroscience for free, at the same time it seeks to inspire a
                new generation of Hispanic scientists.
              </span>
            </span>
          </p>
        </div>
        <div className={styles.descrip2Inner}>
          <div className={styles.frameParent}>
            <div className={styles.vectorContainer}>
              <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
            </div>
            <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descrip;
