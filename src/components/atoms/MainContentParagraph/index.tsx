import classnames from "classnames";
import { ContentTypographyType } from "../ContentHeading/ContentTypographyType";

export default function MainContentParagraph({
	text,
	className = "mb-4",
	size = "md",
	color = "gray",
}: ContentTypographyType) {
	return (
		<p
			data-testid="main-content-paragraph"
			className={classnames(className, {
				"text-gray-900": color === "gray",
				"text-blue-700": color === "blue",
				"text-white": color === "white",
				"text-sm": size === "sm",
				"text-md": size === "md",
				"text-lg": size === "lg",
				"text-xl": size === "xl",
			})}
		>
			{text}
		</p>
	);
}
