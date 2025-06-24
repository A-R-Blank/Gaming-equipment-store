import React from 'react';
import styles from './style.module.scss';

import { ICardProps } from './types';

const Card = ({ Icon, href, width = 24, height = 24 }: ICardProps) => {
  return (
    <a href={href} className={styles["cards__item"]}>
      <Icon width={width} height={height} className={styles["cards__svg"]}/>
    </a>
  );
};

export default Card;