import React from 'react';
// import { Button } from '~/components/ui/button';
// import { MenuIcon } from '~/icons';

export const Header: React.FC = () => {
  return (
    <header className="relative flex w-full items-center justify-between border-b px-[30px] py-5 lg:px-[50px]">
      <p className="font-clash-grotesk flex items-center gap-2 text-xl font-medium">
        <svg
          width="223"
          height="172"
          viewBox="0 0 223 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-[35px]"
        >
          <path
            d="M90.4029 152.126C99.7572 138.455 161.576 28.1373 166.581 19.2009C166.82 18.7745 166.973 18.3805 167.089 17.9059C170.188 5.26896 161.815 1.11682 157.153 0.62603H99.4027C86.8161 0.0787867 88.2466 5.72902 91.0614 9.38243C91.5853 10.0625 92.329 10.5221 93.0682 10.9586C99.1583 14.5549 99.5142 24.2253 96.4027 30.626C93.1035 37.413 46.9027 116.126 46.9027 116.126C46.9027 116.126 26.6529 150.626 8.65289 160.376C-5.74711 168.176 2.65289 171.126 8.65289 171.626H41.6529C72.2529 172.826 80.6527 166.376 90.4029 152.126Z"
            fill="#F25533"
          />
          <path
            d="M149.36 72.5891C152.824 66.5891 161.484 66.5891 164.948 72.5891L197.424 128.839C208.394 147.839 194.682 171.589 172.742 171.589H107.79C100.862 171.589 96.532 164.089 99.9961 158.089L149.36 72.5891Z"
            fill="#F25533"
          />
        </svg>
        Bytearoo
      </p>
      {/* <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      /> */}

      {/* <Button variant="ghost" size="icon" className="font-clash-grotesk bg-transparent hover:bg-transparent">
        <MenuIcon />
      </Button> */}
    </header>
  );
};
