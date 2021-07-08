/* eslint-disable no-unused-vars */
import { Link } from "gatsby";
import React from "react";
import logo from "../assets/logo.png";

import * as styles from "./header.module.css";

window.onscroll = function () {
  if (window.innerWidth < 620) {
    scrollFunction();
  }
};

function scrollFunction() {
  if (window.scrollY > 50 || window.scrollY > 50) {
    document.getElementById("logo").style.display = "none";
    document.getElementById("menuhead").style.borderRadius = "0 0 0 0 ";
  } else {
    document.getElementById("logo").style.display = "inline";
    document.getElementById("menuhead").style.borderRadius =
      "50% 50% 50% 50% / 0% 0% 100% 100% ";
  }
}

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <header>
    <input id="box1" type="checkbox" />
    <div className={styles.logo} id="menuhead">
      <img src={logo} id="logo" />
    </div>
    <nav>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a>Nos Prestations</a>
          <ul data-drop>
            <li>
              <a href="#">Subitem 1</a>
            </li>
            <li>
              <a href="#">Subitem 2</a>
            </li>
            <li>
              <a href="#">Subitem 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">E-Shop</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
