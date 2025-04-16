import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// assets
import { circleArrow, imageFour, logo, star } from '~/public';

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="flex w-full flex-wrap-reverse justify-between xl:flex-nowrap">
        <section className="p-5 pt-0 sm:p-[30px] lg:p-[50px] lg:pt-0 xl:pt-[50px]">
          <h1 className="font-clash-grotesk text-[34px] leading-none font-medium max-[450px]:text-[28px] sm:text-[50px] md:text-[60px] lg:text-[70px] lg:leading-[70px]">
            Transforming Business with Creativity and Precision
          </h1>
        </section>
        <section className="w-full p-5 sm:w-fit sm:p-[30px] lg:p-[50px]">
          <div className="bg-brand-secondary relative h-[150px] w-full overflow-hidden rounded-[10px] sm:w-[260px]">
            <Image src={imageFour} alt="star" fill className="object-cover object-center" />
          </div>
        </section>
      </section>

      <section className="grid grid-cols-2 items-center max-[450px]:items-start xl:grid-cols-4">
        <div className="p-5 sm:p-[30px] lg:p-[50px]">
          <p className="font-clash-grotesk text-[80px] leading-none sm:text-[100px] md:text-[120px] lg:text-[140px] lg:leading-[120px]">
            5+
          </p>
        </div>
        <div className="flex h-full flex-col gap-[10px] p-5 sm:p-[30px] lg:p-[50px]">
          <Image src={star} alt="star" width={42} className="w-[32px] sm:w-[42px]" />
          <p className="text-sm leading-tight sm:text-base sm:leading-[18px] md:text-[18px] md:leading-[20px]">
            Years of experience to deliver top quality results.
          </p>
        </div>
        <div className="flex h-full flex-col gap-[10px] p-5 max-[450px]:gap-[15px] sm:p-[30px] lg:p-[50px]">
          <Image src={logo} alt="logo" className="w-[50px] max-[450px]:w-[40px] sm:w-[60px]" />
          <p className="text-sm leading-tight sm:text-base sm:leading-[18px] md:text-[18px] md:leading-[20px]">
            Have a new project? Mail us at{' '}
            <Link href="mailto:projects@bytearoo.com" className="font-medium underline underline-offset-2">
              projects@bytearoo.com
            </Link>
          </p>
        </div>
        <div className="flex h-full flex-col gap-[10px] p-5 sm:p-[30px] lg:p-[50px]">
          <Image src={circleArrow} alt="circleArrow" className="w-[32px] sm:w-[42px]" />
          <p className="text-sm leading-tight sm:text-base sm:leading-[18px] md:text-[18px] md:leading-[20px]">
            ByteAroo is your trusted IT Provider.
          </p>
        </div>
      </section>
    </div>
  );
};
