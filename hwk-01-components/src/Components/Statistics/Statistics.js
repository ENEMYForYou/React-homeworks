import React from "react";
import propTypes from "prop-types";
import styles from "./statistics.module.css";

function Statistics({title, stats}) {
    return (
        <section className={styles.container}>

            { title.length > 0 && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.list}>
                {stats.map(stat => (
                    <li key={stat.id} className={styles.item}>
                        <span className={styles.label}>{stat.label}</span>
                        <span className={styles.percentage}>{stat.percentage}</span>
                    </li>
                ))}
            </ul>
            
        </section>
    );    
}

Statistics.defaultProps = {
    title: ""
}

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.exact({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,

    })).isRequired
}

export default Statistics;
