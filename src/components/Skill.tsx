'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface SkillProps {
  iconURL: string;
  label: string;
  altText: string;
}

export default function Skill({ iconURL, label, altText }: SkillProps) {
  const skillRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const [zIndex, setZIndex] = useState<number>(0);

  const [position, setPosition] = useState<
    Partial<Record<'left' | 'right' | 'top' | 'bottom', string>>
  >({});
  const [isLabelVisible, setIsLabelVisible] = useState(false);

  const checkOverflow = useCallback(() => {
    if (!skillRef.current || !labelRef.current) return;

    setIsLabelVisible(true); // To make sure label is visible before measuring

    requestAnimationFrame(() => {
      const labelBox = labelRef.current!.getBoundingClientRect();
      const gridBox = skillRef.current!.closest('div.grid')?.getBoundingClientRect();
      if (!gridBox) return;

      const newPosition: Partial<Record<'left' | 'right' | 'top' | 'bottom', string>> = {};

      labelBox.right > gridBox.right ? (newPosition.right = '0.5rem') : null;
      labelBox.left < gridBox.left ? (newPosition.left = '0.5rem') : null;
      labelBox.bottom > gridBox.bottom ? (newPosition.bottom = '2.5rem') : null;
      labelBox.top < gridBox.top ? (newPosition.top = '2.5rem') : null;

      setPosition((prev) =>
        JSON.stringify(prev) === JSON.stringify(newPosition) ? prev : newPosition
      );
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setZIndex(0);
    setIsLabelVisible(false);
    hideTimeout.current = setTimeout(() => setPosition({}), 150); // same as transition duration
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  return (
    <div
      ref={skillRef}
      onMouseEnter={() => {
        setZIndex(10);
        hideTimeout.current && clearTimeout(hideTimeout.current); // prevent flicker if mouse is re-entering
        checkOverflow();
      }}
      onMouseLeave={handleMouseLeave}
      className={`place-self-start relative z-[${zIndex}] group select-none`}
    >
      <p
        ref={labelRef}
        className={` absolute contain-content bg-background z-[5] p-[0.15em] px-2 whitespace-nowrap transition-opacity duration-150 ${
          isLabelVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={position}
      >
        {label}
      </p>
      <img src={iconURL} alt={altText} width="48px" className="aspect-square z-0" />
    </div>
  );
}
