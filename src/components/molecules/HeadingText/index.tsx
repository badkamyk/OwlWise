import { animated, useTrail } from "@react-spring/web";
import React from "react";
import HeadingButton from "../../atoms/HeadingButton";
import MainHeading from "../../atoms/HeadingMain";
import HeadingParagraph from "../../atoms/HeadingParagraph";

const Trails = ({ children }: { children: React.ReactNode }) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		from: { opacity: 0, transform: "translate3d(0,40px,0)" },
		to: { opacity: 1, transform: "translate3d(0,0px,0)" },
		config: { duration: 900 },
	});
	return (
		<div className="p-3 text-center">
			{trail.map(({ ...style }, index) => (
				<animated.div key={index} style={style}>
					{items[index]}
				</animated.div>
			))}
		</div>
	);
};

export default function HeadingText() {
	return (
		<Trails>
			<MainHeading firstPhrase={"Better Data"} secondPhrase={"Scalable AI."} />
			<HeadingParagraph />
			<HeadingButton href={"/pricing"} text={"Check pricing"} />
		</Trails>
	);
}
