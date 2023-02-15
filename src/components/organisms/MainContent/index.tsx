import { animated, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import MainContentImages from "../../molecules/MainContentImages";
import MainContentText from "../../molecules/MainContentText";

const textInfo = {
	headingText: "We didn't reinvent the wheel",
	paragraphText:
		"We are strategists, designers and developers. Innovators and problem solvers. Small enough " +
		"to be simple and quick, but big enough to deliver the scope you want at the pace you need. " +
		"Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.",
	secondaryText:
		"We act as an extension of your team, working with you to deliver the best possible product.",
	headingClassName:
		"mb-4 text-4xl md: text-5xl tracking-tight font-extrabold text-gray-900",
	paragraphClassName: "mb-4 text-gray-900 text-md md:text-2xl",
};

export default function MainContent() {
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	const trail = useTrail(2, {
		opacity: inView ? 1 : 0,
		transform: inView ? "translate3d(0,0px,0)" : "translate3d(0,-40px,0)",
		config: { duration: 900 },
	});

	return (
		<section
			className="divide-y-8 bg-gradient-to-b from-teal-100 via-rose-100 to-gray-500 py-12 text-center"
			data-testid="main-content"
		>
			<div
				className="mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
				ref={ref}
			>
				{trail.map(({ ...style }, index) => (
					<animated.div key={index + "mainContent"} style={style}>
						{index === 0 ? (
							<MainContentText
								headingText={textInfo.headingText}
								paragraphText={textInfo.paragraphText}
								secondaryText={textInfo.secondaryText}
							/>
						) : (
							<MainContentImages
								firstSrc={
									"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
								}
								firstAlt={"People in the office"}
								secondSrc={
									"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
								}
								secondAlt={"Office equipment"}
							/>
						)}
					</animated.div>
				))}
			</div>
		</section>
	);
}
