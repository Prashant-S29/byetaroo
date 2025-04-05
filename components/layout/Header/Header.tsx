import Image from 'next/image';
import React from 'react';
import { Button } from '~/components/ui/button';
import { MenuIcon } from '~/icons';
import { logo } from '~/public';

export const Header: React.FC = () => {
  return (
    <header className="relative flex w-full items-center justify-between border-b px-[30px] py-5 lg:px-[50px]">
      <strong className="font-clash-grotesk text-xl font-medium">Bytearoo</strong>
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <Button variant="ghost" size="icon" className="font-clash-grotesk bg-transparent hover:bg-transparent">
        <MenuIcon />
      </Button>
    </header>
  );
};
