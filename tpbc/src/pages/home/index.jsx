import React from 'react'
import Wrapper from '@/components/layout/main_wrapper'
import Banner from '@/components/sections/home_banner'
import Faith from '@/components/sections/statement_faith'
import Ministries from '@/components/sections/ministries_section'
import VisionSection from '@/components/sections/vission_section'

const index = () => {
  return (
    <Wrapper>
        <Banner />
        <Faith />
        <Ministries />
        <VisionSection />
    </Wrapper>
  )
}

export default index