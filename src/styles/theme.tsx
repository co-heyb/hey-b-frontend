const theme = {
  colors: {
    // 주요 색상
    mint: '#A3DAD1', // 메인 배경 및 주요 영역, CTA
    coral: '#DE542C', // CTA, 경고, 강조 텍스트
    softYellow: '#F3E5AB', // 서브 배경 및 강조 섹션

    // 텍스트 색상
    darkCharcoal: '#3B4A57', // 주요 텍스트 (헤더, 본문)
    charcoal: '#4E5D6C', // 보조 텍스트 및 설명 텍스트
    white: '#FFFFFF', // 흰색
    black: '#000000', // 검정색

    // 액센트 색상
    lightYellow: '#FFF8B3', // 카드 배경, 섹션 구분
    softMint: '#78C6C4', // 버튼 호버, 강조된 배경
    lightMint: '#B7D3D2', // 탐색 페이지 배경 및 대체 섹션
    beige: '#EDC7B7', // 강조 배경 및 따뜻한 느낌의 섹션
  },

  spacing: (factor: number) => `${factor * 8}px`, // 간격 단위 (8px 기준)
};
export type Theme = typeof theme;

export default theme;
