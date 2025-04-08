'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import * as styles from './InterestSelector.css'; // 스타일 추가
import { interests } from '@/lib/constants/interests'; // 관심사 데이터 불러오기
import InputToggle from '../InputToggle';
import React from 'react';
import useDragScroll from '@/hooks/useDragScroll';

interface InterestSelectorProps {
  value: string[];
  onChange: (id: string[]) => void;
}

const InterestSelector = ({ value, onChange }: InterestSelectorProps) => {
  const scrollRef = useRef(null);
  useDragScroll(scrollRef);

  const handleSelect = (item: string) => {
    const updatedSelectedItems = value.includes(item) ? value.filter((i) => i !== item) : [...value, item];

    onChange(updatedSelectedItems);
  };

  const InterestItems = useMemo(
    () =>
      interests.map((topCategory) => (
        <div key={topCategory.category} className={styles.topCategoryItem}>
          <p className={styles.topCategoryTitle}>{topCategory.displayName}</p>

          <InputToggle>
            {topCategory.items.map((category) => {
              return (
                <div key={category.category}>
                  <InputToggle.Input
                    onChange={() => handleSelect(category.category)}
                    className={styles.categoryItem}
                    type="checkbox"
                    key={category.category}
                    checked={value.includes(category.category)}
                    hidden
                  >
                    {category.displayName}
                  </InputToggle.Input>
                  <div className={styles.categoryDesc}>
                    {category.items.map((item) => {
                      return <span key={item}>#{item} </span>;
                    })}
                  </div>
                </div>
              );
            })}
          </InputToggle>
        </div>
      )),
    [value],
  );

  return (
    <div className={styles.container}>
      <div ref={scrollRef} className={styles.topCategoryList}>
        {InterestItems}
      </div>
    </div>
  );
};

export default React.memo(InterestSelector);
