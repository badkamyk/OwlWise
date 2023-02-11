import { InputProps } from "./InputType";
import { useFormContext } from "react-hook-form";
import { forwardRef } from "react";

const Input = forwardRef(({
	type,
	id,
	name,
	placeholder,
	required
}: InputProps, ref) => {
	const { register } = useFormContext();
	return (
		<input
			{...register(id)}
			type={type}
			id={id}
			className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
			placeholder={placeholder}
			name={name}
			required={required}
		/>
	);
});

export default Input;
