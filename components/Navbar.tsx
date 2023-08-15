"use client"
import { NavLinks } from '@/contants/index.js'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef} from 'react'
import { AlignHorizontalJustifyCenter } from 'lucide-react';
function Navbar() {
  const pathname = usePathname()
  const navref = useRef()
  return (

    <section className="flex justify-between ">
      <div>
        navL
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

      </div>
    </section>
  )
}

export default Navbar
