import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({
  category
}) => {
  return (
    <div
      className='
        cat__card
        flex flex-col gap-5
        bg-slate-50
        border-l border-gray-300 border-solid
        px-2
        h-full
      '
    >
      <div
        className='

        '
      >
        <img 
          className='
            aspect-1/1
          '
          style={{
            maxWidth: '150px',
            minHeight: '120px',
          }}
          src={category.imgUrl} 
          alt={category.name} 
        />
      </div>
      
      <div
        className='
          flex flex-col gap-3

        '
      >
        <h6
          className='
            text-lg font-semibold
          '
        >
          {category.name}
        </h6>

        {/* sub categories */}

        <nav
          className='
            flex flex-col gap-2
            overflow-y-scroll
          '
          style={{
            height: '65px',
            minHeight: '100%'
          }}
        >
          {
            category.subCats.map(sub => {
              return (
                <Link
                  className='
                    text-gray-600
                    font-base
                    hover:text-black
                  ' 
                  to="#"
                >
                  {/* <Button
                    variant={'link'}
                  >
                  </Button> */}
                  {sub}   
                </Link>
              )
            })
          }
        </nav>
      </div>
    </div>
  )
}

export default CategoryCard
