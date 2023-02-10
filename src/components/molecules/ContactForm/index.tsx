import HeadingButton from "../../atoms/HeadingButton";
import TextArea from "../../atoms/TextArea";
import CompleteInput from "../CompleteInput";

export default function ContactForm() {
	return (
		<form action="#" className="space-y-8">
			<CompleteInput
				type={"email"}
				id={"email"}
				placeholder={"youremail@example.com"}
				text={"Your email"}
				required={true}
			/>
			<CompleteInput
				type={"text"}
				id={"subject"}
				placeholder={"Subject"}
				text={"Subject"}
				required={true}
			/>
			<TextArea
				id={"message"}
				placeholder={"Your message..."}
				required={true}
			/>
			<HeadingButton text={"Send message"} type={"submit"} />
		</form>
	);
}
