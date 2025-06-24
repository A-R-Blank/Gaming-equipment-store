import React from 'react';
import styles from './style.module.scss';
import Card from './Card';

import FavoriteSVG from '@/public/image/favorite.svg'
import HunterSVG from '@/public/image/hunter.svg'
import AddedSVG from '@/public/image/chest.svg'

const Cards = () => {
  return (
    <ul className={styles.cards}>
      <li className={styles["cards__item"]}>
        <Card Icon={FavoriteSVG} href="/favorite" />
      </li>
      <li className={styles["cards__item"]}>
        <Card Icon={HunterSVG} href="/hunt" />
      </li>
      <li className={styles["cards__item"]}>
        <Card Icon={AddedSVG} href="/add" />
      </li>
    </ul>
  );
};

export default Cards;