import { ContentTypographyType } from "./ContentTypographyType";

export default function ContentHeading({
	text,
	className,
}: ContentTypographyType) {
	return <h3 className={className}>{text}</h3>;
}
