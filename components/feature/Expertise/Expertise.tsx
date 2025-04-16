'use client';

import React, {  useState } from 'react';
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
    mouse.x.set(e.clientX - 200 / 2);
    mouse.y.set(e.clientY - 200 / 2);
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
          className="pointer-events-none fixed z-10 flex flex-col rounded-xl transition-transform duration-300"
        >
          <div
            className={`h-[200px] w-full duration-300`}
            style={{
              transform: `translateY(-${activeExpertiseCard * 200}px)`,
            }}
          >
            {ExpertiseData.map((data, index) => (
              <div
                key={index}
                className="pointer-events-none relative flex h-[200px] w-[200px] flex-col gap-3 duration-150"
                style={{
                  filter: `${activeExpertiseCard === index ? 'blur(0px)' : 'blur(10px)'}`,
                  opacity: `${activeExpertiseCard === index ? 1 : 0}`,
                }}
              >
                <data.svg />
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
          <div key={index} className="bg-brand-secondary relative w-full max-w-[300px] overflow-hidden rounded-xl p-5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
              <data.svg />
            </div>
            <h1 className="font-clash-grotesk text-brand-primary text-sm font-medium">{data.title}</h1>
            {/* <p className='text'>{data.description}</p> */}
            {/* <div className="h-full w-full rounded-lg bg-[#dad4ca]" /> */}
          </div>
        ))}
      </div>
    </>
  );
};
