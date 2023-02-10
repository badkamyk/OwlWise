import { InputLabelType } from "./InputLabelType";

export default function InputLabel({ text, htmlFor }: InputLabelType) {
	return (
		<label
			htmlFor={htmlFor}
			className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
		>
			{text}
		</label>
	);
}
