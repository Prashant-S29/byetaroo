'use client';

import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { useExpertiseStore } from '~/store/expertise';

export const Cursor: React.FC = () => {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });

  const { showCursor } = useExpertiseStore();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        left: pos.x - 200 / 2,
        top: pos.y - 200 / 2,
        scale: showCursor ? 1 : 0,
      }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      className="fixed top-0 left-0 z-50"
    >
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M90.4029 152.126C99.7572 138.455 161.576 28.1373 166.581 19.2009C166.82 18.7745 166.973 18.3805 167.089 17.9059C170.188 5.26896 161.815 1.11682 157.153 0.62603H99.4027C86.8161 0.0787867 88.2466 5.72902 91.0614 9.38243C91.5853 10.0625 92.329 10.5221 93.0682 10.9586C99.1583 14.5549 99.5142 24.2253 96.4027 30.626C93.1035 37.413 46.9027 116.126 46.9027 116.126C46.9027 116.126 26.6529 150.626 8.65289 160.376C-5.74711 168.176 2.65289 171.126 8.65289 171.626H41.6529C72.2529 172.826 80.6527 166.376 90.4029 152.126Z"
          fill="#F25533"
        />
        <path
          d="M149.36 72.5891C152.824 66.5891 161.484 66.5891 164.948 72.5891L197.424 128.839C208.394 147.839 194.682 171.589 172.742 171.589H107.79C100.862 171.589 96.532 164.089 99.9961 158.089L149.36 72.5891Z"
          fill="#F25533"
        />
      </svg>
    </motion.div>
  );
};
