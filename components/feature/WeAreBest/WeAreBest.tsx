import React from 'react';
import Image from 'next/image';

// assets
import { circle_dice, circle_star, lineArrow, logo } from '~/public';

export const WeAreBest: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center gap-[70px] overflow-hidden p-[150px]">
      <Image src={logo} alt="logo" width={162} height={108} className="min-w-[162px]" />
      <p className="text-[257px] font-medium">We</p>
      <Image src={lineArrow} alt="lineArrow" width={271} height={132} className="min-w-[271px]" />
      <p className="text-[257px] font-medium">are</p>
      <Image src={circle_star} alt="circle_star" width={180} height={180} className="min-w-[180px]" />
      <p className="text-[257px] font-medium">best</p>
      <Image src={circle_dice} alt="circle_dice" width={180} height={180} className="min-w-[180px]" />
    </div>
  );
};
