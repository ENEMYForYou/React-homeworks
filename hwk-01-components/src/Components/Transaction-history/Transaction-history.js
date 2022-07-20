import React from 'react';
import propTypes from 'prop-types';
import styles from './transaction-history.module.css';

function TransactionHistory({items}) {
    return(
        <table className={styles.container}>
            <thead className={styles.header}>
                <tr className={styles.namesRow}>
                    <th className={styles.name}>Type</th>
                    <th className={styles.name}>Amount</th>
                    <th className={styles.name}>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.body}>
                {items.map(item => (
                    <tr key={item.id} className={styles.items}>
                        <td className={styles.item}>{item.type}</td>
                        <td className={styles.item}>{item.amount}</td>
                        <td className={styles.item}>{item.currency}</td>
                    </tr>  
                ))}
            </tbody>

        </table>

    )
}

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(propTypes.object).isRequired
}

export default TransactionHistory;