'use client';

import { useEffect } from 'react';
import BuildArmy from './components/build-army';
import DividerMenu from './components/divider-menu';
import FAQs from './components/faqs/faqs';
import Features from './components/features';
import GameEditionsGrid from './components/game-edition';
import HeroSection from './components/hero-section';
import HeroDetails from './components/heros-detail-slider';
import HowToBuy from './components/how-to-buy';
import FactionSlider from './components/meme-kindom';
import Roadmap from './components/roadmap';
import Tokenmoics from './components/tokenomics';
//import bg from '/public/assets/Tokenomicsbackground.webp';
import bg from '/public/assets/Tokenomics-bg.png';

import { lazyLoadBackgrounds } from './ utils/lazyBackgrounds';

export default function Home() {
  useEffect(() => {
    lazyLoadBackgrounds();
  }, []);

  return (
    <div className='overflow-hidden'>
      <HeroSection />
      <DividerMenu />
      <Features />
      <div></div>
      <HeroDetails />
      <FactionSlider />
      <BuildArmy />
      <div
        className='bg-cover bg-center min-h-screen bg-no-repeat lazy-bg'
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <Tokenmoics />
        <Roadmap />
      </div>
      <div
        className='relative bg-bottom bg-cover  bg-no-repeat lazy-bg'
        data-bg='/assets/Tokenomicsbackground.webp'
      >
        <GameEditionsGrid />
        <HowToBuy />
      </div>
      <FAQs />
    </div>
  );
}
