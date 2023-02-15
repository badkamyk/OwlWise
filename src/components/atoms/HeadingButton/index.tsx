import { HeadingButtonType } from "./HeadingButtonType";

export default function HeadingButton({
	text,
	href,
	type,
	disabled,
}: HeadingButtonType) {
	return (
		<button
			data-testid="heading-button"
			type={type}
			disabled={disabled}
			className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800"
		>
			<a
				href={href}
				className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
			>
				{text}
			</a>
		</button>
	);
}
