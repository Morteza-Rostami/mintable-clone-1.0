import React from 'react'

const NewCard = ({
  card
}) => {
  return (
    <div
      className='
        new-card
        overflow-hidden
        rounded-md
        bg-white
        shadow-md
        mb-1
      '
    >
      <div
        className='
          aspect-square
        '
        style={{
          //aspectRatio: '1.2'
        }}
      >
        <img 
          className='
            max-w-full
          '
          style={{
            minHeight: '300px',
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
          src={card.topImg}
          alt={card.name}
        />
      </div>

      <div
        className='
          p-2
        '
      >
        <p
          className='
            text-sm text-gray-500
          '
        >
          {card.coll}
        </p>
        <p
          className='
            text-lg font-bold
          '
        >
          {card.name}
        </p>
      </div>
    </div>
  )
}

export default NewCard
