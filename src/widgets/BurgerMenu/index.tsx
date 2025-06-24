// src/widgets/BurgerMenu/index.tsx

"use client";

import React, { useState, useRef, useContext, useEffect } from 'react';
import cn from 'classnames';
import { IBurgerMenuItem } from '@/src/shared/interfaces';
import styles from './styles.module.scss';
import BurgerBtn from "@/public/image/btn-menu.svg";
import LanguageContext from '@/src/shared/constants/LanguageContext';

// Статический импорт данных пунктов меню
import { BURGER_MENU_ITEMS_RU } from '@/src/shared/constants/translations/common.ru';
import { BURGER_MENU_ITEMS_EN } from '@/src/shared/constants/translations/common.en';

// Интерфейс для открытых пунктов меню
interface IOpenItems {
  [index: string]: boolean; // Индексация по строковым ключам
}

// Интерфейс для входящих данных компонента
// interface IProps {} - Удаляем пустой интерфейс

const BurgerMenu = () => {
  const { currentLang } = useContext(LanguageContext);

  // Состояние открытых пунктов меню
  const [openItems, setOpenItems] = useState<IOpenItems>({});

  // Состояние видимости меню
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Реф для нав-элемента
  const navRef = useRef<HTMLElement | null>(null); // Явно указываем тип HTMLElement

  // Константа для хранения пунктов меню
  const menuItems: IBurgerMenuItem[] = currentLang === 'ru' ? BURGER_MENU_ITEMS_RU : BURGER_MENU_ITEMS_EN;

  // Функция открытия-подзакрытия подменю
  const toggleSubmenu = (index: number) => {
    // Формируем новый объект, где все подменю закрыты
    const closedMenus: IOpenItems = Object.keys(openItems).reduce(
      (result, key) => {
        result[key] = false;
        return result;
      },
      {} as IOpenItems // Явно указываем тип для результирующего объекта
    );

    // Добавляем текущее подменю как открытое
    closedMenus[index.toString()] = true;

    // Обновляем состояние
    setOpenItems(closedMenus);
  };

  // Функция полного закрытия меню
  const closeMenu = () => {
    setOpenItems({}); // Закрываем все подменю
    setIsMenuOpen(false); // Закрываем само меню
  };

  // Функция открытия меню
  const openMenu = () => {
    setIsMenuOpen(true); // Открываем меню
  };

  // Установка слушателя кликов на документ
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Проверяем, попал ли клик внутрь меню
      const navElement = navRef.current;
      if (navElement && !(navElement.contains(event.target as Node))) {
        closeMenu(); // Закрываем меню
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

// Экспорт компонента
export default BurgerMenu;