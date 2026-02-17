import * as z from "zod"

export const formSchema = z.object({
    accountInfo: z.object({
        name: z.string().min(3).max(10),
        lastname: z.string().min(3).max(15),
        email: z.string().email(),
        password: z
            .string()
            .min(8),
    }).refine((data) => {
        const name = data.name.toLowerCase();
        const password = data.password.toLowerCase();
        return !password.includes(name);
    }, {
        message: "Password cant contain your name",
        path: ["password"]
    }),
    shippingInfo: z.object({
        address: z.string(),
        postalCode: z.string().regex(/\d{2}-\d{3}/),
        additionalInfo: z.string(),
    }),
    step: z.number(),
})

export type FormSchemaType = z.infer<typeof formSchema>