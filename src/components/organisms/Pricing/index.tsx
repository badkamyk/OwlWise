import PricingHeader from "../../molecules/PricingHeader";
import PricingCardHeading from "../../molecules/PricingCardHeading";
import PricingList from "../../molecules/PricingList";

const pricingData = [
	{
		heading: "Starter",
		paragraph: "Best option for personal use & for your next project.",
		price: "$29",
		points: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 1 developer",
			"Premium support: 6 months",
			"Free updates: 6 months",
		],
		buttonText: "Get started",
		buttonHref: "#",
	},
	{
		heading: "Starter",
		paragraph: "Best option for personal use & for your next project.",
		price: "$29",
		points: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 10 developer",
			"Premium support:24 months",
			"Free updates: 24 months",
		],
		buttonText: "Get started",
		buttonHref: "#",
	},
	{
		heading: "Starter",
		paragraph: "Best option for personal use & for your next project.",
		price: "$29",
		points: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 100+ developer",
			"Premium support: 36 months",
			"Free updates: 36 months",
		],
		buttonText: "Get started",
		buttonHref: "#",
	},
];

export default function Pricing() {
	const pricingCards = pricingData.map((card) => (
		<div key={card.heading + Math.random()} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
			<PricingCardHeading heading={card.heading} paragraph={card.paragraph} price={card.price}/>
			<PricingList pricingPoints={card.points} />
		</div>
	));


	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<PricingHeader />
				<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
					{pricingCards}
				</div>
			</div>
		</section>
	);
}