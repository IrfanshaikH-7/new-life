
import { ContactForm } from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import { Mail, Phone, Sparkle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='inset-x-0 z-50 top-0 w-auto fixed'>
          <div className='w-full  md:w-[90%] mx-auto'>
            <Navbar />
          </div>
        </div>
      <div className='w-[90%] 
       mx-auto h-screen lg:h-screen relative '>

        <div className='flex -z-10 flex-col md:flex-row h-[60%] w-[95%] mx-auto shadow-2xl lg:items-start  rounded-lg mt-16 lg:mt-24 items-center justify-center pt-8'>

          <div className='flex flex-1 flex-col justify-center items-center'>
            <p className='text-4xl font-semibold pt-4 lg:pt-12'>Get in touch. </p>
            <div className='mt-4 flex flex-col items-center text-base font-medium'>
              <div className='flex'>
                <Phone className='px-1' />
                <p>Phone : 73370 62617, &nbsp; 73370 62617 </p>
              </div>
              <div className='flex'>
                <Mail className='px-1' />
                <p>Email : 414irfann@gmail.com</p>
              </div>

            </div>

          </div>

          <div className=' pb-2 w-full h-full lg:h-full -z-10  lg:w-3/4 relative flex-1'>
            <Image
              src='/assets/contactHr.png'
              alt='contact-hr'
              fill
              className=' h-full w-full object-contain'
            />
          </div>

        </div>

        <div className='lg:w-4/5 w-full mx-auto z-20  -mt-12 md:-mt-40 h-full lg:h-auto '>
          <ContactForm />
        </div>
        

      </div>

    </>
  )
}

export default page
