"use client";

import React, { useState, useRef, useContext, useEffect } from 'react';
import cn from 'classnames';
import { IBurgerMenuItem } from '@/src/shared/interfaces';
import styles from './styles.module.scss';
import BurgerBtn from "@/public/image/btn-menu.svg";
import LanguageContext from '@/src/shared/constants/LanguageContext';


import { BURGER_MENU_ITEMS_RU } from '@/src/shared/constants/translations/common.ru';
import { BURGER_MENU_ITEMS_EN } from '@/src/shared/constants/translations/common.en';

interface IOpenItems {
  [index: string]: boolean; 
}

const BurgerMenu = () => {
  const { currentLang } = useContext(LanguageContext);

  const [openItems, setOpenItems] = useState<IOpenItems>({});

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement | null>(null); 

  const menuItems: IBurgerMenuItem[] = currentLang === 'ru' ? BURGER_MENU_ITEMS_RU : BURGER_MENU_ITEMS_EN;

  const toggleSubmenu = (index: number) => {
      const closedMenus: IOpenItems = Object.keys(openItems).reduce(
      (result, key) => {
        result[key] = false;
        return result;
      },
      {} as IOpenItems
    );

    closedMenus[index.toString()] = true;

    setOpenItems(closedMenus);
  };


  const closeMenu = () => {
    setOpenItems({}); 
    setIsMenuOpen(false); 
  };

  const openMenu = () => {
    setIsMenuOpen(true); 
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
           const navElement = navRef.current;
      if (navElement && !(navElement.contains(event.target as Node))) {
        closeMenu(); 
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className={cn(styles.burger_menu, { [styles.hidden]: !isMenuOpen })}>
      <input
        type="checkbox"
        id="burger-checkbox"
        checked={isMenuOpen}
        readOnly
        className={styles.burgerCheckbox}
      />
      <label htmlFor="burger-checkbox" className={styles.burger_button} onClick={openMenu}>
        <BurgerBtn />
      </label>
      <ul className={cn(styles.menu, styles.menuBox)}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.has_dropdown}>
            <span
              className={styles.burger_item}
              role="button"
              tabIndex={0}
              onClick={() => toggleSubmenu(index)}
            >
              <span className={styles.text}>{item.text}</span>
            </span>
            {item.submenu && (
              <ul className={cn(styles.submenu, { [styles.open]: openItems[index.toString()] })}>
                {item.submenu.map((submenu, subIndex) => (
                  <React.Fragment key={subIndex}>
                    <li className={styles.product_title}>{submenu.title}</li>
                    {submenu.items.map((submenuItem, subItemIndex) => (
                      <li key={subItemIndex}>
                        <a href="#" className={styles.submenu_link}>
                          {submenuItem.text}
                          {submenuItem.quantity && (
                            <span className={styles.quantity}>{submenuItem.quantity}</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </React.Fragment>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BurgerMenu;
