import React from 'react';
import { TeamData } from './data';
import { TeamCard } from '~/components/common';

export const Team: React.FC = () => {
  return (
    <div className="flex p-[50px]">
      <section className="w-[330px]">
        <h1>/ We are Bytearoo /</h1>
      </section>

      <div className="font-satoshi flex w-full flex-col items-end gap-[50px]">
        <div className="flex h-8 w-full justify-between">
          <h1 className="font-clash-grotesk w-fit text-[40px] leading-none font-medium">Team</h1>
          <p className="text-right leading-tight">
            A creative digital studio from India, made of colleagues friends who genuinely <br /> enjoy working
            together.
          </p>
        </div>

        <div className="grid w-[960px] grid-cols-3 gap-6">
          {TeamData.map((data, index) => (
            <TeamCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
