import HeadingText from "../../molecules/HeadingText";
import { useSpring, animated } from '@react-spring/web'


export default function Heading() {
    const [props, api] = useSpring(
        () => ({
            from: { opacity: 0 },
            to: { opacity: 1 },
            config: { duration: 2100 }
        }),
        []
    )
    return (
        <animated.div style={props} className="bg-[url('/public/ales-nesetril-Im7lZjxeLhg-unsplash.webp')] bg-cover bg-center bg-no-repeat bg-fixed h-[50vh]">
            <HeadingText />
        </animated.div>
    )
}
