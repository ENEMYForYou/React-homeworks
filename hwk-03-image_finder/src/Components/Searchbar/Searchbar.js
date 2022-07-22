import React, { Component } from "react";
import styles from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = { inputValue: "" };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div className={styles.Searchbar}>
        <form className={styles.Searchform} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.Searchform__button}>
            <span className={styles.Searchform__button_label}>Search</span>
          </button>

          <input
            type="text"
            placeholder="Enter the keywords to search"
            className={styles.Searchform__input}
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
        </form>
      </div>
    );
  }
}
