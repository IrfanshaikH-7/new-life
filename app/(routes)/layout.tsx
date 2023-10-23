import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import MobileSidebar from '@/components/MobileSidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='max-h-screen max-w-screen scroll-smooth no-scrollbar'>
      <body className={` bg-[#fffff] m-0 p-0 `}>
      <div className='inset-x-0 z-50 top-0 w-auto fixed'>
          <div className='w-full  md:w-[90%] mx-auto'>
            <Navbar />
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}