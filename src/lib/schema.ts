import { z } from "zod";

export const contactFormData = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email("This is not a valid email"),
  message: z
    .string()
    .min(6, { message: "Message must be at least 6 characters." }),
});
