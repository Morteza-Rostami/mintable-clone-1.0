import { Avatar } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineEye } from 'react-icons/hi'

const PromoCard = ({
  card
}) => {
  return (
    <div
      className='
        bg-white
        rounded-md
        overflow-hidden
        shadow-md
        mb-1
      '
    >
      <div
        className='
          aspect-square
        '
      >
        <img 
          src={card.topImg} 
          alt={card.name} 
          style={{
            minHeight: '250px',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
        />
      </div>
      
      {/* bottom */}
      <div
        className='
          promo-card__bottom
          flex flex-col gap-2
          p-2
        '
      >

      
        <div
        >
          <p
            className='
              text-xs text-gray-500
            '
          >
            {card.coll}
          </p>
          <p
            className='
              text-lg font-semibold
            '
          >
            {card.name}
          </p>
        </div>

        <div>
          <p
            className='
            '
          >
            {card.price}
          </p>
          <p
            className='
              text-xs text-gray-500
            '
          >
            {card.subPrice}
          </p>
        </div>

        {/* footer */}
        <div
          className='
            flex justify-between items-center
          '
        >
          <div
            className='
              flex items-center gap-2
            '
          >
            <Avatar
              src={card.avatar}
              size={'xs'}
            />
            <span>
              {card.userName}
            </span>
          </div>
          <div
            className='
              flex gap-2 items-center
            '
          >
            <HiOutlineEye/>
            <span>
              {card.views}
            </span>
          </div>
        </div> {/* footer */}
      </div> {/* bottom */}
    </div> /* card */
  )
}

export default PromoCard
