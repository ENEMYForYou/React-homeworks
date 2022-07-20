import React from "react";
import propTypes from "prop-types";
import styles from "./friends-list.module.css";
import FriendsListItem from './Friends-list-item/Friends-list-item';


function FriendsList({friends}) {
  return (
    <ul className={styles.container}>
      {friends.map(friend => (
        <FriendsListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.exact({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    }).isRequired
  ).isRequired
};

export default FriendsList;
