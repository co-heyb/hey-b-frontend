/**
 * HEX 색상을 RGB로 변환하는 함수
 * @param hex - 변환할 HEX 색상 (예: #ff5733, #FFF)
 * @returns RGB 값 (예: "255, 87, 51")
 */
export const hexToRgb = (hex: string): string => {
  // HEX 값에서 `#` 제거
  console.log(hex);
  hex = hex.replace(/^#/, '');

  // 3자리 HEX 값을 6자리로 변환 (#FFF → #FFFFFF)
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  // HEX를 RGB 값으로 변환
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  console.log(r, g, b);
  return `${r}, ${g}, ${b}`;
};
