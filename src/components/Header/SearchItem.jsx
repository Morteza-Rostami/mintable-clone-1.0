import React from 'react'

const SearchItem = ({
  item
}) => {
  return (
    <li
      className='
        flex items-center gap-4
        p-4
        cursor-pointer
        hover:bg-slate-200
      '
    >
      <img 
        className='
          aspect-square
          object-cover
          rounded-sm
        '
        style={{
          maxWidth: '50px',
        }}
        src={item.urlImg} 
        alt={item.name} 
      />
      <span>
        {item.name}
      </span>
    </li>
  )
}

export default SearchItem
