import { Button, Input } from '@chakra-ui/react'
import React from 'react'

const cards = [
  {
    id: 1,
    url: 'https://dgbijzg00pxv8.cloudfront.net/what_are.png',
    title: 'What Are Digital Items (NFTs)'
  },
  {
    id: 2,
    url: 'https://dgbijzg00pxv8.cloudfront.net/create_store.png',
    title: 'How Do I Create A Store?'
  },
  {
    id: 3,
    url: 'https://dgbijzg00pxv8.cloudfront.net/how_sell.png',
    title: 'How Can I Sell More Items'
  },
  {
    id: 4,
    url: 'https://dgbijzg00pxv8.cloudfront.net/how_promote.png',
    title: 'How Can I Promote My Items'
  },
]

const Academy = () => {
  return (
    <div
      className='
        academy
        flex flex-col gap-10
        py-10
        px-4
      '
    >
      <div
        className='
          academy__top
        '
      >
        <h2
          className='
            text-center font-bold text-xl
            mb-2
            dark:text-white
          '
        >
        Mintable Academy
        </h2>
        <p
          className='
            text-center text-base
            dark:text-white
          '
        >
        Learn how to use Mintable to buy/sell digital items and how to get paid for your digital collectibles
        </p>
      </div>

      {/* cards */}
      <div
        className='
          academy__cards
          flex gap-4 flex-wrap justify-center
        '
      >
        {
          cards.length
          ? (
            cards.map(card => {
              return <AcademyCard
                key={card.id}
                card={card}
              />
            })
          ) 
          : ('')
        }
      </div>
      
      {/* contact form */}
      <form
        className='
          flex flex-col items-center gap-5
          self-center
          p-10
          px-16
          text-slate-100
          rounded-md
        '
        style={{
          background: 'linear-gradient(86.09deg,#9258f0 3.65%,#d38bff 88.1%)',
          marginBottom: '-210px'
        }}
      >
        <div>
          <h2
            className='
              text-center text-xl font-semibold text-white
              mb-2
            '
          >
            Join Our Newsletter
          </h2>
          <p
            className='
              text-center
            '
            style={{
              maxWidth: '400px'
            }}
          >
          To get updated on new NFTs, Exclusive Drops, Live Auctions and more!
          </p>
        </div>
        <div
          className='
            flex flex-col items-stretch gap-5
            w-full
            -[&>input]:w-full
          '
        >
          <Input 
            placeholder='Your Name' 
            size='md' 
          />
          <Input 
            placeholder='Your Email' 
            size='md' 
          />
        </div>
        <Button
          colorScheme='whiteAlpha'
          width={'30%'}
        >
          Join
        </Button>
      </form>

    </div>
  )
}

const AcademyCard = ({
  card
}) => {
  return (
    <div>
      <img 
        className='
          mb-2
        '
        src={card.url}
        alt={card.title}
      />
      <p
        className='
          text-center
          dark:text-white
        '
      >
        {card.title}
      </p>
    </div>
  )
}

export default Academy
