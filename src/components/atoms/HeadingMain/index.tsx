import { HeadingMainType } from "./HeadingMainType";

export default function HeadingMain({
	firstPhrase,
	secondPhrase,
}: HeadingMainType) {
	return (
		<h2 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
			{firstPhrase && (
				<span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
					{firstPhrase}
				</span>
			)}{" "}
			{secondPhrase}
		</h2>
	);
}
