'use client';

import Button from '../Button';
import { LiHTMLAttributes } from 'react';
import React from 'react';
import { useTabsContext } from '.';
import { TabProps } from './Tab';
import { baseTabsItemStyle, tabsItemStyle, baseTabItemButtonStyle, tabsItemButtonStyle } from './Tabs.css';
import { componentPropsType } from '@/types';

export interface TabTitleProps
  extends componentPropsType.ComponentBaseProps<TabProps & LiHTMLAttributes<HTMLLIElement>> {
  handleChange?: () => void;
}
const TabTitle = ({ children, isActive, index = 0, className, handleChange, ...props }: TabTitleProps) => {
  const { activeIndex, setActiveIndex, variant } = useTabsContext();

  const setActive = (index: number) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
    handleChange && handleChange();
  };

  return (
    <li
      className={`${baseTabsItemStyle} ${tabsItemStyle[variant]} ${className || ''} ${isActive ? 'active' : ''}`}
      {...props}
    >
      <Button
        size="medium"
        radius="rect"
        variant="plain"
        wide
        className={`${baseTabItemButtonStyle} ${tabsItemButtonStyle[variant]}`}
        onClick={() => setActive(index)}
      >
        {children}
      </Button>
    </li>
  );
};

TabTitle.displayName = 'TabTitle';

export { TabTitle };
