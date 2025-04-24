import UserProfile from '@/components/UserProfile';
import Comment from '@/components/Comment';
const FindUsers = () => {
  return (
    <div>
      {[...Array(3)].map((data, index) => (
        <UserProfile key={index} type="comment">
          <UserProfile.Wrap>
            <UserProfile.Link href={'/'}>
              <UserProfile.Img src={'/images/banner.png'} alt={'프로필 이미지'} />
              <UserProfile.Name>delay</UserProfile.Name>
            </UserProfile.Link>
          </UserProfile.Wrap>
          <Comment>#바느질 #뜨개질</Comment>
        </UserProfile>
      ))}
    </div>
  );
};

export default FindUsers;
