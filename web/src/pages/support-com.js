/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../containers/layout";
import { graphql } from "gatsby";
import SupComPage from "../components/supComPage";

export const query = graphql`
  query ComQuery {
    sanityPrestations(slug: { current: { eq: "support-de-com" } }) {
      pageBuilder {
        ... on SanitySuppCom {
          _key
          image {
            _rawDesc
            alt
            image {
              asset {
                url
              }
            }
          }
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
      <SupComPage props={presta.pageBuilder[0]} />
    </Layout>
  );
};

export default logoPage;
