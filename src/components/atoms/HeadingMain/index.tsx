import { HeadingMainType } from "./HeadingMainType";

export default function HeadingMain({ firstPhrase, secondPhrase }: HeadingMainType) {
    return (
        <h1 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">{firstPhrase && <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{firstPhrase}</span>} {secondPhrase}</h1>
    )
}
