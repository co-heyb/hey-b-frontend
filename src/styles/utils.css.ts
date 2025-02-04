const BASE_WIDTH = 360; // Figma 기준 디자인 해상도
const BASE_FONT_SIZE = 16; // 기본 폰트 크기

/**
 * px → vw 변환 함수
 * @param value - px 값 (공백으로 구분된 다중 값 지원)
 * @param baseWidth - 기준 해상도 (기본값: 414)
 */
export const pxToVw = (value: number | string, baseWidth: number = BASE_WIDTH) => {
  if (typeof value === 'number') {
    return `calc(${value} * 100 / ${baseWidth} * 1vw)`;
  }
  if (typeof value === 'string') {
    return value
      .split(' ')
      .map((v) => (isNaN(Number(v)) ? v : `calc(${v} * 100 / ${baseWidth} * 1vw)`))
      .join(' ');
  }
  throw new Error('pxToVw: 지원되지 않는 값 형식입니다.');
};
