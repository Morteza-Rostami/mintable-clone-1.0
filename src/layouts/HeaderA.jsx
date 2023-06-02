import { Box, Button, Container, HStack, IconButton, Input, InputGroup, InputLeftElement, Stack, Switch } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {HiMenu, HiSearch} from 'react-icons/hi'
import CategoriesDrop from 'components/Header/CategoriesDrop'
import SideMenu from 'components/Header/SideMenu'
import { AnimatePresence, useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion'
import { ChevronDownIcon } from '@chakra-ui/icons'
import SearchBar from 'components/Header/SearchBar'
import { DarkContext } from 'App'
import useScrollDirection from 'hooks/useScrollDirection'

const HeaderA = () => {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useContext(DarkContext)
  const scrollDir = useScrollDirection()

  function toggleCatDrop() {setOpen(c => {
    console.log('ccc...', c)
    if (!c) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return !c
  })}

  return (

    <motion.header
      className={`
        container 
        -relative
        flex items-center justify-between gap-4
        bg-white
        p-4
        mx-auto
        w-full
        shadow-md

        h-20
        sticky top-0 z-50

        transition-all duration-500 ease-in-out
        dark:bg-slate-600

        ${ scrollDir === 'down' ? '-top-20' : '-top-0' }
      `}
      
      // animation
      initial={{y: -100}}
      animate={{y: 0}}
      exit={{y: -100}}
      transition={{ duration: 0.3 }}
    >
      {/* header left */}
      <div 
        className='
          header__left
          flex gap-4 items-center
          flex-1
          #bg-red-100

          #md:flex-none
        '
      >
        <Link
          to={'/'}
        >
          <img 
            className='
              w-16
            '
            style={{
              aspectRatio: '1/1',
              objectFit: 'cover',
            }}    
            src="https://www.mintable.app/static/media/mintable-logo-new.e2bd394114ffcecad16c.png" 
            alt="logo" 
          />
        </Link>

        {/* categories */}

        <div
          className='
            hidden
            whitespace-nowrap
            
            lg:flex
          '
        >
          <Button
            variant={'link'}
            rightIcon={<ChevronDownIcon />}
            onClick={toggleCatDrop}  

            color={dark && 'whiteAlpha.900'}
            //colorScheme={dark && ''}
          >
            All Categories
          </Button>
        </div>

        {/* search */}
        <div
          className='
            header__search-wrap
            flex
            w-full
          '
        >
          <SearchBar/>
        </div>
      
      </div> 

      {/* header right */}
      <div 
        className='
          header__right
          flex gap-4 justify-end items-center
          felx-1
          #bg-red-200

          md:basis-1/3
        '
      >

        {/* navigations */}

        <nav
          className='
            hidden
            xl:flex gap-3
          '
        >
          <Button
            variant={'link'}
            color={dark && 'whiteAlpha.900'}
          >
            BROWSE
          </Button>
          <Button
            variant={'link'}
            color={dark && 'whiteAlpha.900'}
          >
            MINT
          </Button>
          <Button
            variant={'link'}
            color={dark && 'whiteAlpha.900'}
          >
            RESOURCES
          </Button>
        </nav>

        {/* actions */}

        <div
          className='
            flex gap-4
          '
        >

          {/* login buttons */}

          <div
            className='
              hidden
              header__btns
              gap-3 items-center

              md:flex
            '
          >
            {/* dark mode switch */}
            <Switch 
              size={'lg'}
              defaultChecked={dark}
              isChecked={dark}
              onChange={(e) => setDark(e.target.checked)}
            />
            <Button
              variant={'outline'}
              colorScheme={dark ? 'whiteAlpha' : 'purple'}
              color={dark ? 'whiteAlpha.800' : undefined}
            >
              Login
            </Button>
            <Button
              colorScheme='purple'
            >
              Sign Up
            </Button>
          </div>

          <SideMenu
          />
        </div>
      </div>

      {/* mega menu modal */}

      <CategoriesDrop
        open={open}
        toggleCatDrop={toggleCatDrop}
      />
    </motion.header>  
  )
}

export default HeaderA
