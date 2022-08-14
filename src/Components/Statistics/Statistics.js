import React from 'react';
import propTypes from 'prop-types';

function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: { positivePercentage }%</p>
        </div>
    )
}

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired, 
}
export default Statistics;