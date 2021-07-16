/* eslint-disable react/jsx-key */
import React from 'react';
import PortableText from '../portableText';

import * as styles from './formation.module.css';

function formPage(data) {
  const alldata = data.props;
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 grid-rows-1 h-auto text-center sm:grid-cols-12">
        <div className="pt-16 pb-8 sm:col-start-1 sm:col-end-10 justify-items-center">
          <div
            className="sm:hidden"
            id="bg"
            style={{
              backgroundColor: '#1BBC9B',
              width: '450px',
              height: '450px',
              borderRadius: '50%',
              position: 'absolute',
              zIndex: -1,
              top: '11rem',
              left: '-2.5rem',
            }}
          />
          {alldata.etapes.map(item => (
            <div className="text-center sm:flex sm:flex-row-reverse">
              <div className="sm:flex sm:flex-col">
                <h1 className={` ${styles.title} text-4xl pb-8`}>{item.title}</h1>
                <div clasName={`${styles.texted}`}>
                  <PortableText blocks={item._rawDesc} />
                </div>
              </div>
              <img
                className="p-8 sm:col-start-2"
                src={item.image.asset.url}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center pb-24 sm:col-start-10 sm:col-end-12">
          <div
            className=""
            style={{
              backgroundColor: '#1BBC9B',
              width: '209px',
              height: '209px',
              borderRadius: '50%',
            }}
          >
            <div className="flex items-center justify-center">
              <button> Contactez-nous </button>
            </div>
          </div>
          <h1 className="text-2xl pt-16"> Nous partenaires </h1>
          <div className="pt-8 pb-16 flex justify-around">
            {alldata.partenaires.map(item => (
              <div
                className="flex item-center align-center justify-around"
                style={{
                  backgroundColor: '#1BBC9B',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                }}
              >
                <p className="text-xl pt-10 text-white"> {item.nom} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
}

export default formPage;
