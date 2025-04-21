import dayjs from 'dayjs';

export const priceFormat = (number: number, options?: { prefix?: string; suffix?: string }) => {
  return (
    typeof number === 'number' &&
    `${options?.prefix || ''}${new Intl.NumberFormat('ko-KR').format(number)}${options?.suffix || ''}`
  );
};

export const dateFormat = (start: string, end?: string) => {
  const startFormatted = dayjs(start).format('YYYY.MM.DD(ddd)');

  if (!end) {
    return startFormatted;
  }

  const endFormatted = dayjs(end).format('MM.DD(ddd)'); // 년도를 제외한 포맷

  const startYear = dayjs(start).format('YYYY');
  const endYear = dayjs(end).format('YYYY');

  // 만약 시작과 끝의 년도가 같다면 년도를 생략
  return startYear === endYear
    ? `${startFormatted} - ${endFormatted}`
    : `${startFormatted} - ${dayjs(end).format('YYYY.MM.DD(ddd)')}`;
};
