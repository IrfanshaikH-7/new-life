"use client"
import { NavLinks } from '@/contants/index.js'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import { Sparkle } from 'lucide-react';
import Image from 'next/image'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Navbar() {
  const pathname = usePathname()
  const navref = useRef()
  return (
    <>
    <div className=" flex h-auto w-full px-6 py-2 md:hidden shadow-lg top-0 fixed">
      
<Sheet>
  <SheetTrigger className='text-4xl font-extrabold'>Open</SheetTrigger>
  <SheetContent side={'left'}>
    <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet><p>world</p>
    </div>

    <section className="justify-between hidden md:flex items-center ">
      <div className='h-10 w-56 relative rounded-lg mt-2 cursor-pointer'>
        <Link
          href='/'
        >

          <Image
            src="/assets/logo1.png"
            fill
            alt='logo'
            className='object-cover shadow-sm shadow-cyan-400 rounded-lg border-blue-500 border-2'
          />
        </Link>

      </div>
      <div className=" flex justify-end">
        {NavLinks.map((link, i) => (
          <div className='flex p-2 ml-1 lg:ml-10'>
            <Link
              href={link.route}
              className={`${link.route === pathname ? "border-b-red-700 border-b-2 " : ""} `}
            >
              
              {link.label}
            </Link>

          </div>


        ))}
        <div className='ml-8 p-2'>
          <Link
          href='/admin'
        >
          [Admin]
        </Link >
        </div>
        
      </div>
    </section>
    </>
  )
}

export default Navbar
