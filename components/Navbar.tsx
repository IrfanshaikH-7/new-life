"use client"
import { NavLinks } from '@/contants/index.js'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import * as z from 'zod'
import { LayoutGrid, Sparkle } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from './ui/input'


import Image from 'next/image'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import MobileSidebar from './MobileSidebar'
import { adminSchema } from '@/lib/validations/admin'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { addAdmin, authorizeAdmin } from '@/lib/server-actions'

function Navbar() {
  const [active, SetActive] = useState(false)
  const pathname = usePathname()
  const navref = useRef()
  const router = useRouter();

  const form = useForm<z.infer<typeof adminSchema>>({
    resolver: zodResolver(adminSchema),
    defaultValues: {
      username: "",
      password: "",

    },
  })

  async function onSubmit(values: z.infer<typeof adminSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)
    const authAdmin = await authorizeAdmin({
      username: values.username,
      password: values.password,
    })
    if(authAdmin) {
      router.push('/admin');
      SetActive(true)
    }
      else null;


  }


  return (
    <>
      <div className=" flex justify-between items-center h-auto w-full mx-auto  px-6 py-2 md:invisible shadow-lg top-0 fixed z-50">

        <Sheet >
          <SheetTrigger className='text-4xl font-extrabold'>
            <div className='h-10 p-2'>
              <LayoutGrid height={28} width={28} />
            </div>

          </SheetTrigger>
          <SheetContent side={'left'}>
            <div className='w-full h-full'>
              <MobileSidebar />
            </div>

          </SheetContent>
        </Sheet>
        <div className='h-10 w-56 relative rounded-lg cursor-pointer'>
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
      </div>

      <section className="flex justify-between invisible md:visible items-center ">
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
            <div className='flex p-2 ml-1 lg:ml-10' key={link.label + i}>
              <Link
                key={link.label + i}
                href={link.route}
                className={`${link.route === pathname ? "border-b-red-700 border-b-2 " : ""} `}
              >

                {link.label}
              </Link>

            </div>


          ))}

          {!active &&
            <Dialog>
              <DialogTrigger>
                <div className='ml-8 p-2' >
                  [Admin]
                </div>

              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2  w-full ">

                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                              <Input className="bg-blue-50 border-white border  focus:!border-0 focus:!outline-none focus:!ring-0" placeholder="username" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    

                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input className="bg-blue-50 border-white border  focus:!border-0 focus:!outline-none focus:!ring-0" placeholder="password" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button className="p-2 w-full" type="submit">Submit</Button>
                    </form>
                  </Form>
                </DialogHeader>
              </DialogContent>
            </Dialog>}



        </div>
      </section>
    </>
  )
}

export default Navbar
