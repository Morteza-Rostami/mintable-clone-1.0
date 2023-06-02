import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import HeaderA from './HeaderA'
import FooterA from './FooterA'

const LayoutA = ({
  children
}) => {
  return (
    <CssLayout>
      <HeaderA/>
      <Outlet/>
      <FooterA/>
    </CssLayout>
  )
}

/* style */

const CssLayout = styled.main`
  position: relative;
  display: flex;
  flex-direction: column; 
  height: 100%;
`

export default LayoutA
