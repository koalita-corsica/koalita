/* eslint-disable no-unused-vars */
const { isFuture } = require('date-fns');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require('date-fns');

async function createRealisationsPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityTravails(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityTravails || {}).edges || [];

  postEdges.forEach(edge => {
    const { id, slug = {} } = edge.node;
    const path = `/realisations/${slug.current}/`;

    createPage({
      path,
      component: require.resolve('./src/templates/travails-template.js'),
      context: { id },
    });
  });
}

async function createSupPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPrestations(
        filter: { slug: { current: { eq: "support-de-com" } } }
      ) {
        edges {
          node {
            id
            pageBuilder {
              ... on SanitySuppCom {
                _key
                _rawDesc
                title
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
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPrestations || {}).edges || [];

  postEdges.forEach(edge => {
    const { id } = edge.node;
    const path = `/support-com/product`;

    createPage({
      path,
      component: require.resolve('./src/templates/supcom-template.js'),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createRealisationsPages(graphql, actions);
  await createSupPages(graphql, actions);
};
