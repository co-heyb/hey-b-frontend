'use client';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { baseTabsContentStyle, tabsContentStyle } from './Tabs.css';
import { useTabsContext } from '.';

const TabContents = ({ children, className, ...props }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  const { variant } = useTabsContext();

  return (
    <div className={`${baseTabsContentStyle} ${tabsContentStyle[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
TabContents.displayName = 'TabContents';

export { TabContents };
