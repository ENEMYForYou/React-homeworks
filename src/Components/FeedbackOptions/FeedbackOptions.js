import React from 'react';
import propTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({options, onChangeFeedback}) {
    return (
        <div>
            {options.map((option, index) => (
                <button
                    type="button"
                    key={index}
                    className={styles[option]}
                    onClick = {() => onChangeFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
}

export default FeedbackOptions;