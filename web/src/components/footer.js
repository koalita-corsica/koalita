/* eslint-disable no-unused-vars */
import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

import * as styles from "./footer.module.css";

const Footer = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <footer>
    <div className={styles.content}>
      <div className={styles.first}>
        <h3> Plan du site </h3>
        <div className={styles.contenu}>
          <div>
            <p> Accueil </p>
            <p> Graphisme</p>
          </div>
          <div>
            <p> Web </p>
            <p> Formation </p>
          </div>
          <div>
            <p> Conseil </p>
            <p> Contact </p>
          </div>
          <div>
            <p> Mentions légales </p>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <h3> Contact </h3>
        <p> Tel: 06.00.00.00 </p>
        <p> Mail: prenom@koalita.corsica </p>
      </div>
      <div className={styles.third}>
        <h3>Suivez-nous</h3>
        <div className={styles.icons}>
          <FiInstagram />
          <FaFacebookF />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
