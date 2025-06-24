import React from 'react';
import styles from './style.module.scss';
import Telegram from '@/public/icons/telegram.svg';
import WhatsApp from '@/public/icons/whatsapp.svg';
import Link from "next/link";

const SocialLinksList = () => {
  return (
    <nav className={styles.socialNav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            href="https://telegram.org/"
            className={styles.link}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <Telegram />
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="https://www.whatsapp.com/"
            className={styles.link}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <WhatsApp />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinksList;