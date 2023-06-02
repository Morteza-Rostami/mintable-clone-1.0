import React from 'react'
import HeroCard from './HeroCard'
import { Button } from '@chakra-ui/react'

const Hero = () => {
  return (
    <div
      className='
        hero
        flex flex-col gap-4

        pb-16

        md:flex-row
      '
    >
      
      {/* hero: left */}

      <div
        className='
          hero__l
          flex flex-col justify-center items-center gap-10
          flex-1 
          pt-16 px-5
          
          md:items-start
          lg:px-20
        '
        style={{
          minWidth: '40%'
        }}
      >
        <div 
          className="
            heading
            flex flex-col justify-center items-center gap-6
            md:items-start
          "
          
        >
          <h1
            className='
              font-bold text-2xl text-slate-800 text-center leading-9
              md:text-4xl
              md:leading-10
              md:text-left
              lg:text-5xl
              lg:font-extrabold

              dark:text-slate-50
            '
          >
          Mint your NFT on the Blockchain for Free!
          </h1>
          <h6
            className='
              inline
              text-lg text-indigo-500 font-semibold text-center
              border-b-2 border-b-indigo-500

              md:text-xl
              md:text-left

              dark:text-indigo-300
              dark:border-b-indigo-300
            '
          >
          Find it. Buy it. Flip it.
          </h6>
        </div> {/* end heading */}

        <div 
          className="
            call-to-action
            flex justify-center gap-4
            w-full

            md:justify-start
            md:w-auto
          "
          style={{
            minWidth: '50%',
          }}
        >
          <Button
            //className='bg-violet-950'
            colorScheme='purple'
            width={'100%'}
          >
            MINT
          </Button>
          <Button
            colorScheme='blue'
            width={'100%'}
          >
            SHOP
          </Button> 
        </div>
      </div>
      
      {/* hero: right */}

      <div
        className='
          hero__r
          flex items-center justify-center
          flex-1
          px-10 pt-16
          aspect-1/1

        '
      >
        <HeroCard/>
      </div>


    </div>
  )
}

export default Hero
