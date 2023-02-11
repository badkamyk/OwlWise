import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import HeadingButton from "../../atoms/HeadingButton";
import TextArea from "../../atoms/TextArea";
import CompleteInput from "../CompleteInput";

const formSchema = z.object({
	email: z.string().email("Email must be valid"),
	subject: z.string().min(3, "Subject must be at least 3 characters"),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function ContactForm() {
	const methods = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
	});
	const formRef = useRef<HTMLFormElement>(null);
	const onSubmit: SubmitHandler<FormSchemaType> = () => {
		emailjs
			.sendForm(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				formRef.current as string | HTMLFormElement,
				"YOUR_PUBLIC_KEY"
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		methods.reset();
	};

	return (
		<FormProvider {...methods}>
			<form
				ref={formRef}
				className="space-y-8"
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				<CompleteInput
					type={"email"}
					id={"email"}
					placeholder={"youremail@example.com"}
					text={"Your email"}
					required={true}
				/>
				<span className="mt-2 block text-red-600">
					{methods.formState.errors.email?.message}
				</span>
				<CompleteInput
					type={"text"}
					id={"subject"}
					placeholder={"Your subject"}
					text={"Subject"}
					required={true}
				/>
				<span className="mt-2 block text-red-600">
					{methods.formState.errors.subject?.message}
				</span>
				<TextArea
					id={"message"}
					placeholder={"Your message..."}
					required={true}
				/>
				<span className="mt-2 block text-red-600">
					{methods.formState.errors.message?.message}
				</span>
				<HeadingButton
					text={"Send message"}
					type={"submit"}
					disabled={methods.formState.isSubmitting}
				/>
			</form>
		</FormProvider>
	);
}
