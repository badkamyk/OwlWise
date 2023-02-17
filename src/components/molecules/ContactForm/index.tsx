import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { formSchema, FormSchemaType } from "../../../utils/form/formSchema";
import { onSubmitType } from "../../../utils/form/onSubmitForm";
import FormModal from "../../atoms/FormModal";
import HeadingButton from "../../atoms/HeadingButton";
import TextArea from "../../atoms/TextArea";
import CompleteInput from "../CompleteInput";

export default function ContactForm({
	onSubmit,
}: {
	onSubmit: (data: onSubmitType) => void;
}) {
	const methods = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
	});
	const formRef = useRef<HTMLFormElement>(null);
	const [isModal, setIsModal] = useState(false);

	return (
		<>
			<FormProvider {...methods}>
				<form
					data-testid="contact-form"
					ref={formRef}
					className="space-y-8"
					onSubmit={methods.handleSubmit(() =>
						onSubmit({ formRef, methods, setIsModal })
					)}
				>
					<CompleteInput
						type={"email"}
						id={"email"}
						placeholder={"youremail@example.com"}
						text={"Your email"}
						required={true}
					/>
					{methods.formState.errors.email && (
						<>
							<span className="mt-2 block text-red-600">
								{methods.formState.errors.email.message}
							</span>
							<span role="alert" className="sr-only">
								{methods.formState.errors.email.message}
							</span>
						</>
					)}

					<CompleteInput
						type={"text"}
						id={"subject"}
						placeholder={"Your subject"}
						text={"Subject"}
						required={true}
					/>
					{methods.formState.errors.subject && (
						<>
							<span className="mt-2 block text-red-600">
								{methods.formState.errors.subject.message}
							</span>
							<span role="alert" className="sr-only">
								{methods.formState.errors.subject.message}
							</span>
						</>
					)}
					<TextArea
						id={"message"}
						placeholder={"Your message..."}
						required={true}
					/>
					{methods.formState.errors.message && (
						<>
							<span className="mt-2 block text-red-600">
								{methods.formState.errors.message.message}
							</span>
							<span role="alert" className="sr-only">
								{methods.formState.errors.message.message}
							</span>
						</>
					)}
					<HeadingButton
						text={"Send message"}
						type={"submit"}
						disabled={methods.formState.isSubmitting}
					/>
				</form>
				)
			</FormProvider>
			{isModal && (
				<FormModal
					setIsModal={setIsModal}
					text={"Your message has been sent."}
				/>
			)}
		</>
	);
}
