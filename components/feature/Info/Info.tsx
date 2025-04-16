import React from 'react';
import Image from 'next/image';

// assets
import { logo } from '~/public';
// import { Button } from '~/components/ui/button';
// import { PlusIcon } from '~/icons';

export const Info: React.FC = () => {
  return (
    <section className="flex w-full flex-col gap-5 p-5 sm:gap-[30px] sm:p-[30px] lg:gap-[50px] lg:p-[50px]">
      <div className="bg-brand-secondary relative grid min-h-fit w-full grid-cols-2 gap-2 overflow-hidden rounded-[20px] p-2 md:h-[617px] lg:grid-cols-3 xl:grid-cols-5 xl:grid-rows-5">
        <div className="row-span-2 hidden h-full w-full rounded-[14px] bg-white/40 xl:block"></div>
        <div className="row-span-2 hidden h-full w-full rounded-[14px] bg-white/40 xl:row-span-1 xl:block"></div>
        <div className="row-span-2 block h-full w-full rounded-[14px] bg-white/40 max-[450px]:hidden lg:hidden xl:block"></div>

        <div className="row-span-2 flex h-full w-full flex-col rounded-[14px] bg-white p-5 max-[450px]:col-span-2">
          <section>
            <p className="font-clash-grotesk text-xl leading-tight">Best in class</p>
            <p className="font-clash-grotesk text-xl leading-tight font-medium">Project Management</p>
          </section>

          <section className="flex w-full flex-col gap-2">
            <div className="mt-5 flex items-center gap-2">
              <div className="bg-brand-primary relative flex h-[50px] max-w-[100px] min-w-[100px] gap-1 overflow-hidden rounded-lg">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div key={index} className="bg-brand-secondary/30 h-[60px] min-w-[1px] rotate-12" />
                ))}
                <p className="absolute right-2 bottom-2 font-sans text-xs leading-none font-medium text-white">30%</p>
              </div>
              <div className="h-5 min-w-[1px] bg-black" />
              <div className="bg-brand-secondary relative flex h-[50px] w-full gap-1 overflow-hidden rounded-lg">
                {Array.from({ length: 30 }).map((_, index) => (
                  <div key={index} className="bg-brand-primary/10 h-[60px] min-w-[1px] rotate-12" />
                ))}
                <p className="absolute right-2 bottom-2 font-sans text-xs leading-none font-medium text-black">40%</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-brand-secondary relative flex h-[50px] min-w-[70px] gap-1 overflow-hidden rounded-lg">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div key={index} className="bg-brand-primary/10 h-[60px] min-w-[1px] rotate-12" />
                ))}
                <p className="absolute right-2 bottom-2 font-sans text-xs leading-none font-medium text-black">20%</p>
              </div>
              <div className="h-5 min-w-[1px] bg-black" />

              <div className="bg-brand-primary relative flex h-[50px] w-full gap-1 overflow-hidden rounded-lg">
                {Array.from({ length: 40 }).map((_, index) => (
                  <div key={index} className="bg-brand-secondary/30 h-[60px] min-w-[1px] rotate-12" />
                ))}
                <p className="absolute right-2 bottom-2 font-sans text-xs leading-none font-medium text-white">80%</p>
              </div>
            </div>
          </section>
        </div>
        <div className="row-span-2 hidden h-full w-full rounded-[14px] bg-white/40 lg:block"></div>
        <div className="bg-brand-primary row-span-2 flex h-[150px] w-full flex-col items-center justify-center rounded-[14px] leading-none max-[450px]:col-span-2 lg:h-full xl:row-span-1">
          <h1 className="font-clash-grotesk text-[32px] font-medium text-white sm:text-[36px] md:text-[40px]">5+</h1>
          <p className="text-white">years of experience</p>
        </div>
        <div className="row-span-2 block h-full w-full rounded-[14px] bg-white/40 max-[450px]:hidden lg:hidden"></div>

        <div className="col-span-2 row-span-2 flex h-full w-full flex-col justify-between rounded-[14px] bg-white p-5">
          <h1 className="font-clash-grotesk text-[32px] leading-none sm:text-[36px] md:text-[40px]">
            National to International <span className="text-brand-primary font-medium">Client Support</span>
          </h1>
          <section className="mt-5 flex flex-wrap items-center gap-1">
            {['India', 'USA', 'UK', 'Canada', 'Australia', 'Japan', 'South Korea', 'Germany', 'France', 'Spain'].map(
              (country, index) => (
                <p
                  key={index}
                  className="font-satoshi bg-brand-secondary flex min-w-fit items-center gap-2 rounded-full px-4 py-2 text-xs leading-none text-black sm:text-sm"
                >
                  {country}
                  <span className="-mt-[1px] text-xs leading-none text-black/70">x</span>
                </p>
              ),
            )}
          </section>
        </div>
        <div className="col-span-2 row-span-2 flex h-[200px] w-full flex-col items-center justify-center gap-2 rounded-[14px] bg-white lg:col-span-1 lg:h-full">
          <svg
            width="223"
            height="172"
            viewBox="0 0 223 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-[80px]"
          >
            <path
              d="M90.4029 152.126C99.7572 138.455 161.576 28.1373 166.581 19.2009C166.82 18.7745 166.973 18.3805 167.089 17.9059C170.188 5.26896 161.815 1.11682 157.153 0.62603H99.4027C86.8161 0.0787867 88.2466 5.72902 91.0614 9.38243C91.5853 10.0625 92.329 10.5221 93.0682 10.9586C99.1583 14.5549 99.5142 24.2253 96.4027 30.626C93.1035 37.413 46.9027 116.126 46.9027 116.126C46.9027 116.126 26.6529 150.626 8.65289 160.376C-5.74711 168.176 2.65289 171.126 8.65289 171.626H41.6529C72.2529 172.826 80.6527 166.376 90.4029 152.126Z"
              fill="var(--brand-primary)"
            />
            <path
              d="M149.36 72.5891C152.824 66.5891 161.484 66.5891 164.948 72.5891L197.424 128.839C208.394 147.839 194.682 171.589 172.742 171.589H107.79C100.862 171.589 96.532 164.089 99.9961 158.089L149.36 72.5891Z"
              fill="var(--brand-primary)"
            />
          </svg>
          {/* <Button className="bg-brand-primary hover:bg-brand-primary relative rounded-full px-7 py-3 pr-6! font-normal shadow-[0px_0px_3px_rgb(243,86,52)] duration-150 hover:shadow-[0_0px_7px_rgb(243,86,52,0.5)]">
            <PlusIcon />
            New Project
          </Button> */}
        </div>
        <div className="col-span-2 row-span-3 flex h-full w-full flex-col justify-between rounded-[14px] bg-white p-5">
          <section>
            <p className="font-clash-grotesk text-xl leading-tight">Get faster results with</p>
            <p className="font-clash-grotesk text-xl leading-tight font-medium">affordable solutions</p>
          </section>
          <div className="relative flex items-end gap-2">
            <div className="font-satoshi flex flex-col items-end justify-between gap-8 pb-8">
              <p className="text-xs text-black/50">2000</p>
              <p className="text-xs text-black/50">1500</p>
              <p className="text-xs text-black/50">1000</p>
              <p className="text-xs text-black/50">500</p>
              <p className="text-xs text-black/50">0</p>
            </div>
            <div className="relative flex w-full flex-col">
              <div className="absolute -top-3 h-[0.5px] w-full bg-black/10" />

              {/* <div className="bg-brand-primary absolute -top-3 left-[30px] size-[9px] -translate-y-1/2 rounded-full" /> */}
              <div className="grid h-[200px] w-full grid-cols-6 gap-2 p-4 max-[450px]:grid-cols-3">
                <div className="flex h-full w-full flex-col items-center gap-2">
                  <div className="bg-brand-secondary relative flex min-h-[50px] w-full gap-1 overflow-hidden rounded-md">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <div key={index} className="bg-brand-primary/10 h-full min-w-[1px] rotate-12" />
                    ))}
                  </div>
                  <div className="h-[1px] w-5 bg-black" />
                  <div className="bg-brand-primary relative flex h-full w-full gap-1 overflow-hidden rounded-md"></div>
                </div>
                <div className="flex h-full w-full flex-col items-center gap-2">
                  <div className="bg-brand-secondary relative flex min-h-[80px] w-full gap-1 overflow-hidden rounded-md">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <div key={index} className="bg-brand-primary/10 h-full min-w-[1px] rotate-12" />
                    ))}
                  </div>
                  <div className="h-[1px] w-5 bg-black" />
                  <div className="bg-brand-primary relative flex h-full w-full gap-1 overflow-hidden rounded-md"></div>
                </div>
                <div className="flex h-full w-full flex-col items-center gap-2">
                  <div className="bg-brand-secondary relative flex min-h-[30px] w-full gap-1 overflow-hidden rounded-md">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <div key={index} className="bg-brand-primary/10 h-full min-w-[1px] rotate-12" />
                    ))}
                  </div>
                  <div className="h-[1px] w-5 bg-black" />
                  <div className="bg-brand-primary relative flex h-full w-full gap-1 overflow-hidden rounded-md"></div>
                </div>
                <div className="flex h-full w-full flex-col items-center gap-2 max-[450px]:hidden">
                  <div className="bg-brand-secondary relative flex min-h-[100px] w-full gap-1 overflow-hidden rounded-md">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <div key={index} className="bg-brand-primary/10 h-full min-w-[1px] rotate-12" />
                    ))}
                  </div>
                  <div className="h-[1px] w-5 bg-black" />
                  <div className="bg-brand-primary relative flex h-full w-full gap-1 overflow-hidden rounded-md"></div>
                </div>
                <div className="flex h-full w-full flex-col items-center gap-2 max-[450px]:hidden">
                  <div className="bg-brand-secondary relative flex min-h-[40px] w-full gap-1 overflow-hidden rounded-md">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <div key={index} className="bg-brand-primary/10 h-full min-w-[1px] rotate-12" />
                    ))}
                  </div>
                  <div className="h-[1px] w-5 bg-black" />
                  <div className="bg-brand-primary relative flex h-full w-full gap-1 overflow-hidden rounded-md"></div>
                </div>
                <div className="flex h-full w-full flex-col items-center gap-2 max-[450px]:hidden">
                  <div className="bg-brand-secondary relative flex min-h-[110px] w-full gap-1 overflow-hidden rounded-md">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <div key={index} className="bg-brand-primary/10 h-full min-w-[1px] rotate-12" />
                    ))}
                  </div>
                  <div className="h-[1px] w-5 bg-black" />
                  <div className="bg-brand-primary relative flex h-full w-full gap-1 overflow-hidden rounded-md"></div>
                </div>
              </div>
              <div className="grid h-5 w-full grid-cols-6 items-center justify-center gap-2 px-4 text-center">
                <p className="text-xs text-black/50">Jan</p>
                <p className="text-xs text-black/50">Feb</p>
                <p className="text-xs text-black/50">Mar</p>
                <p className="text-xs text-black/50">Apr</p>
                <p className="text-xs text-black/50">May</p>
                <p className="text-xs text-black/50">Jun</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center rounded-[14px] bg-white p-5 max-[450px]:col-span-2">
          <p className="font-clash-grotesk text-lg leading-tight sm:text-xl">Client Portal for</p>
          <p className="font-clash-grotesk text-lg leading-tight font-medium sm:text-xl">Progress Tracking</p>
        </div>
        <div className="h-full w-full rounded-[14px] bg-white/40 max-[450px]:hidden"></div>
        <div className="hidden h-full w-full rounded-[14px] bg-white/40 lg:block"></div>
      </div>

      <div className="flex items-start justify-between gap-5 sm:gap-[30px] lg:gap-[50px]">
        <p className="font-clash-grotesk xl sm:text-[36px]:md:text-[40px] max-w-[1117px] text-[28px] leading-[30px] sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[36px] lg:leading-[40px] xl:leading-[42px]">
          We are a B2B specialized agency that helps you plan, create, and execute a strategy to make your technology
          solution relatable for faster adoption.
        </p>
        <Image src={logo} alt="logo" width={123} height={82} className="hidden min-w-[123px] lg:block" />
      </div>
    </section>
  );
};
