'use client';

import { PropsWithChildren } from 'react';
import { BaseTabsListStyle, TabsListStyle } from './Tabs.css';
import { useTabsContext } from '.';

export interface TabProps {
  isActive?: boolean;
  index?: number;
  className?: string;
}
/**
 * @example <Tabs>
            <Tabs.Tab isActive>
              <Tabs.TabTitle> 탭 타이틀 </Tabs.TabTitle>
              <Tabs.Contents> 탭 컨텐츠 </Tabs.Contents>
            </Tabs.Tab>      
      </Tabs>
 *
 * * required
 * @property parent* <Tabs> Tabs를 감싸는 영역 </Tabs>
 * @property children* <Tabs.Tab> 탭 타이틀 영역 </Tabs.Tab>
 * @property children  <Tabs.Contents> 탭 컨텐츠 영역 </Tabs.Contents>
 * @property className* isActive: 초기 랜더링 시 액티브 여부
 */
const Tab = ({ className, ...props }: PropsWithChildren<TabProps>) => {
  const { children } = props;
  const { variant } = useTabsContext();

  return <ul className={`${BaseTabsListStyle} ${TabsListStyle[variant]} ${className || ''}`}>{children}</ul>;
};

/**
 * @property className  auto-width: 텍스트 길이에 맞춰 탭 길이가 늘어나고 탭이 많을 때 스크롤이 생김
 */

export { Tab };
