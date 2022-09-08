import React from "react";
import propTypes from "prop-types";

import withTheme from "../../hoc/withTheme";
import ContactListItem from "../ContactListItem/ContactListItem";

function ContactList({ contacts, onRemoveContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onRemoveContact={() => onRemoveContact(id)}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contact: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onRemoveContact: propTypes.func.isRequired,
};

export default withTheme(ContactList);
