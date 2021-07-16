import React from 'react';
import PortableText from '../portableText';
import { Link } from 'gatsby';

import * as styles from './logoPage.module.css';

function LogoPage(data) {
  console.log(data.props);
  return (
    <React.Fragment>
      <div
        className={`p-8 grid grid-cols-1 grid-rows-1 sm:grid-cols-12 sm:grid-rows-1 text-center`}
      >
        <div className="flex flex-col align-center justify-center sm:col-start-1 sm:col-end-10">
          <h1 className={`${styles.brit} text-4xl justify-center align-center`}>
            {data.props.title}
          </h1>
          <div className="flex gap-2 w-24 sm:gap-5 sm:w-80 sm:pl-24">
            {data.props.images.map((item, i) => (
              <img
                className={`pt-8 pb-8 sm:pt-6`}
                key={i}
                src={item.asset.url}
                alt="sd"
              />
            ))}
          </div>
        </div>
        <div
          className={`${styles.text} ${styles.brit} flex align-center justify-center sm:row-span-2 sm:col-start-2 sm:col-end-9`}
        >
          <PortableText blocks={data.props._rawDescription} />
        </div>
        <a className="hidden sm:block sm:row-span-2 sm:col-start-2 sm:col-end-9 sm:pt-6">
          Cliquez ici pour voir la carte graphique Koalità{' '}
        </a>
        <div className="pl-16 pt-12 pb-16 sm:pb-0 sm:pt-0">
          <div
            className={`${styles.bg} flex flex-col align-center justify-center sm:row-span-1 sm:col-start-11 sm:col-end-12`}
          >
            <div>
              <Link to="/contact">
                <button> Contactez-nous </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LogoPage;
