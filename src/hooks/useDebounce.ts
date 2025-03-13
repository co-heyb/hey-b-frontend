import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // 입력된 값이 변경될 때마다 타이머 리셋
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    // cleanup (입력 값 변경 시 clearTimeout으로 이전 타이머 제거)
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
