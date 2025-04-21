import { useRef, useEffect } from 'react';

const easeOutExpo = (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

interface Point {
  x: number;
  y: number;
}

const useDragScroll = (ref: React.RefObject<HTMLElement>, isDraggable?: boolean) => {
  const startPoint = useRef<Point>({ x: 0, y: 0 });
  const isDragging = useRef<boolean>(false);
  const lastDeltaX = useRef<number | null>(null);
  const frame = useRef<number | null>(null);
  const preventClick = useRef<boolean>(false);

  const onPointerDown = (event: PointerEvent) => {
    isDragging.current = true;
    startPoint.current = { x: event.clientX, y: event.clientY };
    if (ref.current && isDraggable) ref.current.style.cursor = 'grabbing';
    event.preventDefault();
    document.body.style.userSelect = 'none';
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!isDragging.current || !ref.current) {
      lastDeltaX.current = null;
      return;
    }

    event.preventDefault();
    const deltaX = event.clientX - startPoint.current.x;
    const deltaY = event.clientY - startPoint.current.y;

    // 수직 이동 무시
    if (Math.abs(deltaX) < Math.abs(deltaY)) {
      lastDeltaX.current = null;
      return;
    }

    if (frame.current) {
      cancelAnimationFrame(frame.current);
    }

    frame.current = requestAnimationFrame(() => {
      if (ref.current) ref.current.scrollLeft -= deltaX;
      startPoint.current = { x: event.clientX, y: event.clientY };
    });

    lastDeltaX.current = deltaX;
  };

  const onPointerUp = (event: MouseEvent) => {
    isDragging.current = false;
    if (ref.current && isDraggable) ref.current.style.cursor = 'grab';

    preventClick.current = true;
    document.body.style.userSelect = 'auto';

    if (frame.current) {
      cancelAnimationFrame(frame.current);
    }

    if (!lastDeltaX.current) {
      return;
    }

    const initialSpeed = (lastDeltaX.current || 0) * 2;
    const duration = 1000;
    const startTime = performance.now();

    const animateScroll = () => {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < duration && ref.current) {
        const progress = elapsedTime / duration;
        const easing = easeOutExpo(progress);
        ref.current.scrollLeft -= initialSpeed * (1 - easing);
        frame.current = requestAnimationFrame(animateScroll);
      } else {
        if (frame.current) {
          cancelAnimationFrame(frame.current);
        }
      }
    };

    animateScroll();
  };

  const onPointerClick = (event: MouseEvent) => {
    if (lastDeltaX.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const linkElements = currentRef.querySelectorAll('a');
    linkElements.forEach((link) => {
      link.addEventListener('click', onPointerClick);
    });

    currentRef.addEventListener('pointerdown', onPointerDown);
    currentRef.addEventListener('pointermove', onPointerMove);
    currentRef.addEventListener('pointerup', onPointerUp);
    currentRef.addEventListener('pointerleave', onPointerUp);

    return () => {
      currentRef.removeEventListener('pointerdown', onPointerDown);
      currentRef.removeEventListener('pointermove', onPointerMove);
      currentRef.removeEventListener('pointerup', onPointerUp);
      currentRef.removeEventListener('pointerleave', onPointerUp);
    };
  }, [ref]);
};

export default useDragScroll;
