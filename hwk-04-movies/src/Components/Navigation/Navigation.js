import React from "react";

import { NavLink } from "react-router-dom";
import routes from "../../routes";

import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.navigationMenu}>
    <ul className={styles.navigationList}>
      <li>
        <NavLink
          className="Navigation-link"
          activeClassName="Navigation-link-active"
          to={routes.home}
          exact
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="Navigation-link"
          activeClassName="Navigation-link-active"
          to={routes.movies}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
