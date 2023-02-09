import { ContentTypographyType } from "../MainContentHeading/ContentTypographyType";
import classnames from "classnames";

export default function MainContentParagraph({
																							 text,
																							 className = "mb-4",
																							 size = "md",
																							 color = "gray",
																						 }: ContentTypographyType) {
	return <p className={classnames(className, {
		"text-gray-900": color === "gray",
		"text-blue-700": color === "blue",
		"text-white": color === "white",
		"text-sm": size === "sm",
		"text-md": size === "md",
		"text-lg": size === "lg",
		"text-xl": size === "xl",
	})}>{text}</p>;
}
