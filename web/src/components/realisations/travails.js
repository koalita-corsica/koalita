import React from "react";
import PortableText from "../portableText";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "gatsby";

import * as styles from "./travails.module.css";

function Travails(props) {
  return (
    <React.Fragment>
      <div className={styles.bg} />
      <div className={styles.wrapper}>
        <Link to="/" className={styles.arrow}>
          <div>
            <AiOutlineArrowLeft />
          </div>
        </Link>
        <div className={styles.content}>
          <div className={styles.first}>
            <h1> {props.client.name} </h1>
            <p> {props.title} </p>
          </div>
          <PortableText blocks={props._rawDesc} />
          <Link to="/contact">
            <button className={styles.btn}> CONTACTEZ-NOUS </button>
          </Link>
        </div>
        <div className={styles.imgs}>
          <img src={props.image.asset.url} alt="" width="100" height="100" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Travails;
