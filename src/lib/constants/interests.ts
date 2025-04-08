import { interestType } from '@/types';

export const interests: interestType.InterestList[] = [
  {
    category: 'creation',
    displayName: '🎨 창작 · 만들기',
    items: [
      {
        category: 'drawing',
        displayName: '드로잉',
        items: ['연필드로잉', '크로키', '디지털드로잉', '일러스트'],
      },
      {
        category: 'craft',
        displayName: '공예',
        items: ['자수', '가죽공예', '종이접기', '도예'],
      },
      {
        category: 'music',
        displayName: '악기 연주',
        items: ['피아노', '기타', '우쿨렐레', '드럼'],
      },
    ],
  },
  {
    category: 'writing',
    displayName: '✍️ 기록 · 글쓰기',
    items: [
      {
        category: 'diary',
        displayName: '다이어리',
        items: ['감정일기', '스터디플래너', '버킷리스트'],
      },
      {
        category: 'blog',
        displayName: '블로그',
        items: ['티스토리', '브런치', '워드프레스'],
      },
      {
        category: 'calligraphy',
        displayName: '캘리그래피',
        items: ['펜글씨', '손글씨연습', '모던캘리'],
      },
    ],
  },
  {
    category: 'wellness',
    displayName: '🧘‍♀️ 건강 · 웰빙',
    items: [
      {
        category: 'yoga',
        displayName: '요가 · 스트레칭',
        items: ['홈요가', '루틴스트레칭', '필라테스'],
      },
      {
        category: 'fitness',
        displayName: '피트니스',
        items: ['헬스', '홈트', 'PT', '웨이트'],
      },
      {
        category: 'mindfulness',
        displayName: '마음 챙김',
        items: ['명상', '호흡', '마음일기'],
      },
    ],
  },
  {
    category: 'collecting',
    displayName: '🎧 감상 · 수집',
    items: [
      {
        category: 'music',
        displayName: '음악 감상',
        items: ['플레이리스트만들기', 'LP 수집', '콘서트'],
      },
      {
        category: 'movie',
        displayName: '영화 감상',
        items: ['넷플릭스', '시네마테크', '감상노트'],
      },
      {
        category: 'hobbyCollect',
        displayName: '취미 수집',
        items: ['피규어', '레고', '굿즈', '우표'],
      },
    ],
  },
  {
    category: 'nature',
    displayName: '🏕️ 야외 · 자연',
    items: [
      {
        category: 'camping',
        displayName: '캠핑 · 차박',
        items: ['백패킹', '감성캠핑', '차박'],
      },
      {
        category: 'hiking',
        displayName: '등산 · 산책',
        items: ['한라산등반', '공원산책', '숲길걷기'],
      },
      {
        category: 'fishing',
        displayName: '낚시',
        items: ['민물낚시', '바다낚시', '플라이낚시'],
      },
    ],
  },
  {
    category: 'sports',
    displayName: '🏃‍♂️ 스포츠 · 활동',
    items: [
      {
        category: 'indoorSports',
        displayName: '실내 스포츠',
        items: ['배드민턴', '탁구', '클라이밍'],
      },
      {
        category: 'outdoorSports',
        displayName: '야외 스포츠',
        items: ['축구', '농구', '테니스', '러닝'],
      },
      {
        category: 'waterSports',
        displayName: '수상 스포츠',
        items: ['수영', '서핑', '스노클링'],
      },
    ],
  },
  {
    category: 'beauty',
    displayName: '🛍️ 패션 · 뷰티',
    items: [
      {
        category: 'makeup',
        displayName: '메이크업',
        items: ['립컬렉션', '아이메이크업', '데일리룩'],
      },
      {
        category: 'styling',
        displayName: '스타일링',
        items: ['패션코디', '계절옷장정리', 'OOTD'],
      },
      {
        category: 'selfCare',
        displayName: '셀프케어',
        items: ['스킨케어루틴', '향수수집', '헤어케어'],
      },
    ],
  },
  {
    category: 'foodie',
    displayName: '🍳 요리 · 식도락',
    items: [
      {
        category: 'cooking',
        displayName: '요리하기',
        items: ['한식', '양식', '자취요리'],
      },
      {
        category: 'baking',
        displayName: '베이킹',
        items: ['쿠키', '마카롱', '빵만들기'],
      },
      {
        category: 'foodExplore',
        displayName: '맛집 탐방',
        items: ['디저트카페', '로컬맛집', '야식'],
      },
    ],
  },
  {
    category: 'tech',
    displayName: '🎮 게임 · 테크',
    items: [
      {
        category: 'gaming',
        displayName: '게임',
        items: ['모바일게임', '콘솔게임', '보드게임'],
      },
      {
        category: 'coding',
        displayName: '코딩 · 개발',
        items: ['웹개발', '앱개발', '취미코딩', '알고리즘'],
      },
      {
        category: 'digitalHobby',
        displayName: '디지털 기기',
        items: ['기계식키보드', '기기리뷰', '자동화'],
      },
    ],
  },
  {
    category: 'pets',
    displayName: '🐶 반려동물 · 동물',
    items: [
      {
        category: 'dogCare',
        displayName: '강아지 돌보기',
        items: ['산책', '훈련', '강아지간식만들기'],
      },
      {
        category: 'catCare',
        displayName: '고양이 돌보기',
        items: ['냥이브러싱', '고양이관찰일기', '냥글쓰기'],
      },
      {
        category: 'animalLover',
        displayName: '동물 교감',
        items: ['물생활', '버드와칭', '동물영상'],
      },
    ],
  },
  {
    category: 'travel',
    displayName: '✈️ 여행 · 탐험',
    items: [
      {
        category: 'domesticTravel',
        displayName: '국내 여행',
        items: ['캠핑카여행', '한옥스테이', '기차여행'],
      },
      {
        category: 'worldTravel',
        displayName: '해외 여행',
        items: ['도쿄여행', '유럽백패킹', '미국로드트립'],
      },
      {
        category: 'microAdventure',
        displayName: '탐험 · 당일치기',
        items: ['근교소풍', '도보여행', '스냅사진'],
      },
    ],
  },
  {
    category: 'media',
    displayName: '📸 사진 · 영상',
    items: [
      {
        category: 'photography',
        displayName: '사진',
        items: ['필름카메라', '인물사진', '풍경사진'],
      },
      {
        category: 'vlog',
        displayName: '브이로그',
        items: ['일상기록', '편집브이로그', '먹방브이로그'],
      },
      {
        category: 'videoEdit',
        displayName: '영상 편집',
        items: ['프리미어프로', '루마퓨전', '모션그래픽'],
      },
    ],
  },
  {
    category: 'community',
    displayName: '🤝 관계 · 커뮤니티',
    items: [
      {
        category: 'bookClub',
        displayName: '독서모임',
        items: ['책읽기모임', '리딩토론', '북클럽인증'],
      },
      {
        category: 'socialDance',
        displayName: '소셜댄스',
        items: ['살사', '스윙댄스', '탱고'],
      },
      {
        category: 'groupActivity',
        displayName: '소모임 활동',
        items: ['스터디', '동호회', '밴드'],
      },
    ],
  },
  {
    category: 'focus',
    displayName: '🧩 퍼즐 · 집중',
    items: [
      {
        category: 'puzzle',
        displayName: '퍼즐',
        items: ['직소퍼즐', '3D퍼즐', '블록 맞추기'],
      },
      {
        category: 'brainGame',
        displayName: '두뇌 게임',
        items: ['큐브', '스도쿠', '바둑'],
      },
      {
        category: 'boardGame',
        displayName: '보드게임',
        items: ['전략보드게임', '파티게임', '솔로플레이'],
      },
    ],
  },
  {
    category: 'misc',
    displayName: '💡기타 · 실험',
    items: [
      {
        category: 'observation',
        displayName: '관찰하기',
        items: ['별관측', '날씨기록', '자연탐구'],
      },
      {
        category: 'magic',
        displayName: '마술',
        items: ['카드마술', '도구마술', '무대연출'],
      },
      {
        category: 'explore',
        displayName: '취미탐색',
        items: ['새로운취미찾기', '1일클래스체험', '챌린지'],
      },
    ],
  },
];
