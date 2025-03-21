'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Sketch from '@uiw/react-color-sketch';
import { SwatchPresetColor } from '@uiw/react-color-swatch';
import { colorPickerPopup } from './ColorPicker.css';
import { theme } from '@/styles/theme.css';
import Button from '../Button';

interface ColorPickerProps {
  defaultColor: string;
  onComplete: (color: string) => void;
  isOpen: boolean;
  onClose?: () => void;
}

const ColorPicker = ({ defaultColor, onComplete, isOpen, onClose }: ColorPickerProps) => {
  const [color, setColor] = useState(defaultColor);
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const DEFAULT_COLORS = useMemo<SwatchPresetColor[]>(() => {
    return Object.entries(theme.colors).map(([key, value]) => ({
      title: key,
      color: value,
    }));
  }, []);

  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node) && isOpen && onClose) {
        onClose();
      }
    };

    // 이벤트 리스너 등록
    document.addEventListener('mousedown', handleClickOutside);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // 색상 적용 함수
  const handleApplyColor = () => {
    onComplete(color); // 적용하기 버튼을 클릭할 때만 onComplete 호출
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={colorPickerPopup} ref={colorPickerRef}>
      <Sketch
        color={color}
        presetColors={DEFAULT_COLORS}
        onChange={({ hex }) => {
          setColor(hex);
        }}
      />
      <div>
        <Button size="extraSmall" radius="rect" wide onClick={handleApplyColor}>
          적용하기
        </Button>
      </div>
    </div>
  );
};

export default ColorPicker;
