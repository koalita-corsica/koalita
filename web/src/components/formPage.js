/* eslint-disable react/jsx-key */
import React from "react";
import PortableText from "./portableText";
import { Link } from "gatsby";

import * as styles from "./formPage.module.css";

function formPage(data) {
  const alldata = data.props;
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.images}>
          <img src={alldata.etapes[0].image.asset.url} alt="" />
        </div>
        <div className={styles.desc}>
          <h1> {alldata.etapes[0].title} </h1>
          <PortableText blocks={alldata.etapes[0]._rawDesc} />
        </div>
        <div className={styles.images}>
          <img src={alldata.etapes[1].image.asset.url} alt="" />
        </div>
        <div className={styles.desc}>
          <h1> {alldata.etapes[1].title} </h1>
          <PortableText blocks={alldata.etapes[1]._rawDesc} />
        </div>
        <div className={styles.contact}>
          <button> Contactez-nous </button>
        </div>
        <div className={styles.part}>
          <h3> Nos Partenaires </h3>
          <div className={styles.wrap}>
            <div className={styles.bgPart}>
              <p> {alldata.partenaires[0].nom} </p>
            </div>
            <div className={styles.bgPart}>
              <p> {alldata.partenaires[1].nom} </p>
            </div>
            <div className={styles.bgPart}>
              <p> {alldata.partenaires[2].nom} </p>
            </div>
          </div>
        </div>
      </div>
      ;
    </React.Fragment>
  );
}

export default formPage;
