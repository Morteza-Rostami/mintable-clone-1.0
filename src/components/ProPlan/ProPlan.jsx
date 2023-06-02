import React from 'react'
import { Link } from 'react-router-dom'

const cards = [
  {
    id: 1,
    url: 'https://dgbijzg00pxv8.cloudfront.net/sale_icon.png',
    title: 'Advertising',
    text: 'Get eyes on your items and increase total sales'
  },
  {
    id: 2,
    url: 'https://dgbijzg00pxv8.cloudfront.net/custom_store.png',
    title: 'Custom Stores',
    text: 'Custom designed store pages just for you'
  },
  {
    id: 3,
    url: 'https://dgbijzg00pxv8.cloudfront.net/24_7.png',
    title: 'VIP Treatment',
    text: '24/7 customer service for all your Mintable needs'
  },
]

const ProPlan = () => {
  return (
    <div
      className='
        flex justify-center items-center
        py-10
      '
      style={{
        backgroundImage: 'url("https://d1iczm3wxxz9zd.cloudfront.net/pro_bg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* big card wraper */}
      <div
        className='
          flex flex-col items-center justify-center gap-2
          bg-slate-50
          rounded-md
          overflow-hidden

          max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
        '
        style={{
          maxWidth: '1200px',
          width: '100%'
        }}
      >
        {/* wrap: heading & cards */}
        <div
          className='
            flex flex-col gap-8
            p-6
          '
        >
          {/* top heading */}
          <div
            className='
              flex justify-center items-center gap-2
              text-center
            '
          >
            <img 
              src="https://dgbijzg00pxv8.cloudfront.net/crown.png" 
              alt="pro" 
            />
            <h2
              className='
                font-bold text-2xl
              '
            >
              Mintable Pro
            </h2>
          </div>
          {/* cards */}
          <div
            className='
              flex flex-col gap-8
              lg:gap-16
              lg:flex-row
            '
        
          >
            {
              cards.length
              ? (
                cards.map(card => {
                  return <ProCard
                    key={card.id}
                    card={card}
                  />
                })
              )
              : ('')
            }
          </div>
        </div> {/* heading and cards */}
      
        {/* footer */}
        <div
          className='
            self-stretch
          '
        >
          <Link  
            className='
              block
              w-full
              p-2
              text-slate-50 font-semibold text-center
              hover:underline
            '
            to={'/'}
            style={{
              background: "linear-gradient(0deg,#ffb602,#fbbe28)",
            }}
          >
            Discover the Pro Plan
          </Link>
        </div>
      </div> {/* big card */ }
    </div> /* proplan section */
  )
}

// card
const ProCard = ({
  card
}) => {
  return (
    <div
      className='
        flex items-center gap-4

        lg:flex-col
        lg:justify-center
        lg:text-center
      '
    >
      <div
      className='
        flex items-center justify-center
        aspect-square
      '
      >
        <img 
          
          src={card.url} 
          alt={card.title}
          style={{
            maxWidth: '100px',
            height: 'auto',
            width: '100%',
          }}
        />
      </div>

      <div>
        <h6
          className='
            font-semibold
          '
        >
          {card.title}
        </h6>
        <p
          className='
            text-sm text-gray-500
            max-w-prose
          '
          
        >
          {card.text}
        </p>
      </div>
    </div>
  )
}

export default ProPlan
