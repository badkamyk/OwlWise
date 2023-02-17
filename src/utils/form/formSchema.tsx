import { z } from "zod";

export const formSchema = z.object({
	email: z.string().email("Email must be valid"),
	subject: z.string().min(3, "Subject must be at least 3 characters"),
	message: z.string().min(10, "Message must be at least 10 characters"),
});
export type FormSchemaType = z.infer<typeof formSchema>;
