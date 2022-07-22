import React, { Component } from "react";
import styles from "./Modal.module.css";
import propTypes from 'prop-types';

export default class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keyup", this.closeImageByClickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener("keyup", this.closeImageByClickEsc);
  }
  closeImageByClickEsc = (e) => {
    e.keyCode === 27 && this.props.onCloseLargeImage();
  };
    closeImageByClickOnOverlay = e => {
    e.target === e.currentTarget && this.props.onCloseLargeImage();
  };

  render() {
    const { children } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.closeImageByClickOnOverlay}>
        <div className={styles.Modal}>{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  onCloseLargeImage: propTypes.func.isRequired
};
