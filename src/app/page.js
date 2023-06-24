import React from 'react';
import HeroSection from './components/HeroSection';
import HeroSectionEx from './components/HeroSectionEx';

const page = () => {
  return (
    <>
      <HeroSection title={"Let\'s Watch TOGETHER"} />
      <HeroSectionEx/>
    </>
  );
};

export default page;