import React from 'react';
import PortableText from '../portableText';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'gatsby';

import * as styles from './travails.module.css';

function Travails(props) {
  return (
    <React.Fragment>
      <div className={`${styles.bg} sm:hidden`} id="bgR" />
      <div
        className={`hidden sm:block`}
        id="bgD"
        style={{
          width: '500px',
          height: '500px',
          backgroundColor: '#1bbc9b',
          borderRadius: '50%',
          position: 'absolute',
          zIndex: -1,
          top: '8rem',
          left: '5rem',
        }}
      />
      <div className="grid grid-cols-1 grid-rows-1 text-center sm:text-left sm:grid-cols-12 sm:grid-rows-1 sm:pb-24">
        <Link to="/" className="hidden sm:block text-4xl">
          <div>
            <AiOutlineArrowLeft />
          </div>
        </Link>
        <div className="flex flex-col gap-8 items-center align-center sm:col-start-2 sm:col-end-6 sm:pt-10">
          <div className="pt-8">
            <h1 className={styles.title}> {props.client.name} </h1>
            <p className={styles.job}> {props.title} </p>
          </div>
          <div className={styles.job}>
            <PortableText blocks={props._rawDesc} />
          </div>
          <Link to="/contact">
            <button className=""> CONTACTEZ-NOUS </button>
          </Link>
        </div>
        <div className="pt-4 flex object-fill align-center justify-center pb-24 sm:row-start-1 sm:col-start-6 sm:pt-0 sm:pb-0 sm:w-96">
          <img src={props.image.asset.url} alt="" width="293" height="195" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Travails;
