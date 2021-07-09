/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Layout from "../containers/layout";
import { graphql } from "gatsby";
import Slider from "../components/siteweb/siteSlider";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import * as styles from "./site-web.module.css";

export const query = graphql`
  query SiteQuery {
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
`;

const SiteWeb = (props) => {
  const { data } = props;
  const presta = data.sanityPrestations;
  const [count, setCount] = useState(0);

  function moins() {
    if (count == 0) {
      document.getElementById("left").style.display = "none";
    } else {
      document.getElementById("right").style.display = "block";
      setCount(count - 1);
    }
  }

  function plus() {
    if (count == 5) {
      document.getElementById("right").style.display = "none";
    } else {
      document.getElementById("left").style.display = "block";
      setCount(count + 1);
    }
  }
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.slider}>
          <Slider count={count} setCount={setCount} />
        </div>
      </div>
    </Layout>
  );
};

export default SiteWeb;
