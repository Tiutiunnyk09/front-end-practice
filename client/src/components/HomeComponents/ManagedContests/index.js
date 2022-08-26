import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../../constants';
import data from './ManagedContests.json';
import styles from './ManagedContests.module.scss';

const ManagedContests = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>managed contests</h1>
        <h2 className={styles.sub_heading}>
          <span>a naming agency experience</span> (minus the Agency-level price
          tag)
        </h2>
        <p className={styles.text}>
          Our hybrid-solution partners you with a trained Squadhelp branding
          consultant who will guide your crowdsourcing process step-by-step to
          get the best results possible.
        </p>
        <div className={styles.cards}>
          {data.map(({ id, img, alt, heading, text }) => (
            <div className={styles.card_box} key={id}>
              <div className={styles.card}>
                <div className={styles.card_heading_box}>
                  <img
                    className={styles.card_heading_img}
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`}
                    alt={alt}
                  />
                  <h3 className={styles.card_heading_text}>{heading}</h3>
                </div>
                <p className={styles.card_text}>{text}</p>
              </div>
            </div>
          ))}
        </div>
        <Link className={styles.button_link} to="/dashboard">
          learn more about managed contests
        </Link>
      </div>
    </section>
  );
};

export default ManagedContests;
