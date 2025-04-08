import { useState, useCallback } from 'react';

interface UseCheckboxProps {
  items: string[]; // 체크 가능한 항목들
}

const useCheckbox = ({ items }: UseCheckboxProps) => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [checkedAll, setCheckedAll] = useState<boolean>(false);

  // 모든 항목 체크
  const handleCheckAll = useCallback(() => {
    if (checkedAll) {
      setCheckedItems([]); // 전체 체크 해제
    } else {
      setCheckedItems(items); // 모든 항목 체크
    }
    setCheckedAll(!checkedAll); // 상태 변경
  }, [checkedAll, items]);

  // 개별 항목 체크
  const handleItemCheck = useCallback(
    (item: string) => {
      setCheckedItems((prev) => {
        let newCheckedItems;

        if (prev.includes(item)) {
          // 이미 체크된 항목은 해제
          newCheckedItems = prev.filter((i) => i !== item);
        } else {
          // 체크되지 않은 항목은 추가
          newCheckedItems = [...prev, item];
        }

        // 전체 항목이 체크됐을 때
        if (newCheckedItems.length === items.length) {
          setCheckedAll(true); // 전체 항목이 체크됨
        } else {
          setCheckedAll(false); // 하나라도 해제되면 전체 체크 해제
        }

        return newCheckedItems;
      });
    },
    [items],
  );

  return {
    checkedAll,
    checkedItems,
    handleCheckAll,
    handleItemCheck,
  };
};

export default useCheckbox;
