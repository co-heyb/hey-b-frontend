import Button from '@/components/Button';
import Icon from '@/components/Icon';
import InputBar from '@/components/InputBar';
import Post from '@/components/Post';
import TiptapEditor from '@/components/TiptapEditor';
import UserProfile from '@/components/UserProfile';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <Post>
          <UserProfile type="list">
            <UserProfile.Wrap>
              <UserProfile.Link href={'/'}>
                <UserProfile.Img src={'/images/banner.png'} alt={'프로필 이미지'} />
                <UserProfile.Name>delay</UserProfile.Name>
              </UserProfile.Link>
            </UserProfile.Wrap>
            <UserProfile.FollowBtn isFollowing={true}></UserProfile.FollowBtn>
          </UserProfile>

          <Post.Title>게시물 제목</Post.Title>
          <Post.Content>게시물 내용이 여기에 들어갑니다.</Post.Content>
          <Post.Comment>댓글 내용</Post.Comment>
        </Post>

        <InputBar status="error">
          <InputBar.Label>ID</InputBar.Label>
          <InputBar.Input />
          <InputBar.Helper>helper text</InputBar.Helper>
        </InputBar>
        <TiptapEditor />
      </main>
    </div>
  );
}
