import React from 'react';
import Image from 'next/image';

// assets
import { logo } from '~/public';

export const Info: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-5 p-5 sm:gap-[30px] sm:p-[30px] lg:gap-[50px] lg:p-[50px]">
      <div className="bg-brand-secondary h-[500px] w-full rounded-[20px] md:h-[617px]" />

      <div className="flex items-start justify-between gap-5 sm:gap-[30px] lg:gap-[50px]">
        <p className="font-clash-grotesk max-w-[1117px] text-[26px] leading-[30px] sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:text-[40px] xl:leading-[42px]">
          We are a B2B specialized agency that helps you plan, create, and execute a strategy to make your technology
          solution relatable for faster adoption.
        </p>
        <Image src={logo} alt="logo" width={123} height={82} className="hidden min-w-[123px] lg:block" />
      </div>
    </section>
  );
};
