import { createContext, PropsWithChildren, useContext, useEffect, useRef } from 'react';
import { baseContentPreviewWrapStyle, contentPreviewWrapStyle } from '../ContentPreview.css';
import useDragScroll from '@/hooks/useDragScroll';

export interface ContentPreviewWrapProps {
  variant?: keyof typeof contentPreviewWrapStyle;
}

const ContentPreviewWrapContext = createContext({
  variant: 'list' as keyof typeof contentPreviewWrapStyle,
});

const useContentPreviewWrapContext = () => {
  return useContext(ContentPreviewWrapContext);
};
const { Provider } = ContentPreviewWrapContext;

const ContentPreviewWrap = ({ children, variant = 'list', ...props }: PropsWithChildren<ContentPreviewWrapProps>) => {
  const value = {
    variant,
  };

  const scrollRef = useRef<HTMLUListElement>(null);
  useDragScroll(scrollRef, variant === 'slide');

  return (
    <Provider value={value}>
      <ul className={`${baseContentPreviewWrapStyle} ${contentPreviewWrapStyle[variant]}`} ref={scrollRef}>
        {children}
      </ul>
    </Provider>
  );
};

export { ContentPreviewWrap, useContentPreviewWrapContext };
