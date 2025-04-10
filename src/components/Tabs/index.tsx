'use client';

import React, {
  NamedExoticComponent,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { createContext, useContext } from 'react';
import { Tab } from './Tab';
import { TabContents } from './TabContents';
import { TabsListStyle } from './Tabs.css';
import { TabTitle, TabTitleProps } from './TabTitle';

export const TabsContext = createContext({
  activeIndex: 0,
  setActiveIndex: (index: number) => {},
  variant: 'underline' as keyof typeof TabsListStyle,
});

const useTabsContext = () => {
  return useContext(TabsContext);
};

const { Provider } = TabsContext;

const Tabs = ({ variant = 'underline', ...props }: PropsWithChildren<{ variant?: keyof typeof TabsListStyle }>) => {
  const { children } = props;
  const TabArr = useMemo(() => React.Children.toArray(children), [children]);
  const [activeIndex, setActive] = useState(0);
  const setActiveIndex = useCallback((index: number) => setActive(() => index), []);
  const value = { activeIndex, setActiveIndex, variant };

  useEffect(() => {
    const activeIndex = TabArr.findIndex((tabs) => React.isValidElement(tabs) && tabs.props.isActive);
    setActive(activeIndex !== -1 ? activeIndex : 0);
  }, [TabArr]);

  const ActiveTabContent = useMemo(
    () => (TabArr[activeIndex] as ReactElement).props.children[1],
    [TabArr, activeIndex],
  );

  return (
    <Provider value={value}>
      <>
        <Tab>
          {TabArr.map((tab, index) => {
            if (React.isValidElement(tab)) {
              const { isActive } = tab.props;
              const TabTitle = React.Children.toArray(tab.props.children)[0];

              return (
                <React.Fragment key={index}>
                  {React.isValidElement(TabTitle) &&
                    React.cloneElement(TabTitle as ReactElement<TabTitleProps>, {
                      isActive,
                      index,
                      className: `${TabTitle.props.className || ''} ${activeIndex === index ? 'active' : ''}`,
                    })}
                </React.Fragment>
              );
            }
          })}
        </Tab>
        {(ActiveTabContent?.type as NamedExoticComponent).displayName === 'TabContents' && ActiveTabContent}
      </>
    </Provider>
  );
};
Tabs.Wrap = Tabs;
Tabs.TabTitle = TabTitle;
Tabs.Tab = Tab;
Tabs.Contents = TabContents;
export { Tabs, useTabsContext };
