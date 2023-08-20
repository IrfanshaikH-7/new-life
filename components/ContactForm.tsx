"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

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
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { contactSchema } from "@/lib/validations/contact"
import { Textarea } from "./ui/textarea"
import Map from "./Map"

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })




export function ContactForm() {

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      // email:"",
      // message:"",
    },
  })


  function onSubmit(values: z.infer<typeof contactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    form.reset()
  }


  return (
    <section className="flex justify-center gap-2 items-center w-full h-full p-2 mx-auto flex-col lg:flex-row ">
      <div className="flex items-center justify-center flex-1 flex-col bg-blue-50 rounded-3xl border-2 border-t-emerald-300 pt-2 lg:pt-8 h-full w-full min-h-fit">


        <h2 className="font-semibold ">Contact us</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2  w-full  p-2 px-6  mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input className="bg-blue-50 border-white border  focus:!border-0 focus:!outline-none focus:!ring-0" placeholder="Enter your name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="bg-blue-50  border-white border focus:!border-0 focus:!outline-none focus:!ring-0" placeholder="Enter your email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Query</FormLabel>
                  <FormControl>
                    <Textarea className="bg-blue-50 focus:!outline-none focus:!ring-0 border-white bottom " rows={6} placeholder=" Your query" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="p-2 w-full" type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      <div className=" flex flex-col md:flex-1  justify-center items-center h-56 sm:h-full w-full bg-blue-50 rounded-3xl border-2 border-t-emerald-300 pt-5">

        <div className="  flex flex-col items-center  p-2  w-full ">
          <p className="font-semibold">Find us on map..</p>
          <Map />
        </div>
      </div>
    </section>
  )
}