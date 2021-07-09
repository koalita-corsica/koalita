import React from "react";
import PortableText from "../portableText";
import { StaticQuery, graphql } from "gatsby";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import * as styles from "./siteSlider.module.css";

const SiteSlider = ({ data, count, setCount }) => (
  console.log(data.sanityPrestations.pageBuilder[0].etapes[count]),
  (
    <React.Fragment>
      <div>
        <div className={styles.wrapper}>
          <div className={styles.wrap}>
            <div className={styles.contenu}>
              <h1> Un site en 5 étapes </h1>
              <div className={styles.cont}>
                <p>
                  {data.sanityPrestations.pageBuilder[0].etapes[count].etape}
                </p>
                <p>
                  {data.sanityPrestations.pageBuilder[0].etapes[count].title}
                </p>
              </div>
              <div className={styles.content}>
                <div
                  className={styles.left}
                  id="left"
                  style={{ display: "none" }}
                  onClick={() =>
                    count == 1
                      ? (document.getElementById("left").style.display = "none")
                      : (document.getElementById("right").style.display =
                          "block")
                  }
                >
                  <IoIosArrowBack onClick={() => setCount(count - 1)} />
                </div>
                <div className={styles.desc}>
                  <PortableText
                    blocks={
                      data.sanityPrestations.pageBuilder[0].etapes[count]
                        ._rawDesc
                    }
                  />
                </div>
                <div
                  className={styles.right}
                  id="right"
                  onClick={() =>
                    count == 3
                      ? (document.getElementById("right").style.display =
                          "none")
                      : (document.getElementById("left").style.display =
                          "block")
                  }
                >
                  <IoIosArrowForward onClick={() => setCount(count + 1)} />
                </div>
              </div>
            </div>
            <button> Contactez-nous </button>
          </div>
          <div className={styles.image}>
            <img
              src={
                data.sanityPrestations.pageBuilder[0].etapes[count].image.asset
                  .url
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
);

export default function MySlider(props) {
  return (
    <StaticQuery
      query={graphql`
        query Site1Query {
          sanityPrestations(slug: { current: { eq: "site-web" } }) {
            pageBuilder {
              ... on SanitySiteweb {
                _key
                _type
                etapes {
                  etape
                  image {
                    asset {
                      url
                    }
                  }
                  title
                  _rawDesc
                }
              }
            }
          }
        }
      `}
      render={(data) => <SiteSlider data={data} {...props} />}
    />
  );
}
