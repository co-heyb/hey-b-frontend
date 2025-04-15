'use client';

import Button from '../Button';
import { LiHTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';
import { useTabsContext } from '.';
import { TabProps } from './Tab';
import { BaseTabsItemStyle, TabsItemStyle, BaseTabItemButtonStyle, TabsItemButtonStyle } from './Tabs.css';

export interface TabTitleProps extends PropsWithChildren<TabProps & LiHTMLAttributes<HTMLLIElement>> {
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
      className={`${BaseTabsItemStyle} ${TabsItemStyle[variant]} ${className || ''} ${isActive ? 'active' : ''}`}
      {...props}
    >
      <Button
        size="medium"
        radius="rect"
        variant="plain"
        wide
        className={`${BaseTabItemButtonStyle} ${TabsItemButtonStyle[variant]}`}
        onClick={() => setActive(index)}
      >
        {children}
      </Button>
    </li>
  );
};

TabTitle.displayName = 'TabTitle';

export { TabTitle };
