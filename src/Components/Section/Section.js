import React from 'react';
import propTypes from 'prop-types';

function Section({title, children}) {
    return (
        <div className="Section">
            <h2>{title}</h2>
            {children}
        </div>
    );
}
Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.object.isRequired,
}

export default Section;