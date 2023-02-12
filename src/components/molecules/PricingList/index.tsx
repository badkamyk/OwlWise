import HeadingButton from "../../atoms/HeadingButton";
import PricingPoint from "../../atoms/PricingPoint";

export default function PricingList({
	pricingPoints,
}: {
	pricingPoints: string[];
}) {
	return (
		<ul role="list" className="mb-8 space-y-4 text-left">
			{pricingPoints.map(point => (
				<PricingPoint text={point} key={point + Math.random()} />
			))}
			<div className="pt-6 text-center">
				<HeadingButton text={"Get started"} href={"/contact"} />
			</div>
		</ul>
	);
}
