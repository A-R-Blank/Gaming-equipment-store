import * as React from 'react';

export interface IContact {
  id: number;
  url: string;
  label: string;
  phone: string;
}

export interface IServiceLink {
  label: string;
  link?: string;
  onClick?: () => void;
}

export interface ISocialLink {
  icon: React.ReactElement;
  link: string;
  type: 'telegram' | 'whatsapp';
}

export interface IBurgerMenuItem {
  text: string;
  submenu?: IBurgerMenuSubmenu[];
}

export interface IBurgerMenuSubmenu {
  title: string;
  items: IBurgerMenuSubmenuItem[];
}

export interface IBurgerMenuSubmenuItem {
  text: string;
  quantity?: string;
}