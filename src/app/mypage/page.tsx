import Button from '@/components/Button';
import Icon from '@/components/Icon';
import UserProfile from '@/components/UserProfile';

export default function Home() {
  return (
    <div className="container">
      <h2 className="mb-20">마이페이지</h2>

      <div>
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
      <div className="flex-center gap-10">
        <Button size="medium" colorFill="mint" wide>
          로그인
        </Button>
        <Button size="medium" wide>
          회원가입
        </Button>
      </div>
    </div>
  );
}
