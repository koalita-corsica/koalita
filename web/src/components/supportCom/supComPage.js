/* eslint-disable react/jsx-key */
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'gatsby';

import * as styles from './supCom.module.css';

function LogoPage(data) {
  function moveR() {
    var total = data.props.image.length;
    for (var i = 0; i < total; i++) {
      if (document.getElementById('item' + i).style.order == 1) {
        document.getElementById('item' + i).style.order = 2;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      } else if (document.getElementById('item' + i).style.order == 2) {
        document.getElementById('item' + i).style.order = 3;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      } else if (document.getElementById('item' + i).style.order == 3) {
        document.getElementById('item' + i).style.order = 4;
        document.getElementById('item' + i).style.borderRadius = '50%';
        document.getElementById('item' + i).style.border = '30px solid #1bbc9b';
        document.getElementById('item' + i).style.width = '300px';
        document.getElementById('item' + i).style.height = '300px';
        document.getElementById('item' + i).style.cursor = 'pointer';
      } else if (document.getElementById('item' + i).style.order == 4) {
        document.getElementById('item' + i).style.order = 5;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      } else if (document.getElementById('item' + i).style.order == 5) {
        document.getElementById('item' + i).style.order = 6;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      } else if (document.getElementById('item' + i).style.order == total) {
        document.getElementById('item' + i).style.order = 1;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      }
    }
  }

  function moveL() {
    var total = data.props.image.length;
    for (var i = 0; i < total; i++) {
      if (document.getElementById('item' + i).style.order == 1) {
        document.getElementById('item' + i).style.order = 6;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      } else if (document.getElementById('item' + i).style.order == 2) {
        document.getElementById('item' + i).style.order = 1;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      } else if (document.getElementById('item' + i).style.order == 3) {
        document.getElementById('item' + i).style.order = 2;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      } else if (document.getElementById('item' + i).style.order == 4) {
        document.getElementById('item' + i).style.order = 3;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      } else if (document.getElementById('item' + i).style.order == 5) {
        document.getElementById('item' + i).style.order = 4;
        document.getElementById('item' + i).style.borderRadius = '50%';
        document.getElementById('item' + i).style.border = '30px solid #1bbc9b';
        document.getElementById('item' + i).style.width = '300px';
        document.getElementById('item' + i).style.height = '300px';
        document.getElementById('item' + i).style.cursor = 'pointer';
      } else if (document.getElementById('item' + i).style.order == total) {
        document.getElementById('item' + i).style.order = 5;
        document.getElementById('item' + i).style.borderRadius = '0';
        document.getElementById('item' + i).style.border = '0';
      }
    }
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.left} style={{ order: '4' }} onClick={moveL}>
            <IoIosArrowBack />
          </div>
          {data.props.image.map((item, i) => (
            <div id={'item' + `${i}`} style={{ order: i + 1 }}>
              <li key={i}>
                <img
                  src={item.image.asset.url}
                  alt="sd"
                  width="200"
                  height="200"
                />
              </li>
              <h1> {item.alt} </h1>
            </div>
          ))}
          <div className={styles.right} style={{ order: '4' }} onClick={moveR}>
            <IoIosArrowForward />
          </div>
          <div className={styles.selected} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LogoPage;
