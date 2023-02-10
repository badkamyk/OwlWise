import ContentHeading from "../../atoms/ContentHeading";
import MainContentParagraph from "../../atoms/MainContentParagraph";
import { PricingCardHeadingType } from "./PricingCardHeadingType";

export default function PricingCardHeading({
	heading,
	paragraph,
	price,
}: PricingCardHeadingType) {
	return (
		<>
			<ContentHeading text={heading} size={"xl"} color={"white"} />
			<MainContentParagraph color={"white"} text={paragraph} />
			<div className="my-8 flex items-baseline justify-center">
				<span className="mr-2 text-5xl font-extrabold text-white">{price}</span>
				<span className="text-gray-500 dark:text-white">/month</span>
			</div>
		</>
	);
}
