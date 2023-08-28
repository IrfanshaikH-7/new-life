"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "@/utils/uploadthing";



import * as z from "zod";
import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { postSchema } from "@/lib/validations/post"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Image from "next/image";
import { addAdmin } from "@/lib/server-actions";
import { usePathname } from "next/navigation";


const page = () => {
  const [images, setImages] = useState('')
  const pathname = usePathname()


  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      taq: ['residential'],
    },
  })
  const onSubmit = async(values: z.infer<typeof postSchema>) => {
      
    console.log(values);
    form.reset();
  }

  const items = [
    {
      id: "residential",
      label: "Residential",
    },
    {
      id: "industrial",
      label: "Industrial",
    },
    {
      id: "others",
      label: "Others",
    },

  ] as const

  return (
    <>
      <div className='inset-x-0 z-10 top-0 w-full sticky'>
        <div >
          <Navbar />
        </div>
      </div>
      <section className="flex mt-24  h-full w-11/12  mx-auto">
        <div className="w-96 bg-blue-700 h-full ">
          hello
        </div>


        <div className=" flex flex-col justify-center items-center p-3 flex-auto bg-blue-200 h-full w-full">
          <main className="flex h-full flex-col items-center justify-between p-2">
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                if (res) {
                  setImages(res[0].url);
                  const json = JSON.stringify(res)
                  console.log(json);
                  console.log(res[0].url)
                }
                // console.log("Files: ", res);
                // alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
            
            {
            images != "" ?(
            <div className="h-72 w-96 relative rounded-md mt-2">
              <Image
              src={images}
              alt="upload-img"
              fill
              className="object-cover"
            />
              </div>):
            (
              <div className=" flex justify-center items-center text-slate-500 h-72 w-96 border border-blue-50 rounded-md mt-2">
                preview
            </div>
            )}
          </main>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2  w-full  p-2 px-6  mt-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Title</FormLabel>
                    <FormControl>
                      <Input className="bg-blue-50 border-white border  focus:!border-0 focus:!outline-none focus:!ring-0" placeholder="Enter your name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="taq"
                render={() => (
                  <FormItem>
                    <div className="mt-3">
                      <FormLabel className="text-base">Work type</FormLabel>
                      <FormDescription>
                        Select taq to add work type
                      </FormDescription>
                    </div>
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="taq"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      )
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit" >Submit</Button>
            </form>
          </Form>
        </div>

      </section>
    </>
  )
}

export default page
