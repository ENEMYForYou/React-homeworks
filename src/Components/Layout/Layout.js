import React from "react";
// import propTypes from "prop-types";
import styles from "./Layout.module.css";
import withTheme from "../../hoc/withTheme";

function Layout({ children, theme }) {
  const { themeConfig, type } = theme;

  return (
    <div
      style={{
        color: themeConfig[type].fontColor,
        background: themeConfig[type].bodyBg,
      }}
      className={styles.layoutCnt}
    >
      {children}
    </div>
  );
}

// Layout.propTypes = {
//   children: propTypes.element.isRequired,
// };

export default withTheme(Layout);
