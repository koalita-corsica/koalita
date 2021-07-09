/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
import React from "react";
import Layout from "../containers/layout";
import { graphql } from "gatsby";
import $ from "jquery";
import { Link } from "gatsby";

import * as styles from "./index.module.css";

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

const IndexPage = (props) => {
  const { data } = props;
  const travails = data.allSanityTravails;

  if (window.innerWidth > 620) {
    $(window).on("scroll", function () {
      $("#container").css("left", -$(window).scrollTop());
    });
  }

  console.log(window.innerWidth);

  return (
    <Layout>
      <div className={styles.container} id="container">
        {travails.edges.map((item) => (
          <div className={styles.item}>
            <Link to={"/realisations/" + `${item.node.slug.current}`}>
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
