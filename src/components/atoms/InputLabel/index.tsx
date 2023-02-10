import { InputLabelType } from "./InputLabelType";

export default function InputLabel({ text, htmlFor }: InputLabelType) {
	return (
		<label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{text}</label>
	);
}