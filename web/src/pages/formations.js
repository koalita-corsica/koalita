/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../containers/layout";
import { graphql } from "gatsby";
import FormPage from "../components/formations/formPage";

export const query = graphql`
  query FormQuery {
    sanityPrestations(slug: { current: { eq: "formations" } }) {
      pageBuilder {
        ... on SanityFormations {
          _key
          _type
          title
          partenaires {
            nom
          }
          etapes {
            _key
            _type
            title
            _rawDesc
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

const Formations = (props) => {
  const { data } = props;
  const presta = data.sanityPrestations;
  return (
    <Layout>
      <FormPage props={presta.pageBuilder[0]} />
    </Layout>
  );
};

export default Formations;
