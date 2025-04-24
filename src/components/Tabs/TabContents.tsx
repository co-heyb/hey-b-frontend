'use client';
import { HTMLAttributes } from 'react';
import { baseTabsContentStyle, tabsContentStyle } from './Tabs.css';
import { useTabsContext } from '.';
import { componentPropsType } from '@/types';

const TabContents = ({
  children,
  className,
  ...props
}: componentPropsType.ComponentBaseProps & HTMLAttributes<HTMLDivElement>) => {
  const { variant } = useTabsContext();

  return (
    <div className={`${baseTabsContentStyle} ${tabsContentStyle[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
TabContents.displayName = 'TabContents';

export { TabContents };
