"use client";

import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import LanguageContext from '@/src/shared/constants/LanguageContext';

import { TIME_SCHEDULE_DAY_RU } from '@/src/shared/constants/translations/common.ru';
import { TIME_SCHEDULE_DAY_EN } from '@/src/shared/constants/translations/common.en';

interface IProps {
  startTime: string;
  endTime: string;
}

const WorkingHours = ({ startTime, endTime }: IProps) => {
  const { currentLang } = useContext(LanguageContext);

  let localizedDay;

  if (currentLang === 'ru') {
    localizedDay = TIME_SCHEDULE_DAY_RU;
  } else {
    localizedDay = TIME_SCHEDULE_DAY_EN;
  }

  return (
    <div className={cn(styles.time_wrapper)}>
      <p className={styles.day}>{localizedDay}</p>
      <time dateTime={`${startTime}-${endTime}`}>
        {startTime} — {endTime}
      </time>
    </div>
  );
};

export default WorkingHours;