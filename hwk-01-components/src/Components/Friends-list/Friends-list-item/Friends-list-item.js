import React from "react";
import propTypes from "prop-types";
import styles from "./friends-list-item.module.css";

function FriendsListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      {isOnline === true ? (
        <span className={`${styles.statusTrue} ${styles.status}`}></span>
      ) : (
        <span className={`${styles.statusFalse} ${styles.status}`}></span>
      )}
      <img src={avatar} alt="Friend avatar" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

export default FriendsListItem;
