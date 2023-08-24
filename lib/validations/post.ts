import * as z from "zod";

export const postSchema = z.object({
    
    title: z.string().min(3).max(30),
    taq: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
})