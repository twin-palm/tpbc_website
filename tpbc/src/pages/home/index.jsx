import React from 'react'
import Wrapper from '@/components/layout/main_wrapper'
import Banner from '@/components/sections/home_banner'
import Faith from '@/components/sections/statement_faith'

const index = () => {
  return (
    <Wrapper>
        <Banner />
        <Faith />
    </Wrapper>
  )
}

export default index