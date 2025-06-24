import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

interface IProps {
  className?: string;
}

const SearchBar = ({ className }: IProps) => {
  return (
    <label className={cn(styles.label, className)}>
      <input type="search" className={styles.search} placeholder="Поиск товаров..." />
      <button className={styles.btn_search}>Найти</button>
    </label>
);
};

export default SearchBar;