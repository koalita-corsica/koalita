import { graphql } from 'gatsby';
import React from 'react';
import GraphQLErrorList from '../components/graphql-error-list';
import Layout from '../containers/layout';
import Container from '../components/container';
import SEO from '../components/seo';
import { toPlainText } from '../lib/helpers';
import Supcom from '../components/supportCom/supcom';

export const query = graphql`
  query SupcomTemplateQuery($id: String!) {
    post: sanityPrestations(id: { eq: $id }) {
      id
      pageBuilder {
        ... on SanitySuppCom {
          title
          image {
            asset {
              url
            }
          }
          _rawDesc
        }
      }
    }
  }
`;

const SupcomTemplate = props => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || 'Untitled'}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {/* {post && <Supcom {...post} />} */}
      <h1> it works </h1>
    </Layout>
  );
};

export default SupcomTemplate;
