'use client';
import { HTMLAttributes, PropsWithChildren } from 'react';
import { BaseTabsContentStyle, TabsContentStyle } from './Tabs.css';
import { useTabsContext } from '.';

const TabContents = ({ children, className, ...props }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  const { variant } = useTabsContext();

  return (
    <div className={`${BaseTabsContentStyle} ${TabsContentStyle[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};
TabContents.displayName = 'TabContents';

export { TabContents };
