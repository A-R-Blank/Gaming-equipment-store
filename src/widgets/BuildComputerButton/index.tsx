import React from 'react';
import styles from './styles.module.scss';

const BuildComputerButton = () => {
  return (
    <button className={styles.build_computer}>
      <span className={styles.plus}></span>
      Собрать компьютер
    </button>
  );
};

export default BuildComputerButton;