import classnames from "classnames";
import { ContentTypographyType } from "./ContentTypographyType";

export default function ContentHeading({
	text,
	color = "gray",
	size = "4xl",
	className = "mb-4 tracking-tight font-extrabold",
}: ContentTypographyType) {
	return (
		<h3
			className={classnames(className, {
				"text-gray-900": color === "gray",
				"text-blue-700": color === "blue",
				"text-white": color === "white",
				"text-sm": size === "sm",
				"text-md": size === "md",
				"text-lg": size === "lg",
				"text-xl": size === "xl",
				"text-2xl": size === "2xl",
				"text-3xl": size === "3xl",
				"text-4xl": size === "4xl",
				"text-5xl": size === "5xl",
			})}
		>
			{text}
		</h3>
	);
}
