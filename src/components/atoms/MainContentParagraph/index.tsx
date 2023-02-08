import { ContentTypographyType } from "../MainContentHeading/ContentTypographyType";

export default function MainContentParagraph({
	text,
	className = "mb-4 text-gray-900 text-md md:text-2xl",
}: ContentTypographyType) {
	return <p className={className}>{text}</p>;
}
