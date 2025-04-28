import Button from '@/components/Button';
import { ContentPreview } from '@/components/ContentPreview';
import Icon from '@/components/Icon';
import UserProfile from '@/components/UserProfile';
import { priceFormat } from '@/lib/utils/formats';

const HobbyCourse = () => {
  return (
    <ContentPreview.Wrap isSlide={true}>
      {[...Array(6)].map((data, index) => (
        <ContentPreview variant="slide" key={index}>
          <ContentPreview.Thumbnail width={1200} height={640} src={'/images/banner.png'} alt={'썸네일 이미지'}>
            <ContentPreview.Thumbnail.Label> wideLabel </ContentPreview.Thumbnail.Label>
            <ContentPreview.Actions>
              <span></span>
              <Button variant="plain">
                <Icon size="medium" src={'/icons/bookmark.svg'} alt={'image.alt'} />
              </Button>
            </ContentPreview.Actions>
          </ContentPreview.Thumbnail>
          <ContentPreview.Contents>
            <ContentPreview.Title>다이어리 꾸미기</ContentPreview.Title>
            <ContentPreview.Desc>#태그 #태그</ContentPreview.Desc>
            <Button className="mt-10" colorFill="mint" wide>
              시작하기
            </Button>
          </ContentPreview.Contents>
        </ContentPreview>
      ))}
    </ContentPreview.Wrap>
  );
};

export default HobbyCourse;
