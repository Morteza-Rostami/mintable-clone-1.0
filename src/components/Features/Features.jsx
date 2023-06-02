import { Button } from '@chakra-ui/react'
import React from 'react'

const cards = [
  {
    id: 1,
    url: 'https://dgbijzg00pxv8.cloudfront.net/mint_icon.png',
    text: 'Mint your NFTs with no fees'
  },
  {
    id: 2,
    url: 'https://dgbijzg00pxv8.cloudfront.net/auction.png',
    text: 'Put NFTs on sale or on auction'
  },
  {
    id: 3,
    url: 'https://dgbijzg00pxv8.cloudfront.net/paid.png',
    text: 'Get paid for your digital collectibles'
  },
]

const Features = () => {
  return (
    <div
      className='
        flex flex-col gap-10
        bg-violet-100
        p-6
      '
      style={{
        backgroundImage: 'url("https://d1iczm3wxxz9zd.cloudfront.net/trans_bg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* top */}
      <div
        className='
          text-center
        '
      >
        <h2
          className='
            text-3xl font-bold 
            mb-2
          '
        >
        Start Selling Your NFTs
        </h2>
        <h7
          className='
            text-base
          '
        >
        Mint for free | Instant payments
        </h7>
      </div>

      {/* cards */}
      <div
        className='
          flex flex-wrap justify-center items-center gap-10
        '
      >
        {
          cards.length
          ? (
            cards.map(card => {
              return <FeatureCard
                key={card.id}
                item={card}
              />
            })
          )
          : ('')
        }
      </div>

      <div
        className='
          flex justify-center
        '
      >
        <Button
          colorScheme='blue'
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}

const FeatureCard = ({
  item
}) => {
  return (
    <div
      className='
        flex flex-col justify-center items-center gap-4
        text-center
      '
    >
      <div
        className='
          flex justify-center items-center
          w-32 h-32
          bg-indigo-200
          rounded-full
        '
      >
        <img 
          className='
            max-w-full
          '
          src={item.url}
          alt={item.text} 
        />
      </div>
      <p
        className='
          text-sm text-gray-500
        '
      >
        {item.text}
      </p>
    </div>
  )
}

export default Features
