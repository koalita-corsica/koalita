/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Layout from "../containers/layout";
import { graphql } from "gatsby";
import Slider from "../components/siteweb/siteSlider";

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

  return (
    <Layout>
      <Slider count={count} setCount={setCount} />
    </Layout>
  );
};

export default SiteWeb;
