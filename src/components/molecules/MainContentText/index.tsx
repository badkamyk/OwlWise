import ContentHeading from "../../atoms/ContentHeading";
import MainContentParagraph from "../../atoms/MainContentParagraph";
import { MainContentTextType } from "./MainContentTextType";

export default function MainContentText({
	headingText,
	paragraphText,
	secondaryText,
}: MainContentTextType) {
	return (
		<div
			className="font-light text-gray-500 dark:text-gray-400 sm:text-lg"
			data-testid="main-content-text"
		>
			<ContentHeading text={headingText} />
			<div className="font-normal">
				<MainContentParagraph text={paragraphText} size={"xl"} />
				<MainContentParagraph text={secondaryText} size={"xl"} />
			</div>
		</div>
	);
}
