import Link from 'next/link';
import SvgLogo from '@/public/logo.svg';

import styles from './style.module.scss';
import ContactsList from '@/src/entities/ContactsList';
import WorkingHours from '@/src/entities/WorkingHours';
import ServiceLinksList from '@/src/entities/ServiceLinksList';
import BurgerMenu from '@/src/widgets/BurgerMenu';
import SearchBar from '@/src/features/SearchBar/SearchBar';
import SocialLinksList from '@/src/widgets/SocialLinksList';
import Cards from "@/src/widgets/Cards";
import BuildComputerButton from "@/src/widgets/BuildComputerButton";
import SpecialMenu from "@/src/widgets/SpecialMenu";
import LanguageSwitcher from "@/src/widgets/LanguageSwitcher";
import React from "react";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.header__container}>
        <ContactsList />
        <WorkingHours
          startTime="09:00"
          endTime="21:00"
        />
        <ServiceLinksList />
      </section>
      <div className={styles.header__toolbar_container}>
        <Link className={styles.header__logo} href={'/'}>
          <SvgLogo />
        </Link>
        <div>
          <div className={styles.header__toolbar}>
            <BurgerMenu />
            <SearchBar />
            <SocialLinksList />
          </div>
          <SpecialMenu />
        </div>
        <LanguageSwitcher />
        <div>
          <Cards />
          <BuildComputerButton />
        </div>
      </div>
    </header>
  );
}