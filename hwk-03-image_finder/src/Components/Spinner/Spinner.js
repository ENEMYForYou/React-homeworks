import React from "react";
import { LineWave } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.Spinner}>
      <LineWave
        color="blue"
        height={110}
        width={110}
        ariaLabel="three-circles-rotating"
      />
    </div>
  );
}
