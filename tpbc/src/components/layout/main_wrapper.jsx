import React from 'react'
import Navbar from '@/components/navigation/default_navbar'
import Footer from '../navigation/footer'

const Wrapper = (...props) => {
  return (
    <div className='min-h-screen w-screen flex flex-col'>
        <Navbar />

        {props.children}
        <Footer />
    </div>
  )
}

export default Wrapper