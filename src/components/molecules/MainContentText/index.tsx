import ContentHeading from "../../atoms/MainContentHeading";
import MainContentParagraph from "../../atoms/MainContentParagraph";
import { MainContentTextType } from "./MainContentTextType";

export default function MainContentText({
	headingText,
	paragraphText,
	headingClassName,
	paragraphClassName,
	secondaryText,
}: MainContentTextType) {
	return (
		<div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
			<ContentHeading text={headingText} className={headingClassName} />
			<MainContentParagraph
				text={paragraphText}
				className={paragraphClassName}
			/>
			<MainContentParagraph
				text={secondaryText}
				className={paragraphClassName}
			/>
		</div>
	);
}
