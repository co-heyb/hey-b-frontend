// 소분류(태그)까지 포함된 세부 관심사
export interface InterestItem {
  category: string; // 로직용 키 (예: drawing)
  displayName: string; // UI용 이름 (예: 드로잉)
  items: string[]; // 실제 태그들 (예: ['연필 드로잉', '크로키', '일러스트'])
}

// 중분류(카테고리) 리스트
export interface InterestList {
  category: string; // 로직용 키 (예: creation)
  displayName: string; // UI에 표시할 카테고리명 (예: 🎨 창작 · 만들기)
  items: InterestItem[]; // 위의 Interest 배열
}
