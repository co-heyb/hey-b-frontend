import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import Comment from '../Comment';
import Icon from '../Icon';
import UserProfile from '.';
import Link from 'next/link';

const meta: Meta<typeof UserProfile> = {
  title: 'components/UserProfile',
  component: UserProfile,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['list', 'detail', 'preview', 'comment', 'profile'],
      description:
        'UserProfile의 타입을 결정합니다. UserProfile 컴포넌트는 `list`, `detail`, `preview`, `comment`, `profile` 다섯 가지 타입을 지원합니다.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof UserProfile>;

export const ListStyle: Story = {
  args: {
    type: 'list',
  },
  render: (args) => (
    <UserProfile {...args}>
      <UserProfile.Wrap>
        <UserProfile.Link href={'/'}>
          <UserProfile.Img src={'/images/banner.png'} alt={'프로필 이미지'} />
          <UserProfile.Name>delay</UserProfile.Name>
        </UserProfile.Link>
      </UserProfile.Wrap>
      <UserProfile.FollowBtn isFollowing={true} />
    </UserProfile>
  ),
};

export const DetailStyle: Story = {
  args: {
    type: 'detail',
  },
  render: (args) => (
    <UserProfile {...args}>
      <UserProfile.Wrap>
        <UserProfile.Link href={'/'}>
          <UserProfile.Img src={'/images/banner.png'} alt={'프로필 이미지'} />
          <UserProfile.Name>delay</UserProfile.Name>
        </UserProfile.Link>
      </UserProfile.Wrap>
      <UserProfile.FollowBtn isFollowing={true} />
    </UserProfile>
  ),
};
export const previewStyle: Story = {
  args: {
    type: 'preview',
  },
  render: (args) => (
    <UserProfile {...args}>
      <UserProfile.Wrap>
        <UserProfile.Link href={'/'}>
          <UserProfile.Img src={'/images/banner.png'} alt={'프로필 이미지'} />
          <UserProfile.Name>delay</UserProfile.Name>
        </UserProfile.Link>
      </UserProfile.Wrap>
      <UserProfile.FollowBtn isFollowing={true} />
    </UserProfile>
  ),
};

export const CommentStyle: Story = {
  args: {
    type: 'comment',
  },
  render: (args) => (
    <UserProfile {...args}>
      <UserProfile.Wrap>
        <UserProfile.Link href={'/'}>
          <UserProfile.Img src={'/images/banner.png'} alt={'프로필 이미지'} />
          <UserProfile.Name>delay</UserProfile.Name>
        </UserProfile.Link>
      </UserProfile.Wrap>
      <Comment>
        comment comment comment comment comment comment comment comment comment comment comment comment comment{' '}
      </Comment>
    </UserProfile>
  ),
};

export const ProfileStyle: Story = {
  args: {
    type: 'profile',
  },
  render: (args) => (
    <UserProfile {...args}>
      <UserProfile.Wrap>
        <UserProfile.Name>
          delay
          <Button variant={'plainRect'}>
            <Icon src={'/icons/export.svg'} alt={'링크보내기'} size="small" />
          </Button>
        </UserProfile.Name>
        <UserProfile.Desc>팔로워 500명</UserProfile.Desc>
      </UserProfile.Wrap>
      <UserProfile.Img src={'/images/banner.png'} alt={'프로필 이미지'} />
      <UserProfile.FollowBtn isFollowing={true} wide={true} />
    </UserProfile>
  ),
};
