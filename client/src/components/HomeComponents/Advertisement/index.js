import React from 'react';
import Sponsors from '../Sponsors';
import Statistics from '../Statistics';
import styles from './Advertisement.module.sass';

const Advertisement = () => {
  return (
    <div className={styles.greyContainer}>
      <Sponsors />
      <Statistics />
    </div>
  );
};

export default Advertisement;
