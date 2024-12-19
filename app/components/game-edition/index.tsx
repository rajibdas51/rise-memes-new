import React from 'react';
import Image from 'next/image';
import CustomButton from '../common/custom-button';
import TitleHeading from '../common/title-heading';
import Section from '../common/section';

interface EditionCardProps {
  title: string;
  image: string;
  rewards: { text: string }[];
  pricingText: string;
  price: string;
  pricingPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  pricingPositionTwo: 'top-left' | '';
  boldFirstReward?: boolean;
}

const EditionCard: React.FC<EditionCardProps> = ({
  title,
  image,
  rewards,
  pricingText,
  price,
  pricingPosition = 'top-left',
  pricingPositionTwo = 'three-four',
}) => {
  const getPricingTextContainerStyles = () => {
    const baseStyles =
      'absolute text-[#fff1de] text-glow text-xs w-[55%] xl:w-[45%] transform ';
    const positions = {
      'top-left': `${
        pricingPositionTwo ? 'top-[60px] sm:top-20' : ''
      } top-20 -left-4 -rotate-6`,
      'top-right': 'top-4 right-4 rotate-6',
      'bottom-left':
        'top-[310px] xs:top-[320px] sm:top-[320px]  lg:top-[280px] xl:top-[300px] -left-4 -rotate-6',
      'bottom-right': 'bottom-4 right-4 -rotate-6',
    };
    return `${baseStyles} ${positions[pricingPosition]}`;
  };

  return (
    <div
      id='gameedition'
      className=' max-w-md mx-auto lg:p-8 p-2 relative flex flex-col justify-between bg-transparent'
    >
      <div className=' relative bg-transparent p-6 flex-grow'>
        <h2 className='text-2xl md:text-3xl mb-10 text-center text-nowrap text-gradient font-avon font-bold'>
          {title}
        </h2>

        <div className='relative w-full flex justify-center items-center'>
          <div className='absolute w-[350px] h-[300px] rounded-full bg-[#BE8A29] opacity-30 blur-3xl -z-10'></div>
          <Image
            src={image}
            alt={title.toLowerCase()}
            width={350}
            loading='lazy'
            height={350}
            className='drop-shadow-custom pt-6 lg:pt-0'
          />
        </div>

        {pricingText && price && (
          <div className={getPricingTextContainerStyles()}>
            <span>Buy</span>
            <span className='text-[#ca8b3b] text-lg'>{price}</span>{' '}
            <span>{pricingText}</span>
          </div>
        )}

        <ul className='space-y-2 mb-4 mt-16 md:mt-12'>
          {rewards.map((reward, index) => (
            <li key={index} className='flex items-start space-x-3'>
              <Image
                src='/assets/game-edition/point.svg'
                alt='reward'
                width={15}
                height={15}
                loading='lazy'
                className='object-contain'
              />
              <span
                className={` ${
                  index === 0
                    ? 'font-[600] text-green-500 '
                    : 'text-[#fff1de] text-glow'
                }  `}
              >
                {reward.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className='w-full px-20 lg:px-28 relative flex justify-center items-center'>
        <div className='absolute inset-0 inset-x-32 rounded-full bg-[#BE8A29] opacity-100 blur-3xl -z-10'></div>
        <CustomButton
          className='px-14 flex items-center justify-center'
          mainStyle='w-full'
          label='BUY'
        />
      </div>
    </div>
  );
};

const GameEditionsGrid: React.FC = () => {
  const editions = [
    {
      title: 'WARRIOR EDITION',
      price: ' $100 Worth ',
      image: '/assets/game-edition/warrior-edition.png',
      rewards: [
        { text: '+5% TOKENS' },
        { text: 'PREMIUM GAME CHESTS WITH UNIQUE ITEMS' },
        { text: 'LEVEL 1 RESOURCES PACKS' },
        { text: 'EPIC GAME ITEMS' },
        { text: 'X1.5 BOOST TO EARNING RISE TOKENS FOR 1 MONTH' },
      ],
    },
    {
      title: 'DUKE EDITION',
      price: ' $250 Worth ',
      image: '/assets/game-edition/duke-edition.png',
      rewards: [
        { text: '+10% TOKENS' },
        { text: 'EPIC GAME CHESTS WITH UNIQUE ITEMS' },
        { text: 'LEVEL 2 RESOURCES PACKS' },
        { text: 'LEGENDARY GAME ITEMS' },
        { text: 'X2 BOOST TO EARNING RISE TOKENS FOR 2 MONTH' },
      ],
    },
    {
      title: 'KING EDITION',
      price: ' $1000 Worth ',
      image: '/assets/game-edition/king-edition.png',
      rewards: [
        { text: '+15% TOKENS' },
        { text: 'X3 BOOST TO EARNING RISE TOKENS FOR 3 MONTH' },
        { text: 'LEGENDARY GAME CHESTS WITH UNIQUE ITEMS' },
        { text: 'LEVEL 3 RESOURCES PACKS' },
        { text: 'LEGENDARY GAME ITEMS' },
      ],
    },
    {
      title: "COLLECTOR'S EDITION",
      price: ' $2500 Worth ',
      image: '/assets/game-edition/collector-edition.png',
      rewards: [
        { text: '+20% TOKENS' },
        { text: 'X5 BOOST TO EARNING RISE TOKENS FOR 5 MONTH' },
        { text: 'LEGENDARY GAME CHESTS WITH UNIQUE ITEMS' },
        { text: 'LEVEL 4 RESOURCES PACKS' },
        { text: 'LEGENDARY GAME ITEMS' },
      ],
    },
    {
      title: 'LEGENDARY EDITION',
      price: ' $5000 Worth ',
      image: '/assets/game-edition/legendary-edtion.png',
      rewards: [
        { text: '+25% TOKENS' },
        { text: 'X10 BOOST TO EARNING RISE TOKENS FOR 5 MONTH' },
        { text: 'LEGENDARY GAME CHESTS WITH UNIQUE ITEMS' },
        { text: 'LEVEL 5 RESOURCES PACKS' },
        { text: 'LEGENDARY GAME ITEMS' },
      ],
    },
  ];

  return (
    <Section>
      <div className='absolute inset-0 bg-black opacity-40'></div>

      <div data-aos='zoom-in' className='relative z-10 py-10'>
        <TitleHeading>GAME EDITIONS</TitleHeading>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {editions.map((edition, index) => (
            <div
              key={edition.title}
              className={`flex justify-center
              ${index >= 3 ? 'xl:col-span-1 xl:translate-x-1/2' : ''}
              ${index === 3 ? 'xl:ml-auto' : ''}
              ${index === 4 ? 'xl:mr-auto' : ''}
            `}
            >
              <EditionCard
                title={edition.title}
                image={edition.image}
                rewards={edition.rewards}
                price={edition.price}
                pricingPosition={index <= 1 ? 'bottom-left' : 'top-left'}
                pricingPositionTwo={index == 2 || index == 4 ? 'top-left' : ''}
                pricingText='of $RISE Tokens and Enjoy The Following Rewards!'
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default GameEditionsGrid;
