import React from "react";
import styles from "./Button.module.css";

export default function Button({ onFetchImages }) {
  return (
    <button type="button" className={styles.Button} onClick={onFetchImages}>
      Load more
    </button>
  );
}
