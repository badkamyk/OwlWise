import HeadingText from "../../molecules/HeadingText";
import { useSpring, animated } from '@react-spring/web'
import HeadingButton from "../../atoms/HeadingButton";


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
        <animated.div style={props} className="bg-[url('/main-page-photo.webp')] bg-cover bg-center bg-no-repeat h-[100vh] flex flex-col items-center">
            <HeadingText />
        </animated.div>
    )
}
