import { graphql } from "gatsby";
import React from "react";
import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";
import Travails from "../components/travails";

export const query = graphql`
  query TravailsTemplateQuery($id: String!) {
    post: sanityTravails(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      image {
        asset {
          url
        }
      }
      _rawDesc
      client {
        name
      }
    }
  }
`;

const TravailsTemplate = (props) => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <Travails {...post} />}
    </Layout>
  );
};

export default TravailsTemplate;
