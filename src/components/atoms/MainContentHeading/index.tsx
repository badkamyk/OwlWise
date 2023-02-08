import { ContentTypographyType } from "./ContentTypographyType";

export default function ContentHeading({
	text,
	className = "mb-4 text-4xl md: text-5xl tracking-tight font-extrabold text-gray-900",
}: ContentTypographyType) {
	return <h3 className={className}>{text}</h3>;
}
