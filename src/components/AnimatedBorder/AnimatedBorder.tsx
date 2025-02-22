'use client';
import styles from './AnimatedBorder.module.css';
import { useState, useEffect, useRef, ReactNode } from 'react';
import throttle from 'lodash.throttle';

interface AnimatedSVGStrokeProps {
  children: ReactNode;
  fps?: number;
  strokeWidth?: number;
  speed?: number;
  gapLength?: number;
  animateClick?: boolean;
}

function calculateStrokeValues(rect: DOMRect, gapLength: number) {
  const perimeter = 2 * (rect.width + rect.height);
  const dashLength = perimeter * (1 - gapLength);
  const calculatedGapLength = perimeter * gapLength;
  return {
    perimeter,
    dashArray: `${dashLength} ${calculatedGapLength}`,
  };
}

function useAnimatedStroke(fps = 12, speed = 70, gapLength = 0.5) {
  const rectRef = useRef<SVGRectElement>(null);
  const [dashArray, setDashArray] = useState('');
  const [perimeter, setPerimeter] = useState(0);
  const [animationOffset, setAnimationOffset] = useState(0);
  const animationRequestId = useRef<number | null>(null);
  const lastFrameTime = useRef(0);

  const updateDimensions = () => {
    if (rectRef.current) {
      const rect = rectRef.current.getBoundingClientRect();
      const { perimeter, dashArray } = calculateStrokeValues(rect, gapLength);
      setPerimeter(perimeter);
      setDashArray(dashArray);
    }
  };

  useEffect(() => {
    updateDimensions();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTime.current;
      if (deltaTime > 1000 / fps) {
        if (perimeter > 0) {
          const offsetChange = (speed * deltaTime) / 1000;
          setAnimationOffset((prevOffset) => (prevOffset - offsetChange) % perimeter);
          lastFrameTime.current = currentTime;
        }
      }
      animationRequestId.current = requestAnimationFrame(animate);
    };

    animationRequestId.current = requestAnimationFrame(animate);

    const throttledResizeHandler = throttle(() => {
      updateDimensions();
    }, 100);

    window.addEventListener('resize', throttledResizeHandler);

    return () => {
      window.removeEventListener('resize', throttledResizeHandler);
      if (animationRequestId.current) {
        cancelAnimationFrame(animationRequestId.current);
      }
    };
  }, [fps, speed, gapLength, perimeter]);

  useEffect(() => {
    updateDimensions();
  }, [gapLength]);

  return { rectRef, dashArray, animationOffset };
}

export default function AnimatedBorder({
  children,
  fps = 8,
  strokeWidth = 10,
  speed = 75,
  gapLength = 0.2,
  animateClick = true,
}: AnimatedSVGStrokeProps) {
  const { rectRef, dashArray, animationOffset } = useAnimatedStroke(fps, speed, gapLength);

  const handleClick = () => {
    if (!animateClick) return;

    const rectElement = rectRef.current;

    if (rectElement) {
      rectElement.classList.remove(styles.blink);
      void rectElement.getBoundingClientRect().width;
      rectElement.classList.add(styles.blink);

      rectElement.addEventListener(
        'animationend',
        () => {
          rectElement.classList.remove(styles.blink);
        },
        { once: true }
      );
    }
  };

  return (
    <div className="@container/border">
      <div
        tabIndex={0}
        className={`${styles.container}  md:@md/border:supports-hover:p-6 md:@md/border:supports-hover:pt-4  outline-none border-none no-hover:focus:bg-[#ffb9570a] no-hover:focus:outline-tva-orange no-hover:focus:outline-2 outline-offset-[-2px]`}
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect
            ref={rectRef}
            className={`${styles.outline} hidden md:@md/border:supports-hover:block`}
            width="100%"
            height="100%"
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={animationOffset}
          />
        </svg>
        {children}
      </div>
    </div>
  );
}
