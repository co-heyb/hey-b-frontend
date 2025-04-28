import { Meta, StoryObj } from '@storybook/react';
import { ContentPreview } from '.';
import { ContentPreviewWrap } from './ContentPreviewWrap';
import { priceFormat } from '@/lib/utils/formats';
import Button from '../Button';
import Icon from '../Icon';
import UserProfile from '../UserProfile';

const meta: Meta<typeof ContentPreview> = {
  title: 'Components/ContentPreview',
  component: ContentPreview,
  argTypes: {
    variant: {
      control: 'select',
      options: ['list', 'column', 'slide'],
      description: 'ContentPreview의 스타일을 선택합니다. list는 리스트형, column은 두단, slide는 슬라이드형입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentPreview>;

export const Default: Story = {
  args: {
    variant: 'list',
  },
  render: (args) => {
    return (
      <ContentPreview.Wrap isSlide={args.variant === 'slide'}>
        {[...Array(6)].map((data, index) => (
          <ContentPreview variant={args.variant} key={index}>
            <ContentPreview.Thumbnail width={1200} height={640} src={'/images/banner.png'} alt={'썸네일 이미지'}>
              <ContentPreview.Thumbnail.Label> wideLabel </ContentPreview.Thumbnail.Label>
              <ContentPreview.Actions>
                <span></span>
                <Button variant="plain">
                  <Icon size="small" src={'/icons/bookmark.svg'} alt={'image.alt'} />
                </Button>
              </ContentPreview.Actions>
            </ContentPreview.Thumbnail>
            <ContentPreview.Contents>
              <UserProfile className={args.variant !== 'list' ? 'mt-10' : ''} type="preview">
                <UserProfile.Wrap>
                  <UserProfile.Link href={'/'}>
                    <UserProfile.Img src={'/images/banner.png'} alt={'프로필 이미지'} />
                    <UserProfile.Name>delay</UserProfile.Name>
                  </UserProfile.Link>
                </UserProfile.Wrap>
              </UserProfile>
              <ContentPreview.Title>다이어리 꾸미기</ContentPreview.Title>
              <ContentPreview.Desc>기초부터 차근차근, 나만의 작품을 완성해 보세요.</ContentPreview.Desc>
              <ContentPreview.Price>
                <ContentPreview.Price.Sale>20%</ContentPreview.Price.Sale>
                {priceFormat(15000, { suffix: '원' })}
              </ContentPreview.Price>
            </ContentPreview.Contents>
          </ContentPreview>
        ))}
      </ContentPreview.Wrap>
    );
  },
};
