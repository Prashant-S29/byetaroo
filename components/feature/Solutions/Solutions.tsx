'use client';

import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col gap-[30px] p-5 pt-[150px]! sm:p-[30px] lg:p-[50px]">
      <div className="flex flex-col gap-[30px]">
        <section className="relative flex w-full justify-center">
          <div className="relative size-[46px] rounded-md md:size-[50px] md:rounded-lg">
            <div className="bg-brand-primary absolute z-10 h-full w-full rounded-lg" />

            <motion.div
              initial={{
                top: 0,
                left: 0,
                transform: 'rotate(0)',
              }}
              whileInView={{
                top: '-120px',
                left: '-65px',
                transform: 'rotate(-25deg)',
              }}
              className="bg-brand-secondary absolute size-[46px] rounded-md md:size-[50px] md:rounded-lg"
            />
            <motion.div
              initial={{
                top: 0,
                left: 0,
                transform: 'rotate(0)',
              }}
              whileInView={{
                top: '-135px',
                left: '-2px',
                transform: 'rotate(0deg)',
              }}
              className="bg-brand-secondary absolute size-[46px] rounded-md md:size-[50px] md:rounded-lg"
            />
            <motion.div
              initial={{
                top: 0,
                left: 0,
                transform: 'rotate(0)',
              }}
              whileInView={{
                top: '-120px',
                left: '63px',
                transform: 'rotate(25deg)',
              }}
              className="bg-brand-secondary absolute size-[46px] rounded-md md:size-[50px] md:rounded-lg"
            />

            <motion.div
              initial={{
                top: 0,
                left: 0,
                transform: 'rotate(0)',
              }}
              whileInView={{
                top: '-30px',
                left: '-85px',
                transform: 'rotate(-50deg)',
              }}
              className="bg-brand-secondary absolute size-[46px] rounded-md md:size-[50px] md:rounded-lg"
            />

            <motion.div
              initial={{
                top: 0,
                left: 0,
                transform: 'rotate(0)',
              }}
              whileInView={{
                top: '-65px',
                left: '-35px',
                transform: 'rotate(-20deg)',
              }}
              className="bg-brand-secondary absolute size-[46px] rounded-md md:size-[50px] md:rounded-lg"
            />
            <motion.div
              initial={{
                top: 0,
                left: 0,
                transform: 'rotate(0)',
              }}
              whileInView={{
                top: '-65px',
                left: '30px',
                transform: 'rotate(20deg)',
              }}
              className="bg-brand-secondary absolute size-[46px] rounded-md md:size-[50px] md:rounded-lg"
            />
            <motion.div
              initial={{
                top: 0,
                left: 0,
                transform: 'rotate(0)',
              }}
              whileInView={{
                top: '-30px',
                left: '85px',
                transform: 'rotate(50deg)',
              }}
              className="bg-brand-secondary absolute size-[46px] rounded-md md:size-[50px] md:rounded-lg"
            />
          </div>
        </section>
        <section className="flex flex-col items-center gap-5">
          <h1 className="font-clash-grotesk max-w-[500px] text-center text-[32px] leading-none font-medium max-[450px]:text-[28px] sm:text-[36px] md:text-[40px]">
            We build solutions that solves your problems
          </h1>
          <p className="font-satoshi max-w-[600px] text-center">
            We always ensure that we deliver results on time. We always tried to share our methodology for everyone to
            explore how we work. These projects very well explains our techniques to craft products that deliver
            results.
          </p>
        </section>

        <div className="bg-brand-secondary h-[300px] w-full rounded-[26px] sm:h-[400px] sm:rounded-[30px]" />

        <section className="flex flex-col justify-between gap-5 lg:flex-row">
          <h1 className="font-clash-grotesk max-w-[500px] text-[32px] leading-none font-medium max-[450px]:text-[28px] sm:text-[36px] md:text-[40px]">
            Crafting Growth Through SaaS with Bytearoo
          </h1>
          <section className="flex flex-col gap-2">
            <p className="font-satoshi max-w-[575px] leading-snug">
              Our approach to IT solutions is based on a deep understanding of client&apos;s businesses and their unique
              requirements. Whether it&apos;s developing a new software application, designing a website, or
              implementing a strategy, our team works closely with client&apos;s to deliver solutions that are tailored
              to client&apos;s needs.
            </p>
            <Link href="/contact" className="text-brand-primary text-sm font-semibold">
              Discover On-Call &rarr;
            </Link>
          </section>
        </section>
      </div>
    </div>
  );
};
