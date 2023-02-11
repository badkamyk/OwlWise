import { useFormContext } from "react-hook-form";
import InputLabel from "../InputLabel";
import { TextAreaType } from "./TextAreaType";

export default function TextArea({
	id,
	rows,
	placeholder,
	required,
}: TextAreaType) {
	const { register } = useFormContext();
	return (
		<div className="sm:col-span-2">
			<InputLabel text={"Your message"} htmlFor={id} />
			<textarea
				id={id}
				rows={rows}
				className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
				placeholder={placeholder}
				required={required}
				{...register(id)}
			></textarea>
		</div>
	);
}
