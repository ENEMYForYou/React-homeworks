import React from "react";
import styles from "./Filter.module.css";
import propTypes from "prop-types";
import withHigherOrderComponent from "../../hoc/withHigherOrderComponent";

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired,
};

export default withHigherOrderComponent(Filter);
