import { pricingData } from "../../../utils/pricingData";
import PricingCardHeading from "../../molecules/PricingCardHeading";
import PricingHeader from "../../molecules/PricingHeader";
import PricingList from "../../molecules/PricingList";

export default function Pricing() {
	const pricingCards = pricingData.map(card => (
		<div
			key={card.heading + Math.random()}
			className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8"
		>
			<PricingCardHeading
				heading={card.heading}
				paragraph={card.paragraph}
				price={card.price}
			/>
			<PricingList pricingPoints={card.points} />
		</div>
	));

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
				<PricingHeader />
				<div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
					{pricingCards}
				</div>
			</div>
		</section>
	);
}
