import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'

const NftCard = ({
  card
}) => {
  return (
    <div
      className='
        nft-card
        rounded-md
        overflow-hidden
        pb-3
        bg-white
        shadow-md
        mb-1
      '

   
    >
      {/* top image */}
      <div
        className='
          relative
          flex flex-col
        '
        style={{
          minHeight: '105px'
        }}
      >
        <img 
          className='
            flex-1
            object-cover
          '
          src={card.topImg} 
          alt={card.title} 
          style={{
            maxHeight: '105px',
          }}
        />
        {/* avatar */}
        <span
          className='
            absolute
          '
          style={{
            bottom: -32,
            left: '50%',
            //right: 0,
            //margin: 'auto',
            transform: 'translateX(-50%)'
          }}
        >
          <Avatar
            size={'lg'}
            src={card.avatar}
          />
        </span>
      </div>

      {/* bottom content */}
      <div
        className='
          flex flex-col items-center gap-4
          text-center
          pt-16
          px-3
        '
      >
        <h4
          className='
            font-semibold text-black text-lg
          '
        >
          {card.title}
        </h4>
        <p
          className='
            text-sm text-gray-600
          '
          style={{
            maxWidth: '250px'
          }}
        >
          {card.subTxt}
        </p>

        {/* stats */}
        <div
          className='
            flex 
            self-stretch
          '
        >
          {
            card.stats.map((stat, inx) => {
              return (
                <div
                  className='
                    flex flex-col items-center justify-between
                    flex-1
                    border-2
                    border-l-0
                    p-1
                    first:border-l-2
                    first:rounded-tl-md
                    first:rounded-bl-md
                    last:rounded-tr-md
                    last:rounded-br-md
                    text-sm text-gray-500
                  '
                >
                  <span>
                    {stat.name}
                  </span>
                  <span
                    className='
                      text-black
                    '
                  >
                    {stat.num}
                  </span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default NftCard
