'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ballX = useRef(0);
  const ballY = useRef(0);
  const speed = 0.15; // Lagging speed

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    // Animate cursor ball with lag effect
    const animateCursor = () => {
      const distX = mouseX.current - ballX.current;
      const distY = mouseY.current - ballY.current;

      ballX.current += distX * speed;
      ballY.current += distY * speed;

      cursor.style.left = ballX.current + 'px';
      cursor.style.top = ballY.current + 'px';

      requestAnimationFrame(animateCursor);
    };

    // Add hover effects to interactive elements
    const addHoverEffect = () => {
      const hoverElements = document.querySelectorAll(
        'a, button, input, textarea, select, label, ' +
        '[role="button"], [onclick], [tabindex]:not([tabindex="-1"]), ' +
        '.clickable, .hoverable, img, video, i, svg'
      );

      hoverElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('hover-link');
        });

        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('hover-link');
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();
    addHoverEffect();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-ball" />;
}
