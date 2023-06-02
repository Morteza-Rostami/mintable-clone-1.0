import { Input, InputGroup } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import SearchModal from './SearchModal'
import SearchList from './SearchList'

const items = [
  {
    id: 1,
    name: 'Lamperouge, Lelouch',
    urlImg: 'https://cdn.myanimelist.net/r/50x78/images/characters/8/406163.webp?s=b340ff72c9bde1a798414d956a815106'
  },
  {
    id: 2,
    name: 'Levi',
    urlImg: 'https://cdn.myanimelist.net/r/50x78/images/characters/2/241413.webp?s=83a46d204220d137d9af0435b7376ebb'
  },
  {
    id: 3,
    name: 'Monkey D., Luffy',
    urlImg: 'https://cdn.myanimelist.net/r/50x78/images/characters/9/310307.webp?s=46c6bc56eae5ac812b4e8b980c37e91a'
  },
  {
    id: 4,
    name: 'Lawliet, L',
    urlImg: 'https://cdn.myanimelist.net/r/50x78/images/characters/10/249647.webp?s=24f4c0a61bf0c8bc48e77018b1244340'
  },
  {
    id: 5,
    name: 'Roronoa, Zoro',
    urlImg: 'https://cdn.myanimelist.net/r/50x78/images/characters/3/100534.webp?s=761f60c41f53a125f29ead922a3dc7de'
  },
  {
    id: 6,
    name: 'Yagami, Light',
    urlImg: 'https://cdn.myanimelist.net/r/50x78/images/characters/6/63870.webp?s=27f4b328759024d7eca725bdef503c55'
  },
  {
    id: 7,
    name: 'Zoldyck, Killua',
    urlImg: 'https://cdn.myanimelist.net/r/50x78/images/characters/2/327920.webp?s=cbad9040293af1de46fcd7f0f25aed37'
  },
  {
    id: 8,
    name: 'Okabe, Rintarou',
    urlImg: 'https://cdn.myanimelist.net/r/50x78/images/characters/6/122643.webp?s=ea1349faa1d051356b7efd363c1eb2ca'
  },
  {
    id: 9,
    name: 'Elric, Edward',
    urlImg: 'https://cdn.myanimelist.net/r/50x78/images/characters/9/72533.webp?s=9f5fed244c1a88ee9175baab312ad446'
  },
]

const SearchBar = ({
}) => {
  const breakpoint = 640
  const searchModalRef = useRef(null)

  const [screenW, setScreenW] = useState(window.innerWidth) 
  // search drop open/close
  const [searchOpen, setSearchOpen] = useState(false)
  const [term, setTerm] = useState('')
  const [filteredItems, setFilteredItems] = useState(items)
  
  // open search drop
  function openSearchDrop() {
    setSearchOpen(true)
    document.body.style.overflow = 'hidden'
  }

  // close search drop
  function closeSearchDrop() {
    setSearchOpen(false)
    document.body.style.overflow = 'unset'
  }

  // toggle search mobile modal
  function toggleSearchModal() {
    searchModalRef.current.onOpen()
  } 

  // each time input changes search the term
  function searchTerm() {
    if (term !== '') {
      setFilteredItems(
        items.filter(item => 
          item.name.toLowerCase().includes(term.toLowerCase()))
      )
    }
  }

  // search on input change
  useEffect(() => {
    searchTerm()

    // if input is empty set to all items
    if (!term) setFilteredItems(items)
  }, [term])

  // set window resize event
  useEffect(() => {

    function handleResize() {
      setScreenW(window.innerWidth)
    }

    // on: event of window resize
    window.addEventListener('resize', handleResize)

    // clean eventListener
    return () => 
      window.removeEventListener('resize', handleResize)
  }, [])

  // close search drop : if: hit breakpoint
  useEffect(() => {
     // close the search drop
     if (screenW <= breakpoint) {
       closeSearchDrop()
     }
     console.log('7777777777', searchOpen)
  }, [screenW])

  return (
    <div
      className={`
        relative
        flex flex-col items-stretch 
        w-full
        rounded-md
        bg-slate-200
        ${searchOpen ? 'rounded-b-none' : 'rounded-md'}
      `}
    >
      <InputGroup
        onClick={() => {
          screenW <= breakpoint
            ? toggleSearchModal()
            : openSearchDrop()
        }}
        style={{
          position: 'relative',
          zIndex: searchOpen ? '1400' : 'auto',
        }}
      >
        {/* <InputLeftElement 
          pointerEvents='none'
        > 
            <HiSearch
            size={24}
            />
        </InputLeftElement> */}
        <Input 
          className='
            focus:bg-slate-50
          '
          style={{
            padding: '10px'
          }}
          variant={'unstyled'}
          type='search' 
          placeholder='Search for NFTs..' 
          isReadOnly={screenW <= breakpoint ? true : false}
          onChange={(e) => setTerm(e.target.value)}
        />
      </InputGroup>
      
      {/* search drop */}
      
      <AnimatePresence>
      {
        searchOpen ? (
          <motion.div
            className='
              absolute left-0 right-0
              bg-slate-100
              h-80
              overflow-auto
              rounded-md
              rounded-t-sm
            '
            style={{
              top: 40,
              zIndex: '1400',
              //minHeight: '340px'
            }}

            // animation
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <SearchList
              results={filteredItems}
            />
          </motion.div>

        )
        : ('')
      }
      </AnimatePresence>

      {/* backdrop */}
      {
        searchOpen
        ? (
          <div 
            className="
              cat__backdrop
              fixed top-0 bottom-0 right-0 left-0
              opacity-100
            "
            style={{
              zIndex: 1200 ,
              backgroundColor: '#0000007B',
            }}
            onClick={closeSearchDrop}
          >
          </div>
        )
        : (
          ''
        )
      }

      {/* search modal */}
      <SearchModal
        ref={searchModalRef}
        setTerm={setTerm}
        results={filteredItems}
      />
    </div> /* end search bar */

    
  )
}

export default SearchBar
