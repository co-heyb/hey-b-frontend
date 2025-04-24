import Banner from '@/components/\bBanner';
import FindHobby from '@/components/\bPageComponents/Main/FindHobby';
import FindUsers from '@/components/\bPageComponents/Main/FindUsers';
import HobbyCourse from '@/components/\bPageComponents/Main/HobbyCourse';
import HobbyKit from '@/components/\bPageComponents/Main/HobbyKit';
import Section from '@/components/Section';

export default function Home() {
  return (
    <div>
      <Banner />
      <Section>
        <Section.Header href={'/community'}>나는 어떤 취미가 잘 맞을까?</Section.Header>
        <Section.Content className="slide-section">
          <FindHobby />
        </Section.Content>
      </Section>
      <Section>
        <Section.Header href={'/course'}>초보부터 고수까지, 맞춤형 취미 코스</Section.Header>
        <Section.Content className="slide-section">
          <HobbyCourse />
        </Section.Content>
      </Section>
      <Section>
        <Section.Header href={'/users'}>나와 취미가 비슷한 사용자</Section.Header>
        <Section.Content>
          <FindUsers />
        </Section.Content>
      </Section>

      <Section>
        <Section.Header href={'/kit'}>키트 탐색: 지금 인기있는 키트는?</Section.Header>
        <Section.Content>
          <HobbyKit />
        </Section.Content>
      </Section>
    </div>
  );
}
