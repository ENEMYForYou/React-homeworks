import React from "react";
import styles from "./Layout.module.css";
import propTypes from "prop-types";

import Header from "../Header/Header";

const Layout = ({ children }) => (
  <div className={styles.layoutContainer}>
    <Header />
    {children}
  </div>
);
Layout.propTypes = {
  children: propTypes.element.isRequired,
};

export default Layout;
