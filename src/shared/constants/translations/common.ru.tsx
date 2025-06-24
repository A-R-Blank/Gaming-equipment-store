import { IContact } from '@/src/shared/interfaces';
import { IServiceLink, IBurgerMenuItem } from "@/src/shared/interfaces";
import openPopup from "@/src/features/Popup/Delivery";
import ContactUS from "@/src/features/SendEmailForm/SendEmailForm";

export const CONTACTS_RU: IContact[] = [
  {
    id: 1,
    url: "https://maps.app.goo.gl/o38eEiZvZKumEvd77",
    label: "Сайлент-Хилл",
    phone: "+7 555 555-37-50"
  }
];

export const TIME_SCHEDULE_DAY_RU = "Ежедневно";

export const SERVICE_LINKS_RU: IServiceLink[] = [
  { label: "Доставка", onClick: openPopup },
  { label: "Оплата", link: "#" },
  { label: "Обратная связь", onClick: ContactUS },
];

export const BURGER_MENU_ITEMS_RU: IBurgerMenuItem[] = [
  {
    text: "Смартфоны и гаджеты",
    submenu: [
      {
        title: "Смартфоны",
        items: [
          { text: "Apple iPhone", quantity: "123" },
          { text: "Кнопочные телефоны", quantity: "23" },
          { text: "Домашние телефоны", quantity: "17" },
          { text: "Samsung", quantity: "27" },
        ],
      },
      {
        title: "Гаджеты",
        items: [
          { text: "Смарт-часы", quantity: "15" },
          { text: "Для блогеров", quantity: "32" },
        ],
      },
    ],
  },
  {
    text: "Ноутбуки и компьютеры",
    submenu: [
      {
        title: "Ноутбуки",
        items: [
          { text: "Notebooks" },
          { text: "Desktops" },
          { text: "Components" },
        ],
      },
    ],
  },
  {
    text: "Телевизоры и цифровое ТВ",
  },
  {
    text: "Аудиотехника",
  },
  {
    text: "Акции",
  },
];

export const SPECIAL_MENU_ITEMS = [
  {
    id: 'sales',
    title: 'Акции',
    categoryTitle: 'Наши акции',
    items: [
      { id: 'sale1', text: 'Скидка 20%', href: '#' },
      { id: 'sale2', text: 'Купи два товара, третий бесплатно!', href: '#' },
      { id: 'sale3', text: 'Розыгрыш призов среди покупателей', href: '#' },
    ],
  },
  {
    id: 'hotOffers',
    title: 'Горячие предложения',
    categoryTitle: 'Самые выгодные товары',
    items: [
      { id: 'offer1', text: 'Смартфон Xiaomi Redmi Note 10', href: '#' },
      { id: 'offer2', text: 'Игровая видеокарта NVIDIA RTX 3060 Ti', href: '#' },
      { id: 'offer3', text: 'Накопитель SSD Samsung 980 PRO 1TB', href: '#' },
    ],
  },
  {
    id: 'giftSets',
    title: 'Подарочные наборы',
    categoryTitle: 'Лучшие подарочные наборы',
    items: [
      { id: 'giftSet1', text: 'ПК комплект “Игровой монстр”', href: '#' },
      { id: 'giftSet2', text: 'Комплект аксессуаров для геймера', href: '#' },
      { id: 'giftSet3', text: 'Новогодний подарок IT-шнику', href: '#' },
    ],
  },
  {
    id: 'events',
    title: 'События',
    categoryTitle: 'Важные мероприятия',
    items: [
      { id: 'event1', text: 'Черная пятница', href: '#' },
      { id: 'event2', text: 'IT-конференция TechWorld', href: '#' },
      { id: 'event3', text: 'Бесплатный мастер-класс по сборке ПК', href: '#' },
    ],
  },
  {
    id: 'brands',
    title: 'Наши бренды',
    categoryTitle: 'Официальные партнеры',
    items: [
      { id: 'brand1', text: 'HP', href: '#' },
      { id: 'brand2', text: 'Lenovo', href: '#' },
      { id: 'brand3', text: 'ASUS', href: '#' },
    ],
  },
];

export const PROMOBLOCK = {
  heading: 'Отправляйся в приключения с нашими эпическими лут-корзинами и наборами!',
  paragraph: 'Развивай свои навыки, следуя мудрым стратегиям мастеров, и поднимайся на новый уровень мастерства!',
  buttonText: 'В каталог',
};