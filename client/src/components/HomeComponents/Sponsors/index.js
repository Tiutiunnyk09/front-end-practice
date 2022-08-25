import React from 'react';
import CONSTANTS from '../../../constants';
import data from './Sponsors.json';
import styles from '../Advertisement/Advertisement.module.sass';

const Sponsors = () => {
  return (
    <div className={styles.adv}>
      {data.map(({ id, img_inactive, img_active, alt }) => (
        <div className={styles.images} key={id}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}${img_inactive}`}
            alt="forbes"
          />
          <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${img_active}`} alt={alt} />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
