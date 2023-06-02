import React from 'react'
import CatCard from './CatCard'

const categories = [
  
  {
    id: 1,
    imgUrl: 'https://www.mintable.app/static/media/category_art_icon.1e6772d83a053d87f6fa.svg',
    name: 'Art',
    bgColor: 'bg-blue-100'
  },
  {
    id: 2,
    imgUrl: 'https://www.mintable.app/static/media/category_music_icon.0427619b15ac52636894.svg',
    name: 'Music',
    bgColor: 'bg-red-100'
  },
  {
    id: 3,
    imgUrl: 'https://www.mintable.app/static/media/category_video_icon.a3e286b257289d58dd43.svg',
    name: 'Videos',
    bgColor: 'bg-green-100'
  },
  {
    id: 4,
    imgUrl: 'https://www.mintable.app/static/media/category_collectibles_icon.324f6828b93ac4dbf911.svg',
    name: 'Collectibles',
    bgColor: 'bg-purple-100'
  },
  {
    id: 5,
    imgUrl: 'https://www.mintable.app/static/media/category_sports_icon.b62dae7d38ff976b6951.svg',
    name: 'Sports',
    bgColor: 'bg-yellow-100'
  },
  {
    id: 6,
    imgUrl: 'https://www.mintable.app/static/media/category_utility_icon.d6c3251b2b0d56826f42.svg',
    name: 'Utility',
    bgColor: 'bg-gray-100'
  },
]

const Categories = () => {
  return (
    <div
      className='
        grid gap-4 grid-cols-1 grid-flow-dense
        w-full
        mb-10
        px-5

        sm:grid-cols-2 
        md:grid-cols-3 
      '
    >
      {
        categories.length
        ? (
          categories.map(cat => {
            return(<CatCard 
              key={cat.id}
              category={cat}
            />)
          })
        )
        : ('')
      }
    </div>
  )
}

export default Categories
