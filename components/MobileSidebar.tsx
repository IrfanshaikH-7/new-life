import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLinks } from "@/contants"
import { AlignHorizontalJustifyCenter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileSidebar = () => {
  const pathname  = usePathname();

  return (
    <div className=" flex flex-col  items-center h-full w-full  top-0  ">
      <div className='h-10 w-56 relative rounded-lg cursor-pointer p-2 mb-4'>
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
      {
        NavLinks.map((link) => (
          <>


            <div className="flex flex-col w-full">
              <Link
                href={link.route}
                className={`${pathname === link.route ?`bg-blue-100`: `bg-transparent`} w-full text-center justify-center items-center py-3 mt-[2px] text-lg font-semibold hover:bg-blue-100  rounded-lg cursor-pointer transition duration-300`}
              >
                <div>
                  <link.icon/>
                </div>
                {link.label}
              </Link>
            </div>
          </>

        ))
      }
    </div>
  )
}

export default MobileSidebar
