import emailjs from "@emailjs/browser";
import { UseFormReturn } from "react-hook-form";
import { FormSchemaType } from "./formSchema";

export type onSubmitType = {
	formRef: React.MutableRefObject<HTMLFormElement | null>;
	methods: UseFormReturn<FormSchemaType>;
	setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const onSubmitForm = ({
	formRef,
	methods,
	setIsModal,
}: onSubmitType) => {
	emailjs
		.sendForm(
			"YOUR_SERVICE_KEY",
			"YOUR_TEMPLATE_KEY",
			formRef.current as string | HTMLFormElement,
			"YOUR_PUBLIC_KEY"
		)
		.then(
			result => {
				console.log(result.text);
				setIsModal(true);
			},
			error => {
				console.log(error.text);
			}
		);
	setIsModal(true);
	methods.reset();
};
