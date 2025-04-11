import React from 'react';
import { Expertise, Hero, Info, Solutions, Team, WeAreBest, WeAreBytearoo } from '~/components/feature';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Info />
      <WeAreBest />
      <Expertise />
      <WeAreBytearoo />
      <Team />
      <Solutions />

      {/* <div className="h-screen w-full bg-black" /> */}
    </>
  );
};

export default Home;
