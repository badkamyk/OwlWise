import { TextAreaType } from "./TextAreaType";
import InputLabel from "../InputLabel";

export default function TextArea({ id, rows, placeholder, required }: TextAreaType) {
	return (
		<div className="sm:col-span-2">
			<InputLabel text={"Your message"} htmlFor={id} />
			<textarea id={id} rows={rows}
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder={placeholder} required={required}></textarea>
		</div>
	);
}