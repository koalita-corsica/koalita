import React from 'react';
import PortableText from '../portableText';
import { StaticQuery, graphql } from 'gatsby';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

import * as styles from './siteSlider.module.css';

function animationIn() {
  // document.querySelector("#bg").style.transform = "translate(15%, -5%)";
  // document.querySelector("#bg").style.transition = "all 330ms ease-in";
}

const SiteSlider = ({ data, count, setCount }) => (
  <React.Fragment>
    <div
      className="sm:hidden block"
      style={{
        borderRadius: '50%',
        width: '530px',
        height: '530px',
        backgroundColor: '#1BBC9B',
        position: 'absolute',
        top: '14rem',
        left: '-5rem',
        zIndex: -1,
      }}
    />
    <div
      className="hidden sm:block"
      style={{
        borderRadius: '50%',
        width: '530px',
        height: '530px',
        backgroundColor: '#1BBC9B',
        position: 'absolute',
        top: '8rem',
        left: '7rem',
        zIndex: -1,
      }}
    />
    <div
      className="grid grid-cols-1 grid-rows-1 grid-flow-row sm:grid-cols-12 sm:grid-rows-2"
      onLoad={animationIn}
    >
      <h1
        className={`${styles.britT} text-center pb-8 pt-5 sm:row-start-1 sm:col-start-1 sm:col-end-8 sm:pb-0`}
      >
        Un site en 5 étapes
      </h1>
      <h3
        className={`${styles.britT1} pl-4 sm:row-start-1 sm:col-start-2 sm:col-end-6 sm:pt-36 sm:pl-16`}
      >
        {data.sanityPrestations.pageBuilder[0].etapes[count].etape}
      </h3>
      <h5
        className={`${styles.muli} pl-4 sm:pl-0 sm:row-start-1 sm:col-start-2 sm:col-end-7 sm:pt-44 sm:pl-16`}
      >
        {data.sanityPrestations.pageBuilder[0].etapes[count].title}
      </h5>
      <div className="sm:row-start-1 sm:col-start-2 sm:col-end-12 sm:flex sm:pt-56 sm:pl-16">
        <div
          className="hidden sm:block text-6xl sm:row-start-3 sm:col-start-3 sm:col-end-12"
          id="left"
          onClick={() =>
            count == 1
              ? (document.getElementById('left').style.display = 'none')
              : (document.getElementById('right').style.display = 'block')
          }
        >
          <IoIosArrowBack onClick={() => setCount(count - 1)} />
        </div>
        <div className={`${styles.text} pl-4`} style={{ width: '20rem' }}>
          <PortableText
            blocks={
              data.sanityPrestations.pageBuilder[0].etapes[count]._rawDesc
            }
          />
        </div>
        <div
          className="hidden sm:block text-6xl sm:row-start-3 sm:col-start-2 sm:col-end-12"
          id="right"
          onClick={() =>
            count == 3
              ? (document.getElementById('right').style.display = 'none')
              : (document.getElementById('left').style.display = 'block')
          }
        >
          <IoIosArrowForward onClick={() => setCount(count + 1)} />
        </div>
      </div>
      <div className="sm:hidden">
        {count && count === 0 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3d4441',
                cursor: 'pointer',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : count == 1 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3d4441',
                cursor: 'pointer',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : count == 2 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3d4441',
                cursor: 'pointer',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : count == 3 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3d4441',
                cursor: 'pointer',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : count == 5 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3d4441',
                cursor: 'pointer',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3d4441',
                cursor: 'pointer',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#3d4441',
                cursor: 'pointer',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                cursor: 'pointer',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        )}
      </div>
      <div className="hidden sm:block sm:row-start-2 sm:col-start-3 sm:col-end-12 ">
        <button className=""> Contactez-nous </button>
      </div>
      <div className="hidden sm:block sm:row-start-2 sm:col-start-5 sm:col-end-11">
        {count && count === 0 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : count == 1 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : count == 2 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : count == 3 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : count == 5 ? (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        ) : (
          <div className="flex align-center justify-center gap-2 pt-8">
            <div
              id="b1"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
              }}
              onClick={() => setCount(0)}
            />
            <div
              id="b2"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(1)}
            />
            <div
              id="b3"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(2)}
            />
            <div
              id="b4"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(3)}
            />
            <div
              id="b5"
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#1BBC9B',
                cursor: 'pointer',
                opacity: '0.48',
              }}
              onClick={() => setCount(4)}
            />
          </div>
        )}
      </div>
      <div className="sm:row-start-1  sm:col-start-9 sm:col-end-12">
        <img
          className="pb-8 w-96"
          src={
            data.sanityPrestations.pageBuilder[0].etapes[count].image.asset.url
          }
          alt=""
        />
      </div>
    </div>
  </React.Fragment>
);

export default function MySlider(props) {
  return (
    <StaticQuery
      query={graphql`
        query Site1Query {
          sanityPrestations(slug: { current: { eq: "site-web" } }) {
            pageBuilder {
              ... on SanitySiteweb {
                _key
                _type
                etapes {
                  etape
                  image {
                    asset {
                      url
                    }
                  }
                  title
                  _rawDesc
                }
              }
            }
          }
        }
      `}
      render={data => <SiteSlider data={data} {...props} />}
    />
  );
}
