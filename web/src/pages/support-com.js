/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React from 'react';
import Layout from '../containers/layout';
import { graphql } from 'gatsby';
import SupComPage from '../components/supportCom/supComPage';

export const query = graphql`
  query ComQuery {
    sanityPrestations(slug: { current: { eq: "support-de-com" } }) {
      id
      pageBuilder {
        ... on SanitySuppCom {
          _key
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

// function moveR() {
//   var total = data.props.image.length;
//   for (var i = 0; i < total; i++) {
//     if (document.getElementById('item' + i).style.order == 1) {
//       document.getElementById('item' + i).style.order = 2;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     } else if (document.getElementById('item' + i).style.order == 2) {
//       document.getElementById('item' + i).style.order = 3;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     } else if (document.getElementById('item' + i).style.order == 3) {
//       document.getElementById('item' + i).style.order = 4;
//       document.getElementById('item' + i).style.borderRadius = '50%';
//       document.getElementById('item' + i).style.border = '30px solid #1bbc9b';
//       document.getElementById('item' + i).style.width = '300px';
//       document.getElementById('item' + i).style.height = '300px';
//       document.getElementById('item' + i).style.cursor = 'pointer';
//     } else if (document.getElementById('item' + i).style.order == 4) {
//       document.getElementById('item' + i).style.order = 5;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     } else if (document.getElementById('item' + i).style.order == 5) {
//       document.getElementById('item' + i).style.order = 6;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     } else if (document.getElementById('item' + i).style.order == total) {
//       document.getElementById('item' + i).style.order = 1;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     }
//   }
// }

// function moveL() {
//   var total = data.props.image.length;
//   for (var i = 0; i < total; i++) {
//     if (document.getElementById('item' + i).style.order == 1) {
//       document.getElementById('item' + i).style.order = 6;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     } else if (document.getElementById('item' + i).style.order == 2) {
//       document.getElementById('item' + i).style.order = 1;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     } else if (document.getElementById('item' + i).style.order == 3) {
//       document.getElementById('item' + i).style.order = 2;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     } else if (document.getElementById('item' + i).style.order == 4) {
//       document.getElementById('item' + i).style.order = 3;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     } else if (document.getElementById('item' + i).style.order == 5) {
//       document.getElementById('item' + i).style.order = 4;
//       document.getElementById('item' + i).style.borderRadius = '50%';
//       document.getElementById('item' + i).style.border = '30px solid #1bbc9b';
//       document.getElementById('item' + i).style.width = '300px';
//       document.getElementById('item' + i).style.height = '300px';
//       document.getElementById('item' + i).style.cursor = 'pointer';
//     } else if (document.getElementById('item' + i).style.order == total) {
//       document.getElementById('item' + i).style.order = 5;
//       document.getElementById('item' + i).style.borderRadius = '0';
//       document.getElementById('item' + i).style.border = '0';
//     }
//   }
// }

const logoPage = (props) => {
  return (
    <Layout>
      <h1> it works </h1>
    </Layout>
  );
};

export default logoPage;
