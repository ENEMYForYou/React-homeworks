import React from "react";
import propTypes from 'prop-types';
import styles from "./GalleryList.module.css";
import GalleryListItem from "../GalleryListItem";

export default function GalleryList({ images, openImage}) {
  return (
    <ul className={styles.GalleryList}>
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <GalleryListItem
          key={id}
          url={webformatURL}
          onOpenImage={() => openImage(largeImageURL)}
        />
      ))}
    </ul>
  );
}

GalleryList.propTypes = {
  images: propTypes.arrayOf(propTypes.object.isRequired),
  openImage: propTypes.func.isRequired
};