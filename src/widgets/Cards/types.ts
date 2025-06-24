import React from 'react';

export interface ISVGIcon {
  width?: number;
  height?: number;
  className?: string;
}

export interface ICardProps extends ISVGIcon {
  Icon: React.ComponentType<ISVGIcon>; // SVG-иконка
  href: string;
  altText?: string;
}