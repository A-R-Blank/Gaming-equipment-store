"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './style.module.scss';

import { ISpecialMenuItemProps } from './types';

const SpecialMenuItem = ({ Icon, title, submenuItems }: ISpecialMenuItemProps) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const closeSubmenu = () => {
    setShowSubmenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const element = containerRef.current;
      if (element && !element.contains(event.target as Node)) {
        closeSubmenu(); 
      }
    };

    document.addEventListener('click', handleClickOutside);

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
