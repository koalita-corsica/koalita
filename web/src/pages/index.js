/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React from 'react';
import Layout from '../containers/layout';
import { graphql } from 'gatsby';
import $ from 'jquery';
import { Link } from 'gatsby';

import * as styles from './index.module.css';

export const query = graphql`
  query MyQuery {
    allSanityTravails {
      edges {
        node {
          title
          slug {
            current
          }
          client {
            name
          }
          image {
            asset {
              url
            }
          }
          _rawDesc
          genre
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data } = props;
  const travails = data.allSanityTravails;

  if (window.innerWidth > 620) {
    $(window).on('scroll', function () {
      $('#container').css('left', -$(window).scrollTop());
    });
  }

  function assign() {
    var total = travails.edges.length;
    for (var i = 0; i < total; i++) {
      if (travails.edges[i].node.genre == 'rectangle') {
        document.getElementById('item' + i).style.gridColumn = 'span 2';
        document.getElementById('item' + i).style.gridRow = 'span 1';
      } else if (travails.edges[i].node.genre == 'carree') {
        document.getElementById('item' + i).style.gridColumn = 'span 1';
        document.getElementById('item' + i).style.gridRow = 'span 1';
      } else if (travails.edges[i].node.genre == 'vertical') {
        document.getElementById('item' + i).style.gridColumn = 'span 1';
        document.getElementById('item' + i).style.gridRow = 'span 2';
      }
    }
  }

  return (
    <Layout>
      <div className={styles.container} id="container" onLoad={assign}>
        {travails.edges.map((item, i) => (
          <div className={styles.item} id={'item' + `${i}`}>
            <Link to={'/realisations/' + `${item.node.slug.current}`}>
              <img
                src={item.node.image.asset.url}
                alt=""
                width="200"
                height="200"
              />
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
