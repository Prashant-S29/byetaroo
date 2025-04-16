'use client';

import React, { useState } from 'react';
import { useExpertiseStore } from '~/store/expertise';

interface ExpertiseCardProps {
  index: number;
  title: string;
  description: string;
}

export const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ index, title }) => {
  const [isHover, setIsHover] = useState(false);
  const { setExpertise } = useExpertiseStore();
  return (
    <div
      className="font-satoshi group-hover:text-primary/30 hover:text-primary flex justify-between border-b p-[50px] duration-300"
      onMouseEnter={() => {
        setIsHover(true);
        setExpertise(index);
      }}
      onMouseMove={() => {
        setExpertise(index);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <section className="flex w-full max-w-[300px] justify-between">
        {/* <p className="w-[30px] text-center text-xs">{index + 1}</p> */}
        <div className="flex w-[30px] justify-center text-xs">
          <p className={`w-[20px] text-center ${isHover ? 'opacity-100' : 'opacity-0'} duration-150`}>/</p>
          <p className="w-[20px] text-center">{index + 1}</p>
          <p className={`w-[20px] text-center ${isHover ? 'opacity-100' : 'opacity-0'} duration-150`}>/</p>
        </div>
        <div className="flex w-[30px] justify-center text-xs">
          ( <p className="w-[20px] text-center">{isHover ? '+' : '-'}</p> )
        </div>
      </section>

      <section className={`flex w-[700px] flex-col gap-2`}>
        <h1 className="text-base font-medium uppercase">{title}</h1>
        {/* <h1 className="text-primary/70 text-xs">{descri ption}</h1> */}
      </section>
    </div>
  );
};
