"use client";

import React from 'react';
import LanguageContext from '@/src/shared/constants/LanguageContext';
import styles from './style.module.scss';

const PromoBlock = () => {
  const { currentLang, translations } = React.useContext(LanguageContext);

  const promoblockData = translations[currentLang as 'ru' | 'en'];

  const { heading, paragraph, buttonText } = promoblockData;

  return (
    <div className={styles.promo_block}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.paragraph}>{paragraph}</p>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default PromoBlock;