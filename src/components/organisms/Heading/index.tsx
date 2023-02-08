import { animated, useSpring } from "@react-spring/web";
import HeadingText from "../../molecules/HeadingText";

export default function Heading() {
	const [props, api] = useSpring(
		() => ({
			from: { opacity: 0 },
			to: { opacity: 1 },
			config: { duration: 2100 },
		}),
		[]
	);
	return (
		<animated.div
			style={props}
			className="flex h-[100vh] flex-col items-center bg-[url('/main-page-photo.webp')] bg-cover bg-center bg-no-repeat"
		>
			<HeadingText />
		</animated.div>
	);
}
