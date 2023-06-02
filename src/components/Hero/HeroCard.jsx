import { Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = () => {
  return (
    <div
      className='
        hero__card
        flex flex-col flex-wrap
        bg-white
        rounded-md
        overflow-hidden
        shadow-md
      '
    >
      {/* grow shrink basis-1/2 */}
      <Link
        className='

        '
        style={{
          flex: 1
        }}
        to={'/'}
      >
        <img 
          className='
            object-cover
            aspect-square
          '
          style={{
            maxWidth: '500px',
            maxHeight: '400px',
            width: '100%',
          }}

          src="https://mintable.infura-ipfs.io/ipfs/QmXDjPfHz7LA6WPwEb8dRerxJNdVN8uyFD6MU2TwTJ2uDb/" 
          alt="hero_card_image" 
        />
      </Link>

      {/* card footer */}

      <div
        className='
          flex justify-between items-center
          p-4 
        '
      >
        <div
          className='
          flex justify-between items-center gap-2
          '
        >
          <Avatar
            src='https://i.pinimg.com/originals/fc/e9/e0/fce9e05e0b9d55133382d1c53994069f.jpg'
          />
          <p>
            0x8Ad52C3...
          </p>
        </div>

        <div
          className='
          flex flex-col justify-between items-end gap-2 
          '
        >
          <p>
          Doodle #4345 
          </p>
          <p>
          $31.3K
          </p>
        </div>
      </div>

    </div>
  )
}

export default HeroCard
