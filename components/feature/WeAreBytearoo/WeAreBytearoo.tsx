'use client';

import React, { useEffect, useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { data } from './data';
import { imageOne, imageThree, imageTwo } from '~/public';
import Image from 'next/image';

const images = [imageOne, imageTwo, imageThree];

export const WeAreBytearoo: React.FC = () => {
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeCard === data.length - 1) {
        setActiveCard(0);
      } else {
        setActiveCard(activeCard + 1);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [activeCard]);

  return (
    <div className="flex flex-col gap-5 p-5 sm:p-[30px] lg:p-[50px] xl:flex-row xl:gap-0">
      <section className="md:w-[330px]">
        <h1>/ How we Work /</h1>
      </section>

      <div className="flex w-full flex-col items-end gap-[50px]">
        <div className="flex w-full flex-col items-end justify-between gap-5 lg:h-8 lg:flex-row lg:gap-0">
          <h1 className="font-clash-grotesk w-fit text-[32px] leading-none font-medium max-[450px]:text-[28px] sm:text-[36px] md:text-[40px]">
            Design a SaaS with Us.
          </h1>
          <div className="flex w-full flex-col gap-2 sm:w-fit">
            <div className="flex h-7 w-full rounded-full max-[450px]:h-5 sm:min-w-[500px]">
              <div
                className="bg-brand-primary h-full rounded-full duration-300 ease-in-out"
                // style={{ minWidth: activeCard === data.length - 1 ? calc(100% - 28px) : `${33 * (activeCard + 1)}%` }}
                style={{
                  minWidth: activeCard === data.length - 1 ? `calc(100% - 20px)` : `calc(${33 * (activeCard + 1)}%)`,
                }}
              />
              <div className="bg-brand-secondary relative h-7 w-full rounded-full max-[450px]:h-5">
                <div
                  className="bg-brand-primary absolute flex h-7 w-7 items-center justify-center rounded-full duration-300 ease-in-out max-[450px]:h-5 max-[450px]:w-5"
                  style={{ rotate: `${(activeCard + 1) * -45}deg` }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 181 180"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-[450px]:w-5"
                  >
                    {/* <circle cx="90.5" cy="90" r="89.5" stroke="#71717A" /> */}
                    <path
                      d="M153.779 89.5249C119.279 89.4959 91.3206 61.5192 91.3206 27.0125C91.3206 61.5247 63.3528 89.5048 28.8452 89.5249C63.3528 89.545 91.3205 117.525 91.3205 152.037L91.3206 152.037C91.3206 117.531 119.279 89.5539 153.779 89.5249Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <section className="flex w-full flex-col items-end gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
              <section className="font-satoshi flex items-center gap-[50px] text-xs font-medium">
                {data.map((_, index) => (
                  <div key={index} className="flex cursor-pointer gap-1" onClick={() => setActiveCard(index)}>
                    <p
                      className={`overflow-hidden duration-200 ${index === activeCard ? 'max-w-[100px]' : 'text-primary/50 max-w-0'}`}
                    >
                      STEP{' '}
                    </p>
                    <p className={`duration-200 ${index === activeCard ? 'text-primary' : 'text-primary/50'}`}>
                      / 0{index + 1} /
                    </p>
                  </div>
                ))}
              </section>

              <div className="text-primary/50 text-xs font-semibold">
                PROGRESS{' '}
                <span className="text-primary">{`${activeCard === data.length - 1 ? 100 : (activeCard + 1) * 33}%`}</span>
                {/* PROGRESS <span className="text-primary">{`${Math.min((activeCard + 1) * 33, 100)}%`}</span> */}
              </div>
            </section>
          </div>
        </div>

        <div className="bg-brand-secondary/70 font-satoshi flex h-full w-full flex-col-reverse gap-0 rounded-[20px] p-[10px] md:h-[345px] md:flex-row md:gap-[50px] xl:w-[960px]">
          <div className="relative flex h-[300px] w-full flex-col justify-normal py-[25px] max-[450px]:h-[340px] max-[450px]:py-0 md:h-full lg:justify-between">
            <AnimatePresence>
              <div className="max-[450px]:relative">
                {data.map((d, index) => (
                  <div key={index} className="absolute top-[30px] px-[10px] sm:px-[30px]">
                    {activeCard === index && (
                      <motion.h1
                        key={index}
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 0.5,
                          },
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        className="leading-[19px] font-medium"
                      >
                        {d.title}
                      </motion.h1>
                    )}
                  </div>
                ))}
              </div>
            </AnimatePresence>
            <AnimatePresence>
              <div className="h-full max-[450px]:relative">
                {data.map((data, index) => (
                  <div
                    key={index}
                    className="absolute bottom-[30px] px-[10px] max-[450px]:top-[140px] max-[450px]:bottom-5 sm:px-[30px]"
                  >
                    {activeCard === index && (
                      <ul key={index} className="flex flex-col gap-2 text-sm leading-[19px] font-medium">
                        <motion.li
                          key={index}
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                            transition: {
                              duration: 0.5,
                            },
                          }}
                          exit={{
                            opacity: 0,
                          }}
                        >
                          Perfect if you need to
                        </motion.li>
                        {data.points.map((d, index) => (
                          <motion.li
                            key={index}
                            initial={{
                              opacity: 0,
                            }}
                            animate={{
                              opacity: 1,
                              transition: {
                                duration: 0.5,
                              },
                            }}
                            exit={{
                              opacity: 0,
                            }}
                            className="text-primary/50"
                          >
                            {d}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </AnimatePresence>
          </div>

          <div className="relative flex h-[250px] w-full items-center justify-center rounded-[15px] bg-white md:h-full md:w-[600px] lg:min-w-1/2">
            <AnimatePresence>
              <motion.div
                key={0}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                className={`absolute h-full w-full ${activeCard === 0 ? '' : 'hidden'}`}
              >
                <Image src={images[0]} alt="image" fill className="rounded-[15px] object-cover" />
              </motion.div>
              <motion.div
                key={1}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                className={`absolute h-full w-full ${activeCard === 1 ? '' : 'hidden'}`}
              >
                <Image src={images[1]} alt="image" fill className="rounded-[15px] object-cover" />
              </motion.div>
              <motion.div
                key={2}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                className={`absolute h-full w-full ${activeCard === 2 ? '' : 'hidden'}`}
              >
                <Image src={images[2]} alt="image" fill className="rounded-[15px] object-cover" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
