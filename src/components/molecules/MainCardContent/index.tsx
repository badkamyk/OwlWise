import MainCardDescription from '../../atoms/MainCardDescription'
import MainCardImg from '../../atoms/MainCardImg'
import MainCardTitle from '../../atoms/MainCardTitle'
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { MainCardType } from './MainCardType'

export default function MainCardContent({ title, description, src }: MainCardType) {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const animation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(50px)",
        config: {
            duration: 1000,
        },
    });

    return (
        <animated.div className="relative rounded-[15px] bg-white p-6" ref={ref} style={animation}>
            <div className="space-y-4">
                <MainCardImg src={src} alt="Image with particles" />
                <MainCardTitle text={title} />
                <MainCardDescription text={description} />
            </div>
        </animated.div>
    )
}
