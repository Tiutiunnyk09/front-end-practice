import React from 'react';
import data from './PricePackage.json';

import styles from './PricePackage.module.scss';
import PricePackageCategory from '../PricePackageCategory';

const PricePackage = () => {
  const { heading, categories } = data;

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>{heading}</h1>
        <div className={styles.categories}>
          {categories.map((category) => (
            <PricePackageCategory category={category} key={category.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricePackage;
