import { IContact } from '@/src/shared/interfaces';
import { IServiceLink, IBurgerMenuItem } from "@/src/shared/interfaces";
import openPopup from "@/src/features/Popup/Delivery";
import ContactUS from "@/src/features/SendEmailForm/SendEmailForm";

export const CONTACTS_EN: IContact[] = [
  {
    id: 1,
    url: "https://maps.app.goo.gl/o38eEiZvZKumEvd77",
    label: "Silent Hill",
    phone: "+7 555 555-37-50"
  }
];

export const TIME_SCHEDULE_DAY_EN = "Daily";

export const SERVICE_LINKS_EN: IServiceLink[] = [
  { label: "Delivery", onClick: openPopup },
  { label: "Payment", link: "#" },
  { label: "Feedback", onClick: ContactUS },
];


export const BURGER_MENU_ITEMS_EN: IBurgerMenuItem[] = [
  {
    text: "Smartphones and Gadgets",
    submenu: [
      {
        title: "Smartphones",
        items: [
          { text: "Apple iPhone", quantity: "123" },
          { text: "Keypad Phones", quantity: "23" },
          { text: "Home Phones", quantity: "17" },
          { text: "Samsung", quantity: "27" },
        ],
      },
      {
        title: "Gadgets",
        items: [
          { text: "Smart Watches", quantity: "15" },
          { text: "Blogger Gear", quantity: "32" },
        ],
      },
    ],
  },
  {
    text: "Laptops and Computers",
    submenu: [
      {
        title: "Laptops",
        items: [
          { text: "Notebooks" },
          { text: "Desktops" },
          { text: "Components" },
        ],
      },
    ],
  },
  {
    text: "TVs and Digital TV",
  },
  {
    text: "Audio Equipment",
  },
  {
    text: "Promotions",
  },
];

export const SPECIAL_MENU_ITEMS = [
  {
    id: 'sales',
    title: 'Sales',
    categoryTitle: 'Our Sales',
    items: [
      { id: 'sale1', text: '20% Discount', href: '#' },
      { id: 'sale2', text: 'Buy Two Items Get One Free', href: '#' },
      { id: 'sale3', text: 'Prize Draw Among Buyers', href: '#' },
    ],
  },
  {
    id: 'hotOffers',
    title: 'Hot Offers',
    categoryTitle: 'Best Deals',
    items: [
      { id: 'offer1', text: 'Xiaomi Redmi Note 10 Smartphone', href: '#' },
      { id: 'offer2', text: 'NVIDIA RTX 3060 Ti Gaming Graphics Card', href: '#' },
      { id: 'offer3', text: 'Samsung 980 PRO 1TB SSD Drive', href: '#' },
    ],
  },
  {
    id: 'giftSets',
    title: 'Gift Sets',
    categoryTitle: 'Best Gift Packs',
    items: [
      { id: 'giftSet1', text: 'PC Kit "Gaming Monster"', href: '#' },
      { id: 'giftSet2', text: 'Accessory Set for Gamers', href: '#' },
      { id: 'giftSet3', text: 'New Year’s Present for an IT Enthusiast', href: '#' },
    ],
  },
  {
    id: 'events',
    title: 'Events',
    categoryTitle: 'Important Events',
    items: [
      { id: 'event1', text: 'Black Friday Sale', href: '#' },
      { id: 'event2', text: 'TechWorld Conference', href: '#' },
      { id: 'event3', text: 'Free PC Assembly Workshop', href: '#' },
    ],
  },
  {
    id: 'brands',
    title: 'Brands',
    categoryTitle: 'Official Partners',
    items: [
      { id: 'brand1', text: 'HP', href: '#' },
      { id: 'brand2', text: 'Lenovo', href: '#' },
      { id: 'brand3', text: 'ASUS', href: '#' },
    ],
  },
];

export const PROMOBLOCK = {
  heading: 'Embark on an adventure with our epic loot crates and sets!',
  paragraph: 'Improve your skills by following wise strategies of masters and reach a new level of expertise!',
  buttonText: 'Shop now',
};