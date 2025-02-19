import { ReactNode, Children, isValidElement, cloneElement, ReactElement } from 'react';

export const setChildrenWithProps = (children: ReactNode, props: Record<string, any>): ReactNode =>
  Children.map(children, (child) =>
    isValidElement(child) ? cloneElement(child as ReactElement, { ...props }) : child,
  );
