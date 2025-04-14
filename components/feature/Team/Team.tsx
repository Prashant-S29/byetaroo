import React from 'react';
import { TeamData } from './data';
import { TeamCard } from '~/components/common';

export const Team: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 p-5 sm:p-[30px] lg:p-[50px] xl:flex-row xl:gap-0">
      <section className="md:w-[330px]">
        <h1>/ We are Bytearoo /</h1>
      </section>

      <div className="font-satoshi flex w-full flex-col items-end gap-[50px]">
        <div className="flex w-full flex-col items-end justify-between gap-3 sm:gap-5 lg:h-8 lg:flex-row lg:gap-0">
          <h1 className="font-clash-grotesk w-fit text-[32px] leading-none font-medium max-[450px]:text-[28px] sm:text-[36px] md:text-[40px]">
            Team
          </h1>
          <p className="w-full max-w-[400px] text-right text-sm leading-tight max-[450px]:w-full md:text-base">
            A creative digital studio from India, made of colleagues friends who genuinely enjoy working together.
          </p>
        </div>

        <div className="grid w-full items-end justify-center gap-6 sm:grid-cols-3 xl:w-[960px]">
          {TeamData.map((data, index) => (
            <TeamCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
