import React from 'react';
import CONSTANTS from '../../../constants';
import data from './WhySquadHelp.json';

import styles from './WhySquadHelp.module.sass';

const WhySquadHelp = () => {
  return (
    <div className={styles.container__description}>
      <h2 className={styles.blueUnderline}>why squadhelp?</h2>
      <div className={styles.cardContainer}>
        {data.map(({ id, img, alt, heading, text }) => (
          <div className={styles.card} key={id}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`} alt={alt} />
            <h3>{heading}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySquadHelp;
