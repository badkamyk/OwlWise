import HeadingParagraph from "../../atoms/HeadingParagraph";
import MainHeading from "../../atoms/HeadingMain";
import { useTrail, animated } from "@react-spring/web";
import React from "react";

const Trails = ({ children }: { children: React.ReactNode }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        from: { opacity: 0, transform: "translate3d(0,40px,0)" },
        to: { opacity: 1, transform: "translate3d(0,0px,0)" },
        config: { duration: 1200 }
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
            <MainHeading />
            <HeadingParagraph />
        </Trails>

    )
}

