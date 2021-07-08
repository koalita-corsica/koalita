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

window.onscroll = function () {
  if (window.innerWidth > 620) {
    $(window).on("scroll", function () {
      $("#container").css("left", -$(window).scrollTop());
    });
  }
};

const IndexPage = (props) => {
  const { data } = props;
  const travails = data.allSanityTravails;
  console.log(travails);
  return (
    <Layout>
      <div className={styles.container} id="container">
        {travails.edges.map((item) => (
          <Link to={"/realisations/" + `${item.node.slug.current}`}>
            <div className={`styles.item ${item.node.genre}`}>
              <img
                src={item.node.image.asset.url}
                alt=""
                width="200"
                height="200"
              />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
