import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import * as styles from "./header.module.css";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <input id="box1" type="checkbox" />
      <div class="logo" id="menuhead">
        <img src="https://via.placeholder.com/100x100" id="logo" />
        <h1>Koalità</h1>
      </div>
      <nav>
        <ul>
          <a href="#">
            <li>
              <img src="https://via.placeholder.com/50x50" />
            </li>
          </a>
          <a href="#">
            <li>Accueil</li>
          </a>
          <a href="#">
            <li>Graphisme</li>
          </a>
          <a href="#">
            <li>Web</li>
          </a>
          <a href="#">
            <li>Formation</li>
          </a>
          <a href="#">
            <li>Conseil</li>
          </a>
          <a href="#" class="current">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
