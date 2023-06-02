import React, { useContext, useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  IconButton,
  Switch,
} from '@chakra-ui/react'
import { HiMenu } from 'react-icons/hi'
import { DarkContext } from 'App'

const SideMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [dark, setDark] = useContext(DarkContext)

  return (
    <>
      <span
        className='
          flex
          lg:hidden
        '
      >
        <IconButton
          ref={btnRef} 
          colorScheme='blue' 
          onClick={onOpen}
          //display={['flex', 'flex', 'flex', 'none']}
        >
          <HiMenu
            size={30}
          />
        </IconButton>
      </span>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton 
            color={'whiteAlpha.900'}
          />
          <DrawerHeader
          p={0}
          >
            <div
              className='
                flex flex-col items-center gap-4 
                bg-violet-950
                p-4 pt-10
              '
            >
              <h3
                className='
                  text-slate-100 text-base
                '
              >
              Make the most of Mintable's Features
              </h3>
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
              sx={{
                minWidth: '100px'
              }}
            >
              Login
            </Button>
            <Button
              colorScheme='purple'
              sx={{
                minWidth: '100px'
              }}
            >
              Sign Up
            </Button>
            </div>
          </DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideMenu