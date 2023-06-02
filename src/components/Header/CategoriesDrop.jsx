import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import CatSlider from './CatSlider'

const CategoriesDrop = ({
  open,
  toggleCatDrop
}) => {

  return (
    <>
      
      <AnimatePresence>
        {
          open 
          ? (
            <motion.div
              className={`
                mega-menu
                flex justify-between
                absolute left-0 overflow-hidden
                w-full
                bg-red-200
                rounded-md
              `}
              style={{
                zIndex: 1400,
                height: '420px',
                bottom: '-440px'
              }}

              // animation
              initial={{
                opacity: 0, y: -20,
              }}
              animate={{
                opacity: 1, y: 0,
              }}
              exit={{
                opacity: 0, y: 20
              }}
            >

              {/* left: cards */}

              <div 
                className="
                  mega__l
                  flex flex-row gap-2
                  bg-slate-50
                  grow shrink basis-full
                  py-12
                  px-4
                  overflow-x-auto
                  w-full
                "
              >
                <CatSlider/>
              </div>
              {/* right: banner */}
              <div 
                className="
                  mega__r
                  hidden justify-end
                  lg:flex 
                  grow shrink bais-auto
                  bg-blue-200
                  aspect-square
                  h-full
                "
                
                style={{
                  //minWidth: '100px'
                }}
              >
                <img 
                  className='
                    object-cover aspect-1/1
                  '
                  style={{
                    maxWidth: '100%',
                    width: '500px',
                    height: 'auto',
                    
                  }}
                  
                  src="https://static.vecteezy.com/system/resources/thumbnails/004/727/152/small_2x/illustration-of-a-non-fungible-token-nft-background-for-infographics-digital-technology-concept-crypto-art-futuristic-neon-wallpaper-with-typography-vector.jpg" 
                  alt="nft" 
                />
                {/* <svg 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                preserveAspectRatio="none"
                xmlns='http://www.w3.org/2000/svg' 
                width='100%' 
                height='100%' 
                viewBox='0 0 100 100'>
                  <rect fill='#9258F0' width='100' height='60'/><g fill-opacity='1'><rect  fill='#9258F0' width='11' height='11'/><rect  fill='#9057ed' x='10' width='11' height='11'/><rect  fill='#8e56eb' y='10' width='11' height='11'/><rect  fill='#8b55e8' x='20' width='11' height='11'/><rect  fill='#8954e6' x='10' y='10' width='11' height='11'/><rect  fill='#8752e3' y='20' width='11' height='11'/><rect  fill='#8551e1' x='30' width='11' height='11'/><rect  fill='#8350de' x='20' y='10' width='11' height='11'/><rect  fill='#804fdc' x='10' y='20' width='11' height='11'/><rect  fill='#7e4ed9' y='30' width='11' height='11'/><rect  fill='#7c4dd7' x='40' width='11' height='11'/><rect  fill='#7a4cd4' x='30' y='10' width='11' height='11'/><rect  fill='#784bd2' x='20' y='20' width='11' height='11'/><rect  fill='#7649cf' x='10' y='30' width='11' height='11'/><rect  fill='#7448cd' y='40' width='11' height='11'/><rect  fill='#7247ca' x='50' width='11' height='11'/><rect  fill='#7046c8' x='40' y='10' width='11' height='11'/><rect  fill='#6d45c5' x='30' y='20' width='11' height='11'/><rect  fill='#6b44c3' x='20' y='30' width='11' height='11'/><rect  fill='#6943c0' x='10' y='40' width='11' height='11'/><rect  fill='#6742be' y='50' width='11' height='11'/><rect  fill='#6541bb' x='60' width='11' height='11'/><rect  fill='#633fb9' x='50' y='10' width='11' height='11'/><rect  fill='#613eb6' x='40' y='20' width='11' height='11'/><rect  fill='#5f3db4' x='30' y='30' width='11' height='11'/><rect  fill='#5d3cb1' x='20' y='40' width='11' height='11'/><rect  fill='#5b3baf' x='10' y='50' width='11' height='11'/><rect  fill='#593aac' x='70' width='11' height='11'/><rect  fill='#5739aa' x='60' y='10' width='11' height='11'/><rect  fill='#5538a7' x='50' y='20' width='11' height='11'/><rect  fill='#5337a5' x='40' y='30' width='11' height='11'/><rect  fill='#5136a2' x='30' y='40' width='11' height='11'/><rect  fill='#5035a0' x='20' y='50' width='11' height='11'/><rect  fill='#4e339e' x='80' width='11' height='11'/><rect  fill='#4c329b' x='70' y='10' width='11' height='11'/><rect  fill='#4a3199' x='60' y='20' width='11' height='11'/><rect  fill='#483096' x='50' y='30' width='11' height='11'/><rect  fill='#462f94' x='40' y='40' width='11' height='11'/><rect  fill='#442e91' x='30' y='50' width='11' height='11'/><rect  fill='#422d8f' x='90' width='11' height='11'/><rect  fill='#402c8d' x='80' y='10' width='11' height='11'/><rect  fill='#3f2b8a' x='70' y='20' width='11' height='11'/><rect  fill='#3d2a88' x='60' y='30' width='11' height='11'/><rect  fill='#3b2985' x='50' y='40' width='11' height='11'/><rect  fill='#392883' x='40' y='50' width='11' height='11'/><rect  fill='#372781' x='90' y='10' width='11' height='11'/><rect  fill='#36257e' x='80' y='20' width='11' height='11'/><rect  fill='#34247c' x='70' y='30' width='11' height='11'/><rect  fill='#32237a' x='60' y='40' width='11' height='11'/><rect  fill='#302277' x='50' y='50' width='11' height='11'/><rect  fill='#2f2175' x='90' y='20' width='11' height='11'/><rect  fill='#2d2072' x='80' y='30' width='11' height='11'/><rect  fill='#2b1f70' x='70' y='40' width='11' height='11'/><rect  fill='#291e6e' x='60' y='50' width='11' height='11'/><rect  fill='#281d6c' x='90' y='30' width='11' height='11'/><rect  fill='#261c69' x='80' y='40' width='11' height='11'/><rect  fill='#241b67' x='70' y='50' width='11' height='11'/><rect  fill='#221a65' x='90' y='40' width='11' height='11'/><rect  fill='#211962' x='80' y='50' width='11' height='11'/><rect  fill='#1F1860' x='90' y='50' width='11' height='11'/></g></svg> */}
              </div>
            </motion.div>
          )
          :(
            ''
          )
        }
      </AnimatePresence>

      {/* backdrop */}
      {
        open
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
            onClick={toggleCatDrop}
          >
          </div>
        )
        : (
          ''
        )
      }
    </>
  )
}

export default CategoriesDrop
