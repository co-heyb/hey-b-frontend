import Link from 'next/link';
import { UrlObject } from 'url';
import { baseContentPreviewStyle, contentPreviewStyle, ContentPreviewStyleVariants } from './ContentPreview.css';
import { ContentPreviewWrap } from './ContentPreviewWrap';
import { ContentPreviewTitle } from './ContentPreviewContents/ContentPreviewTitle';
import { ContentPreviewPrice } from './ContentPreviewContents/ContentPreviewPrice';
import { ContentPreviewDesc } from './ContentPreviewContents/ContentPreviewDesc';
import { ContentPreviewActions } from './ContentPreviewContents/ContentPreviewActions';
import { Thumbnail } from '../Thumbnail';
import ContentPreviewContents from './ContentPreviewContents';
import { componentPropsType } from '@/types';
import ThumbnailLabel from '../Thumbnail/ThumbnailLabel';
import { ContentPreviewPriceSale } from './ContentPreviewContents/ContentPreviewPrice/ContentPreviewPriceSale';
import { setChildrenWithProps } from '@/lib/utils/setChildrenWithProps';
export interface ContentPreviewProps {
  variant?: NonNullable<ContentPreviewStyleVariants>['variant'];
}

/**
 * 
 * @example  <ContentPreview.Wrap slide>
    <ContentPreview variant="slide">
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
        <ContentPreview.PriceSale>
          20%
        </ContentPreview.PriceSale>
        </ContentPreview.Price>
      </ContentPreview.Contents>
    </ContentPreview>
    </ContentPreview.Wrap>
 */
const ContentPreview = ({
  children,
  href,
  variant = 'list',
  ...props
}: componentPropsType.ComponentBaseProps<ContentPreviewProps & { href?: string | UrlObject }>) => {
  return (
    <li className={`${baseContentPreviewStyle} ${contentPreviewStyle({ variant })}`} {...props}>
      {/* {(href && <Link href={href}>{children}</Link>) || <>{children}</>} */}
      {(href && <Link href={href}>{setChildrenWithProps(children, { variant })}</Link>) || (
        <>{setChildrenWithProps(children, { variant })}</>
      )}
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
