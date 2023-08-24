"use client"
import * as z from "zod"

export const adminSchema = z.object({
    username: z.string().min(4).max(20),
    password: z.string().min(4).max(20)

})