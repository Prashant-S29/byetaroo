'use client';

import React from 'react';

import { motion } from 'framer-motion';

export const Solutions: React.FC = () => {
  return (
    <div className="flex flex-col gap-[30px] p-5 pt-[150px]! sm:p-[30px] lg:p-[50px]">
      <div className="flex flex-col gap-[30px]">
        <section className="relative flex w-full justify-center">
          <div className="relative size-[46px] rounded-md md:size-[50px] md:rounded-lg">
            <div className="bg-brand-primary absolute z-10 flex h-full w-full items-center justify-center rounded-lg">
              <svg width="40" height="30" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.6611 35.0713C22.7736 31.9839 36.7343 7.07075 37.8646 5.05263C37.9185 4.95634 37.9531 4.86737 37.9794 4.76018C38.6791 1.90636 36.7883 0.968675 35.7354 0.857838H22.6936C19.8511 0.734254 20.1742 2.01025 20.8098 2.83531C20.9282 2.9889 21.0961 3.09268 21.2631 3.19127C22.6384 4.00342 22.7188 6.18729 22.0161 7.63279C21.2714 9.16471 10.8482 26.923 10.8374 26.9414L10.8374 26.9414C10.8374 26.9414 6.26436 34.7326 2.19939 36.9345C-1.05258 38.6959 0.844403 39.3621 2.19939 39.4751H9.65184C16.5623 39.7461 18.4592 38.2894 20.6611 35.0713Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M33.9754 17.1093C34.7577 15.7543 36.7135 15.7543 37.4958 17.1093L44.8299 29.8123C47.3072 34.1031 44.2105 39.4666 39.256 39.4666H24.5877C23.0231 39.4666 22.0453 37.7729 22.8276 36.4179L33.9754 17.1093Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>

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
              className="bg-brand-secondary absolute flex size-[46px] items-center justify-center rounded-md md:size-[50px] md:rounded-lg"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-[22deg]"
              >
                <g clipPath="url(#clip0_119_126)">
                  <path
                    d="M16.5311 13.4872L16.973 14.5218C17.1498 14.9356 16.9918 15.3294 16.578 15.5061C16.1641 15.6829 15.7704 15.5249 15.5936 15.1111L15.1517 14.0765L11.0135 15.8443L11.4554 16.8789C11.6322 17.2927 11.4742 17.6864 11.0603 17.8632C10.6465 18.04 10.2528 17.8819 10.076 17.4681L9.63405 16.4336L8.25464 17.0228C7.77185 17.2291 7.23013 17.2974 6.72792 17.2672L7.90644 20.0261C8.40732 21.1985 9.68695 21.7121 10.8595 21.2113L19.1359 17.6757C20.3084 17.1748 20.822 15.8952 20.3211 14.7227L19.1426 11.9639C18.8172 12.3476 18.3933 12.6917 17.9105 12.898L16.5311 13.4872ZM16.4909 5.75653L13.7321 6.93505L13.4375 6.24535C12.9366 5.07285 11.657 4.55926 10.4845 5.06013L7.72564 6.23865C6.55315 6.73953 6.03955 8.01916 6.54042 9.19166L6.83506 9.88137L4.07624 11.0599C3.66241 11.2367 3.50439 11.6304 3.68116 12.0442L4.85969 14.803C5.36056 15.9755 6.6402 16.4891 7.8127 15.9883L17.4686 11.8634C18.6411 11.3626 19.1547 10.0829 18.6538 8.91042L17.4753 6.1516C17.2985 5.73778 16.9047 5.57975 16.4909 5.75653ZM12.3527 7.52432L8.21446 9.2921L7.91983 8.6024C7.74305 8.18858 7.90108 7.79484 8.31491 7.61806L11.0737 6.43954C11.4875 6.26276 11.8813 6.42079 12.0581 6.83461L12.3527 7.52432Z"
                    fill="#F25533"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_126">
                    <rect width="18" height="18" fill="white" transform="translate(0.23938 7.80566) rotate(-23.1314)" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
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
              className="bg-brand-secondary absolute flex size-[46px] items-center justify-center rounded-md md:size-[50px] md:rounded-lg"
            >
              <svg width="24" height="24" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.6045 5.00004C10.6046 5.64655 10.3958 6.27579 10.0093 6.79403C9.62279 7.31227 9.07919 7.69179 8.4595 7.87604C8.6375 8.09904 8.8755 8.35904 9.1795 8.62004C9.9055 9.24204 11.0135 9.87204 12.6045 9.98304C12.6095 9.23188 12.8961 8.50993 13.4077 7.95989C13.9193 7.40985 14.6186 7.07174 15.3674 7.01239C16.1163 6.95305 16.8601 7.17679 17.4519 7.63938C18.0438 8.10198 18.4405 8.76977 18.5638 9.51077C18.687 10.2518 18.5278 11.012 18.1176 11.6413C17.7074 12.2706 17.076 12.7231 16.3483 12.9093C15.6206 13.0956 14.8495 13.0021 14.1874 12.6472C13.5253 12.2924 13.0204 11.7021 12.7725 10.993C10.8125 10.915 9.4305 10.152 8.5295 9.38004C8.38237 9.25333 8.24058 9.12055 8.1045 8.98204L8.1045 12.042C8.8462 12.1674 9.51373 12.5668 9.97482 13.1612C10.4359 13.7555 10.6569 14.5014 10.594 15.251C10.5311 16.0005 10.1889 16.6991 9.63518 17.2083C9.08149 17.7175 8.35672 18.0001 7.6045 18.0001C6.85228 18.0001 6.12751 17.7175 5.57381 17.2083C5.02012 16.6991 4.67791 16.0005 4.61501 15.251C4.5521 14.5014 4.77309 13.7555 5.23418 13.1612C5.69526 12.5668 6.3628 12.1674 7.1045 12.042L7.1045 7.95804C6.54053 7.86271 6.01556 7.60815 5.59147 7.22435C5.16739 6.84056 4.86185 6.34352 4.71088 5.79184C4.55992 5.24015 4.5698 4.6568 4.73939 4.11055C4.90897 3.56429 5.23117 3.0779 5.66802 2.7087C6.10487 2.3395 6.63817 2.10287 7.20504 2.02671C7.77192 1.95056 8.34876 2.03804 8.86756 2.27885C9.38637 2.51966 9.82552 2.90377 10.1333 3.38589C10.441 3.86802 10.6045 4.42807 10.6045 5.00004Z"
                  fill="#F25533"
                />
              </svg>
            </motion.div>
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
              className="bg-brand-secondary absolute flex size-[46px] items-center justify-center rounded-md md:size-[50px] md:rounded-lg"
            >
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-rotate-12"
              >
                <g clipPath="url(#clip0_119_104)">
                  <path
                    d="M18.0444 5.3076L17.049 4.22739L16.4094 5.54956C15.3966 7.63644 13.2966 9.23428 11.2208 10.1804C7.15665 12.0337 5.54937 14.8754 5.81022 17.6887C6.05982 20.3809 8.00852 22.7478 10.3985 23.7509L10.9516 23.9826C9.79217 22.7018 9.47938 20.4153 10.2403 18.9996C10.9898 17.6087 12.4656 16.5339 14.892 15.8557L16.115 15.5153L16.1602 16.7848C16.1864 17.5348 16.4181 18.1993 16.654 18.8744C16.7667 19.1995 16.8815 19.5284 16.9749 19.8697C17.2965 21.0537 17.1313 22.2164 16.4074 23.2052C15.7488 24.1037 14.9184 24.7182 13.9652 24.9139L14.9262 25.0843C17.3217 25.5094 19.2581 25.2175 20.7548 24.2166C22.2386 23.2243 23.1219 21.6445 23.6527 19.8421C24.1471 18.1634 23.967 16.2297 23.5776 14.5503C23.1207 12.5831 22.289 10.8162 21.3305 9.05876C20.957 9.45959 20.9193 9.65489 20.2135 10.2674C20.0767 8.4153 19.3114 6.66544 18.0444 5.3076Z"
                    fill="#F25533"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_104">
                    <rect width="24" height="24" fill="white" transform="translate(7.60449) rotate(16.41)" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>

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
              className="bg-brand-secondary absolute flex size-[46px] items-center justify-center rounded-md md:size-[50px] md:rounded-lg"
            >
              <svg
                width="40"
                height="41"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-[30deg]"
              >
                <g clipPath="url(#clip0_119_123)">
                  <path
                    d="M12.4262 7.58079C11.2377 8.23519 10.1272 9.02233 9.11609 9.92711L8.06958 10.8641C7.99454 10.9314 7.94504 11.0225 7.92945 11.1221C7.91385 11.2217 7.93312 11.3236 7.98399 11.4106L8.59548 12.4594C9.6238 14.2221 10.8062 15.8902 12.1289 17.4443L12.916 18.3686C12.9868 18.4519 13.0863 18.5056 13.1948 18.5192C13.3033 18.5329 13.413 18.5053 13.5022 18.4421L14.9806 17.3942L18.726 22.6781C18.7785 22.7519 18.8526 22.8076 18.938 22.8375C19.0235 22.8674 19.1161 22.87 19.2032 22.845C19.2902 22.8201 19.3673 22.7687 19.4239 22.698C19.4805 22.6274 19.5138 22.5409 19.5192 22.4505L19.5504 21.9029C19.7378 18.6423 19.4097 15.3725 18.5784 12.2141L18.4575 11.7561C18.4395 11.6877 18.4052 11.6246 18.3576 11.5724C18.3099 11.5201 18.2503 11.4802 18.1838 11.4561C18.1173 11.4319 18.046 11.4242 17.9759 11.4337C17.9058 11.4431 17.839 11.4694 17.7813 11.5103L15.8447 12.8831L14.2903 7.17224C14.2729 7.10831 14.2413 7.04915 14.1977 6.99923C14.1542 6.94931 14.0998 6.90993 14.0389 6.88407C13.9779 6.8582 13.9118 6.84652 13.8456 6.84992C13.7795 6.85331 13.715 6.87168 13.6569 6.90365L12.4262 7.58079Z"
                    fill="#F25533"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_123">
                    <rect width="21" height="21" fill="white" transform="translate(0.604492 13) rotate(-35.33)" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>

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
              className="bg-brand-secondary absolute flex size-[46px] items-center justify-center rounded-md md:size-[50px] md:rounded-lg"
            >
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_119_112)">
                  <path
                    d="M25.2958 13.0538C23.7355 7.75582 18.176 4.72598 12.878 6.28628C7.58001 7.84658 4.55017 13.406 6.11047 18.704C7.67076 24.002 13.2302 27.0319 18.5282 25.4716C23.8262 23.9113 26.8561 18.3519 25.2958 13.0538ZM8.029 18.139C7.42959 16.1037 7.66325 13.9136 8.67858 12.0506C9.69391 10.1876 11.4077 8.80422 13.443 8.20481C15.4783 7.6054 17.6684 7.83906 19.5314 8.85439C21.3944 9.86972 22.7778 11.5836 23.3772 13.6189C23.9766 15.6542 23.743 17.8442 22.7276 19.7072C21.7123 21.5703 19.9985 22.9536 17.9632 23.553C15.9279 24.1525 13.7378 23.9188 11.8748 22.9035C10.0118 21.8881 8.6284 20.1743 8.029 18.139ZM14.0081 10.1233C12.4816 10.5729 11.1962 11.6104 10.4347 13.0077C9.67322 14.405 9.49797 16.0475 9.94753 17.574C10.3971 19.1005 11.4346 20.3858 12.8319 21.1473C14.2291 21.9088 15.8717 22.0841 17.3982 21.6345C18.9246 21.185 20.21 20.1474 20.9715 18.7502C21.733 17.3529 21.9083 15.7103 21.4587 14.1839C21.0091 12.6574 19.9716 11.372 18.5743 10.6105C17.1771 9.84903 15.5345 9.67378 14.0081 10.1233Z"
                    fill="#F25533"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_112">
                    <rect width="24" height="24" fill="white" transform="translate(30.6044 24) rotate(163.59)" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
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
              className="bg-brand-secondary absolute flex size-[46px] items-center justify-center rounded-md md:size-[50px] md:rounded-lg"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-mt-1"
              >
                <g clipPath="url(#clip0_119_118)">
                  <path
                    d="M17.967 10.7344L22.1628 13.7084L19.1887 17.9041"
                    stroke="#F25533"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.1628 13.7086L12.0355 15.4342C11.8694 15.4608 11.6994 15.4212 11.5622 15.3239C11.4249 15.2266 11.3312 15.0793 11.3013 14.9138L10.5988 10.7912C10.5689 10.6256 10.4752 10.4783 10.338 10.381C10.2007 10.2837 10.0307 10.2441 9.86457 10.2707L3.32217 11.3855"
                    stroke="#F25533"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_118">
                    <rect width="18" height="18" fill="white" transform="translate(10.6045) rotate(35.33)" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
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
              className="bg-brand-secondary absolute flex size-[46px] items-center justify-center rounded-md md:size-[50px] md:rounded-lg"
            >
              <svg
                width="32"
                height="31"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-[-18deg]"
              >
                <g clipPath="url(#clip0_119_109)">
                  <path
                    d="M11.3983 4.62923C10.5304 3.72803 9.14552 2.92664 7.17054 2.17596C6.98492 2.10346 6.7816 2.08926 6.58771 2.13527C6.42838 2.17352 6.28089 2.25033 6.15821 2.35896C6.03553 2.46758 5.94143 2.60468 5.88417 2.75821L2.74472 11.1295C2.5325 11.6954 2.77502 12.2733 3.30872 12.4734C5.38823 13.2533 7.40132 14.2299 8.20784 15.8794C8.21885 15.902 8.23626 15.9209 8.25792 15.9337C8.27958 15.9466 8.30453 15.9527 8.32967 15.9515C8.35481 15.9503 8.37904 15.9417 8.39933 15.9268C8.41963 15.9119 8.4351 15.8914 8.44383 15.8678L12.143 6.0039C12.168 5.93736 12.1784 5.86624 12.1736 5.79533C12.1687 5.72443 12.1487 5.65538 12.1149 5.59286C11.9205 5.24087 11.6794 4.91674 11.3983 4.62923ZM19.8089 7.09255C19.6929 6.93062 19.5303 6.80792 19.3427 6.74083C17.3612 6.00771 15.7912 5.69964 14.5443 5.80908C14.1436 5.84052 13.7489 5.92578 13.3709 6.06256C13.3044 6.08753 13.244 6.12645 13.1938 6.17669C13.1436 6.22694 13.1047 6.28735 13.0798 6.35387L9.38037 16.2183C9.37186 16.241 9.37023 16.2656 9.37568 16.2892C9.38112 16.3127 9.39341 16.3342 9.41099 16.3508C9.42858 16.3674 9.45067 16.3784 9.47451 16.3825C9.49835 16.3866 9.52287 16.3836 9.54499 16.3738C10.5759 15.9094 12.128 15.7799 15.4823 17.0382C15.7306 17.1313 16.0058 17.122 16.2472 17.0122C16.4887 16.9025 16.6766 16.7013 16.7698 16.453L19.9301 8.0261C19.988 7.87251 20.0073 7.70699 19.9862 7.54418C19.9651 7.38136 19.9042 7.22626 19.8089 7.09255Z"
                    fill="#F25533"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_109">
                    <rect width="16" height="16" fill="white" transform="translate(6.29272 0.244629) rotate(20.5573)" />
                  </clipPath>
                </defs>
              </svg>
            </motion.div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-5">
          <h1 className="font-clash-grotesk max-w-[500px] text-center text-[32px] leading-none font-medium max-[450px]:text-[28px] sm:text-[36px] md:text-[40px]">
            We provide solutions that solves your problems
          </h1>
          <p className="font-satoshi max-w-[600px] text-center">
            We always ensure that we deliver results on time. We always tried to share our methodology for everyone to
            explore how we work. These projects very well explains our techniques to craft products that deliver
            results.
          </p>
        </section>

        {/* <div className="bg-brand-secondary h-[300px] w-full rounded-[26px] sm:h-[400px] sm:rounded-[30px]" /> */}

        {/* <section className="flex flex-col justify-between gap-5 lg:flex-row">
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
        </section> */}
      </div>
    </div>
  );
};
