
import { ContactForm } from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='inset-x-0 z-10 top-0 w-full sticky'>
        <div className='max-w-[90%] mx-auto'>
          <Navbar />
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
      
    </>
  )
}

export default page
