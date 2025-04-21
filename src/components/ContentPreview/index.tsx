import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { UrlObject } from 'url';
import { baseContentPreviewStyle, contentPreviewStyle } from './ContentPreview.css';
import { ContentPreviewWrap, useContentPreviewWrapContext } from './ContentPreviewWrap';
import { ContentPreviewTitle } from './ContentPreviewContents/ContentPreviewTitle';
import { ContentPreviewPrice } from './ContentPreviewContents/ContentPreviewPrice';
import { ContentPreviewDesc } from './ContentPreviewContents/ContentPreviewDesc';
import { ContentPreviewActions } from './ContentPreviewContents/ContentPreviewActions';
import { Thumbnail } from '../Thumbnail';
import ContentPreviewContents from './ContentPreviewContents';

/**
 * 
 * @example  <ContentPreview.Wrap>
    <ContentPreview>
      <ContentPreview.Thumbnail>
        <WideLabelStyle> wideLabel </WideLabelStyle>
        <Thumbnail
          src=""
          alt={}
        />
      </ContentPreview.Thumbnail>
      <ContentPreview.Contents>
        <ContentPreview.Actions>
        <span>좋아요</span>
        </ContentPreview.Actions>
        <ContentPreview.Title>
          다이어리 꾸미기
        </ContentPreview.Title>
        <ContentPreview.Desc>
          기초부터 차근차근, 나만의 작품을 완성해 보세요.
        </ContentPreview.Desc>
        <ContentPreview.Price>
          10,000원
        <ContentPreview.Price.sale>
          20%
        </ContentPreview.Price.sale>
        </ContentPreview.Price>
      </ContentPreview.Contents>
    </ContentPreview>
    </ContentPreview.Wrap>
 */
const ContentPreview = (props: PropsWithChildren<{ href?: string | UrlObject }>) => {
  const { children, href } = props;
  const { variant } = useContentPreviewWrapContext();

  return (
    <li className={`${baseContentPreviewStyle} ${contentPreviewStyle[variant]}`} {...props}>
      {(href && <Link href={href}>{children}</Link>) || <>{children}</>}
    </li>
  );
};
/**
 *
 * @property slide?: 슬라이드 리스트일 경우 사용
 * @property list?: 앨범형이 아닌 리스트형일 경우 사용
 * @property column?: 두단의 앨범형일 경우 사용
 */

ContentPreview.Wrap = ContentPreviewWrap;

ContentPreview.Thumbnail = Thumbnail;
ContentPreview.Contents = ContentPreviewContents;
ContentPreview.Actions = ContentPreviewActions;
ContentPreview.Title = ContentPreviewTitle;
ContentPreview.Desc = ContentPreviewDesc;
ContentPreview.Price = ContentPreviewPrice;
export { ContentPreview };
