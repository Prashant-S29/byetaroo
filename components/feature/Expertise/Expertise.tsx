'use client';

import React, { useState } from 'react';
import { ExpertiseData } from './data';
import { ExpertiseCard } from '../../common/ExpertiseCard';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useExpertiseStore } from '~/store/expertise';
// import { MenuIcon } from '~/icons';

export const Expertise: React.FC = () => {
  // store
  const { activeExpertiseCard } = useExpertiseStore();

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const [showCursor, setShowCursor] = useState(false);

  // Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mouse.x.set(e.clientX - 300 / 2);
    mouse.y.set(e.clientY - 300 / 2);
  };

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  return (
    <>
      <div
        className="group relative hidden flex-col lg:flex"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          handleMouseEnter();
          // handleMouseMove(e);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
            scale: showCursor ? 1 : 0,
          }}
          transition={{
            bounceStiffness: 100,
            bounceDamping: 10,
          }}
          className="pointer-events-none fixed z-10 flex h-[300px] flex-col overflow-hidden rounded-xl transition-transform duration-300"
        >
          <div
            className={`h-[300px] w-full duration-300`}
            style={{ transform: `translateY(-${activeExpertiseCard * 300}px)` }}
          >
            {ExpertiseData.map((data, index) => (
              <div key={index} className="bg-brand-secondary h-[300px] w-[300px] p-[30px]">
                <div className="h-full w-full rounded-lg bg-[#dad4ca]" />
              </div>
            ))}
          </div>
        </motion.div>

        {ExpertiseData.map((expertise, index) => (
          <ExpertiseCard key={index} index={index} title={expertise.title} description={expertise.description} />
        ))}
      </div>

      <div className="flex flex-col items-center gap-5 p-5 sm:gap-[30px] sm:p-[30px] lg:hidden lg:gap-[50px] lg:p-[50px]">
        {ExpertiseData.map((data, index) => (
          <div
            key={index}
            className="bg-brand-secondary aspect-square w-[300px] rounded-xl p-[30px] max-[450px]:w-full"
          >
            <div className="h-full w-full rounded-lg bg-[#dad4ca]" />
          </div>
        ))}
      </div>
    </>
  );
};
