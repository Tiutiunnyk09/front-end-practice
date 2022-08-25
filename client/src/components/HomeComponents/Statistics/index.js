import React from 'react';
import data from './Statistics.json';
import styles from '../Advertisement/Advertisement.module.sass';

const Statistics = () => {
  return (
    <div className={styles.stats}>
      {data.map(({ id, number, text }) => (
        <div key={id}>
          <p>{number}</p>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
