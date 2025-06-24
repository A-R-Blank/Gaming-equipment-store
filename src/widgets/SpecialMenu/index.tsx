'use client'

import React from 'react';
import styles from './style.module.scss';
import { useContext } from 'react';
import LanguageContext from '@/src/shared/constants/LanguageContext';

import { SPECIAL_MENU_ITEMS as RU_SPECIAL_MENU_ITEMS } from '@/src/shared/constants/translations/common.ru';
import { SPECIAL_MENU_ITEMS as EN_SPECIAL_MENU_ITEMS } from '@/src/shared/constants/translations/common.en';

import IconSales from '@/public/image/iconSales.svg';
import IconHotOffers from '@/public/image/iconHotOffers.svg';
import IconGiftSets from '@/public/image/iconGift.svg';
import IconEvents from '@/public/image/iconEvents.svg';
import IconBrands from '@/public/image/iconBrands.svg';

import SpecialMenuItem from './SpecialMenuItem';

const SpecialMenu = () => {
  const { currentLang } = useContext(LanguageContext);
  const menuItems = currentLang === 'en' ? EN_SPECIAL_MENU_ITEMS : RU_SPECIAL_MENU_ITEMS;

  return (
    <div className={styles.specialMenu}>
      {menuItems.map(item => (
        <SpecialMenuItem
          key={item.id}
          Icon={
            item.id === 'sales'
              ? IconSales
              : item.id === 'hotOffers'
                ? IconHotOffers
                : item.id === 'giftSets'
                  ? IconGiftSets
                  : item.id === 'events'
                    ? IconEvents
                    : IconBrands
          }
          title={item.title}
          submenuItems={item.items.length > 0 ? item : undefined}
        />
      ))}
    </div>
  );
};

export default SpecialMenu;