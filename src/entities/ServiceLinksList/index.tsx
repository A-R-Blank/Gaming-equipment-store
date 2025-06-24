"use client";

import React, { useContext } from 'react';
import cn from 'classnames';
import { IServiceLink } from '@/src/shared/interfaces';
import styles from './style.module.scss';
import Link from "next/link";
import LanguageContext from '@/src/shared/constants/LanguageContext';

import { SERVICE_LINKS_RU } from '@/src/shared/constants/translations/common.ru';
import { SERVICE_LINKS_EN } from '@/src/shared/constants/translations/common.en';

const ServiceLinksList = () => {
  const { currentLang } = useContext(LanguageContext);

  let menuItems: IServiceLink[];

  if (currentLang === 'ru') {
    menuItems = SERVICE_LINKS_RU;
  } else {
    menuItems = SERVICE_LINKS_EN;
  }

  return (
    <nav className={cn(styles.nav)}>
      <ul className={styles.list}>
        {menuItems.map((link, index) => (
          <li key={index} className={styles.item}>
            {link.onClick ? (
              <button
                className={styles.link}
                onClick={link.onClick}
              >
                {link.label}
              </button>
            ) : (
              <Link
                href={link.link || '#'}
                className={styles.link}
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ServiceLinksList;