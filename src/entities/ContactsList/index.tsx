"use client";

import React, { useContext } from 'react';
import { IContact } from '@/src/shared/interfaces';
import styles from './style.module.scss';
import LanguageContext from '@/src/shared/constants/LanguageContext';

import { CONTACTS_RU } from '@/src/shared/constants/translations/common.ru';
import { CONTACTS_EN } from '@/src/shared/constants/translations/common.en';

const ContactsList = () => {
    const { currentLang } = useContext(LanguageContext);

    let contactsData: IContact[];

    if (currentLang === 'ru') {
        contactsData = CONTACTS_RU;
    } else {
        contactsData = CONTACTS_EN;
    }

    return (
      <>
          {contactsData.map((item, index) => (
            <div key={index} className={styles.wrapper}>
                <a href={item.url} className={styles.btn} target="_blank">
                    {item.label}
                </a>
                <a href={`tel:${item.phone}`} className={styles.number}>
                    {item.phone}
                </a>
            </div>
          ))}
      </>
    );
};

export default ContactsList;