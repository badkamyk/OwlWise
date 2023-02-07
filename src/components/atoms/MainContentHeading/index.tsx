import { ContentTypographyType } from "./ContentTypographyType";

export default function ContentHeading({ text, className }: ContentTypographyType) {
    return (
        <h2 className={className}>{text}</h2>
    )
}
