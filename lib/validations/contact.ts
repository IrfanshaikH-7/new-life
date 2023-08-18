"use client"
 
import * as z from "zod"
 
export const contactSchema = z.object({
    name: z.string().min(3).max(30),
    email: z.string().email().max(50),
    message: z.string().min(3).max(3000),
})