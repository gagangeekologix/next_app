// src/components/CursorLight.tsx
"use client";

import { useEffect } from 'react';

export default function CursorLight() {
  useEffect(() => {
    // Create the light cursor element
    const cursorLight = document.createElement('div');
    cursorLight.classList.add('cursor-light');
    document.body.appendChild(cursorLight);

    // Update the cursor's position on mouse move
    const moveCursor = (e: MouseEvent) => {
      cursorLight.style.left = `${e.pageX}px`;
      cursorLight.style.top = `${e.pageY}px`;
    };

    window.addEventListener('mousemove', moveCursor);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeChild(cursorLight);
    };
  }, []);

  return null; // No UI, just side-effects
}
