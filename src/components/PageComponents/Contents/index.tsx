'use client';
import Button from '../../Button';
import { ContentPreview } from '../../ContentPreview';
import Icon from '../../Icon';
import { Tabs } from '../../Tabs';
const ContentsTabs = () => {
  return (
    <Tabs variant="underline">
      <Tabs.Tab>
        <Tabs.TabTitle>콘텐츠</Tabs.TabTitle>
        <Tabs.Contents>
          <ContentPreview.Wrap variant="column">
            {[...Array(6)].map((data, index) => (
              <ContentPreview key={index}>
                <ContentPreview.Thumbnail width={1200} height={640} src={'/images/banner.png'} alt={'썸네일 이미지'}>
                  <ContentPreview.Thumbnail.Label> wideLabel </ContentPreview.Thumbnail.Label>
                  <ContentPreview.Actions>
                    <span></span>
                    <Button variant="plain">
                      <Icon size="small" src={'/icons/bookmark.svg'} alt={'image.alt'} />
                    </Button>
                  </ContentPreview.Actions>
                </ContentPreview.Thumbnail>
              </ContentPreview>
            ))}
          </ContentPreview.Wrap>
        </Tabs.Contents>
      </Tabs.Tab>
      <Tabs.Tab>
        <Tabs.TabTitle>스크랩</Tabs.TabTitle>
        <Tabs.Contents>탭 스크랩</Tabs.Contents>
      </Tabs.Tab>
    </Tabs>
  );
};

export default ContentsTabs;
