//import React, { useContext } from 'react'
//import {BreakpointsContext} from 'App'
import { Button } from '@chakra-ui/react'
import Academy from 'components/Academy/Academy'
import Categories from 'components/Categories/Categories'
import Collections from 'components/Collections/Collections'
import Features from 'components/Features/Features'
import Hero from 'components/Hero/Hero'
import Newest from 'components/Newest/Newest'
import ProPlan from 'components/ProPlan/ProPlan'
import Promoted from 'components/Promoted/Promoted'
//import styled from 'styled-components'

const HomePage = () => {
  //const breaks = useContext(BreakpointsContext)

  return (
    <div 
      id="home-page"
      className='
        container
        mx-auto
        relative
        bg-slate-50
        transition-all duration-100 ease-in-out
        dark:bg-slate-700
      '
      style={{
        //marginTop: '82.55px'
      }}
    >
      <Hero/>
      <Categories/>
      <Collections/>
      <Newest/>
      <Promoted/>
      <Features/>
      <ProPlan/>
      <Academy/>
    </div>
  )
}

export default HomePage

/* 
${props => props.breaks.xs ? 'background: grey' : ''};
  ${props => props.breaks.sm ? 'background: orange' : ''};
  ${props => props.breaks.md ? 'background: purple' : ''};
  ${props => props.breaks.lg ? 'background: yellow' : ''};
  ${props => props.breaks.xl ? 'background: green' : ''};
*/