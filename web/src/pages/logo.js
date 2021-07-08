/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../containers/layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import LogoPage from "../components/logoPage";

import * as styles from "./index.module.css";

export const query = graphql`
  query LogoPage {
    sanityPrestations(slug: { current: { eq: "logo" } }) {
      pageBuilder {
        ... on SanityLogo {
          _key
          _type
          title
          images {
            asset {
              url
            }
          }
          _rawDescription
        }
      }
    }
  }
`;

const logoPage = (props) => {
  const { data } = props;
  const presta = data.sanityPrestations;
  return (
    <Layout>
      <LogoPage props={presta.pageBuilder[0]} />
    </Layout>
  );
};

export default logoPage;
