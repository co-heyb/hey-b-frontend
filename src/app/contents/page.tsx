import ContentsTabs from '@/components/\bPageComponents/Contents';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import UserProfile from '@/components/UserProfile';

export default function Home() {
  return (
    <div className="container">
      <div className="mb-20">
        <UserProfile type="profile">
          <UserProfile.Wrap>
            <UserProfile.Name>
              delay
              <Button variant={'plainRect'}>
                <Icon src={'/icons/export.svg'} alt={'링크보내기'} size="small" />
              </Button>
            </UserProfile.Name>
            <span>팔로워 500명</span>
          </UserProfile.Wrap>
          <UserProfile.Img src={'/images/banner.png'} alt={'프로필 이미지'} />
          <UserProfile.FollowBtn isFollowing={true} wide={true} />
        </UserProfile>
      </div>
      <ContentsTabs />
    </div>
  );
}
