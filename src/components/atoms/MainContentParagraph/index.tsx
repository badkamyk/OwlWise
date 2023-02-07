import { ContentTypographyType } from '../MainContentHeading/ContentTypographyType'

export default function MainContentParagraph({ text, className }: ContentTypographyType) {
    return (
        <p className={className}>{text}</p>
    )
}
