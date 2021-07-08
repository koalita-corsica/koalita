/* eslint-disable react/jsx-key */
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "gatsby";

import * as styles from "./supCom.module.css";

function LogoPage(data) {

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.box}>
          {data.props.image.map((item, i) => (
            <div id={"item" + `${i}`} style={{ order: i + 1 }}>
              <li id="item" key={i}>
                <img
                  src={item.image.asset.url}
                  alt="sd"
                  width="200"
                  height="200"
                />
              </li>
            </div>
          ))}
        </div>
        <div className={styles.selected} />
      </div>
    </React.Fragment>
  );
}

export default LogoPage;
