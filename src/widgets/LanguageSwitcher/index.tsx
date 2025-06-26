"use client";

import React, { useContext } from 'react';
import LanguageContext from '@/src/shared/constants/LanguageContext';
import styles from './style.module.scss';

import PlanetIcon from '@/public/image/planet.svg';

export default function LanguageSwitcher() {
  const { currentLang, setCurrentLang } = useContext(LanguageContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLang = event.target.value;
    setCurrentLang(newLang);
  };

  return (
    <div className={styles['language-switcher']}>
      <PlanetIcon className="planet-icon" />
      <input
        type="radio"
        id="ru"
        name="language"
        value="ru"
        checked={currentLang === 'ru'}
        onChange={handleChange}
      />
      <label className={`${styles['planet-icon']} ${styles.label}`} htmlFor="ru">RU</label>
      <span className={styles['vertical-line']}></span>
      <input
        type="radio"
        id="en"
        name="language"
        value="en"
        checked={currentLang === 'en'}
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor="en">EN</label>
    </div>
  );
}
