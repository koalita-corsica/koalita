/* eslint-disable no-unused-vars */
import { Link } from 'gatsby';
import React from 'react';
import logo from '../../assets/logo1.png';

import * as styles from './header.module.css';

window.onscroll = function () {
  if (window.innerWidth < 620) {
    scrollFunction();
  }
};

function scrollFunction() {
  if (window.scrollY > 50 || window.scrollY > 50) {
    document.getElementById('logo').style.display = 'none';
    document.getElementById('menuhead').style.borderRadius = '0 0 0 0 ';
  } else {
    document.getElementById('logo').style.display = 'inline';
    document.getElementById('menuhead').style.borderRadius =
      '50% 50% 50% 50% / 0% 0% 100% 100% ';
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
          <Link to="/" activeStyle={{ color: '#32b298' }}>
            Accueil
          </Link>
        </li>
        <li>
          <a>Nos Prestations</a>
          <ul data-drop>
            <li>
              <Link activeStyle={{ color: '#32b298' }} to="/logo">
                Logo
              </Link>
            </li>
            <li>
              <Link activeStyle={{ color: '#32b298' }} to="/support-com">
                Supports de com
              </Link>
            </li>
            <li>
              <Link activeStyle={{ color: '#32b298' }} to="/site-web">
                Site Web
              </Link>
            </li>
            <li>
              <Link activeStyle={{ color: '#32b298' }} to="/formations">
                Formations
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link activeStyle={{ color: '#32b298' }} to="/">
            E-Shop
          </Link>
        </li>
        <li>
          <Link activeStyle={{ color: '#32b298' }} to="/">
            Blog
          </Link>
        </li>
        <li>
          <Link activeStyle={{ color: '#32b298' }} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
