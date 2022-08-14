import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import propTypes from 'prop-types';

export default function ContactList ({contacts, onRemoveContact}) {
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
    )
};
    
ContactList.propTypes = {
    contact: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.string.isRequired
    })),
    onRemoveContact: propTypes.func.isRequired,
}