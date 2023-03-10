import ContentHeading from "../../atoms/ContentHeading";
import MainContentParagraph from "../../atoms/MainContentParagraph";

export default function PricingHeader() {
	return (
		<div
			className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12"
			data-testid="pricing-header"
		>
			<ContentHeading
				text={"Designed for business teams like yours"}
				size={"4xl"}
				color={"white"}
			/>
			<MainContentParagraph
				color={"white"}
				size={"lg"}
				text={
					"Here at OwlWise we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth"
				}
			/>
		</div>
	);
}
