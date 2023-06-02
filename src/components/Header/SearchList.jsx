import React from 'react'
import SearchItem from './SearchItem'

const SearchList = ({
  results
}) => {

  console.log(results)
  return (
    <ul>
      {
        results.length
        ? (
          results.map(res => {
            return (<SearchItem
              key={res.id}
              item={res}
            />)
          })
        ) 
        : ('')
      }
    </ul>
  )
}

export default SearchList
