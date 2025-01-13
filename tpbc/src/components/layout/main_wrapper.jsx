import React from 'react'
import Navbar from '@/components/navigation/default_navbar'
import Footer from '../navigation/footer'

const Wrapper = (...props) => {
  return (
    <div className='min-h-screen w-screen flex flex-col'>
        <Navbar />

        {props.children}
        <div className='absolute bottom-0 w-full'><Footer /></div>
        
    </div>
  )
}

export default Wrapper