import { Avatar } from '@chakra-ui/react'
import React from 'react'

const CatCard = ({
  category
}) => {
  return (
    <div
      className='
        flex items-center justify-between gap-4
        bg-white
        p-2 px-3
        rounded-md
        shadow-md
        cursor-pointer
        hover:shadow-lg
      '
    >
      <div
        className={`
          flex justify-center items-center
          p-4
          rounded-full

          ${category.bgColor}
        `}
      >
        <img 
          className='
            max-w-full
            w-6
          '
          src={category.imgUrl} 
          alt={category.name} 
        />
      </div>
      <p>
        {category.name}
      </p>
    </div>
  )
}

export default CatCard
