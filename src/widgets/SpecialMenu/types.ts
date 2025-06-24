// src/widgets/types.ts

import React from 'react';

export interface ISpecialMenuItemProps {
  Icon: React.ComponentType<ISVGIcon>;
  title: string;
  submenuItems?: { categoryTitle: string; items: { id: string; text: string; href: string }[] };
}

export interface ISVGIcon {
  width?: number;
  height?: number;
  className?: string;
}