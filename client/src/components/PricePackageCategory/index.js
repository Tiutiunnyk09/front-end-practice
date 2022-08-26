import React from 'react';
import cx from 'classnames';

import styles from '../PricePackage/PricePackage.module.scss';
import PricePackageInformationItem from '../PricePackageInformationItem';

const PricePackageCategory = ({
  category: {
    id,
    category_heading,
    category_text,
    category_price,
    informations,
    btn,
  },
}) => {
  const classNameById = { 1: styles.pink, 2: styles.gold };

  return (
    <article className={cx(styles.categories_item, classNameById[id])}>
      <div className={styles.heading_box}>
        <h2 className={styles.heading_title}>{category_heading}</h2>
        <p className={styles.heading_text}>{category_text}</p>
        <p className={styles.heading_price}>{category_price}</p>
      </div>
      <ul className={styles.information_list}>
        {informations.map((item, i) => (
          <PricePackageInformationItem item={item} key={i}/>
        ))}
      </ul>
      <button className={styles.btn_select}>{btn}</button>
    </article>
  );
};

export default PricePackageCategory;
