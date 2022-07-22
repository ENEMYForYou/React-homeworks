import React from "react";
import styles from "./GalleryListItem.module.css";
import propTypes from 'prop-types';

export default function GalleryListItem({ url, onOpenImage }) {
  return (
    <li className={styles.GalleryListItem}>
      {/* eslint-disable-next-line */}
      <img
        src={url}
        alt="Image from API"
        className={styles.GalleryListItem_Image}
        onClick={onOpenImage}
      />
    </li>
  );
}

GalleryListItem.propTypes = {
  url: propTypes.string.isRequired,
  onOpenImage: propTypes.func.isRequired
};

