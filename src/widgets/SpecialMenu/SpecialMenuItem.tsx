// src/widgets/SpecialMenuItem/index.tsx

"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './style.module.scss';

import { ISpecialMenuItemProps } from './types';

const SpecialMenuItem = ({ Icon, title, submenuItems }: ISpecialMenuItemProps) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  // Реф для контейнера меню с корректным типом
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Функция переключения подменю
  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  // Функция закрытия подменю при клике вне компонента
  const closeSubmenu = () => {
    setShowSubmenu(false);
  };

  // Прослушивание кликов на документе
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const element = containerRef.current;
      if (element && !element.contains(event.target as Node)) {
        closeSubmenu(); // Закрываем подменю
      }
    };

    // Регистрация обработчика кликов
    document.addEventListener('click', handleClickOutside);

    // Отмена регистрации обработчика при уничтожении компонента
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.menuItemWrapper}>
      <button
        className={`${styles.menuItem} ${showSubmenu ? styles.active : ''}`}
        onClick={toggleSubmenu}
      >
        <Icon className={styles.iconFill} />
        {title}
      </button>
      {showSubmenu && submenuItems && (
        <ul className={styles.submenu}>
          <li className={styles.productTitle}>{submenuItems.categoryTitle}</li>
          {submenuItems.items.map((subItem, idx) => (
            <li key={idx}>
              <a href={subItem.href} className={styles.submenuLink}>
                {subItem.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SpecialMenuItem;