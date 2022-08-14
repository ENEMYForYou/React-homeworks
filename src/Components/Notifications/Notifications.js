import React from 'react';
import propTypes from 'prop-types';

export default function Notification ({message}) {
    return (
    <div>
        <p>{message}</p>
    </div>
    )
};
    
Notification.propTypes = {
    message: propTypes.string.isRequired,
}