import React from "react";
import PortableText from "./portableText";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "gatsby";

import * as styles from "./logoPage.module.css";

function LogoPage(data) {
  console.log(data.props);
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className={styles.first}>
          <h1> {data.props.title} </h1>
          <div className={styles.imgs}>
            {data.props.images.map((item, i) => (
              <img
                key={i}
                src={item.asset.url}
                alt="sd"
                width="100"
                height="100"
              />
            ))}
          </div>
          <div className={styles.desc}>
            <PortableText blocks={data.props._rawDescription} />
          </div>
          <div className={styles.last}>
            <a> Cliquez ici pour voir la carte graphique Koalità </a>
          </div>
        </div>
        <div className={styles.second}>
          <Link to="/contact">
            <button> Contactez-nous </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LogoPage;
