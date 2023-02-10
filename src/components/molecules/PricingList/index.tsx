import PricingPoint from "../../atoms/PricingPoint";
import HeadingButton from "../../atoms/HeadingButton";

export default function PricingList({pricingPoints}: {pricingPoints: string[]}) {
	return (
		<ul role="list" className="mb-8 space-y-4 text-left">
			{pricingPoints.map((point) => (
				<PricingPoint text={point} key={point + Math.random()}/>
			))}
			<div className="text-center pt-6">
			<HeadingButton text={"Get started"} href={"#"}/>
			</div>
		</ul>

	);
}