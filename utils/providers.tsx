'use client';

import React from 'react';
import Lenis from 'lenis';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return <>{children}</>;
};
