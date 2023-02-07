import ContentHeading from '../../atoms/MainContentHeading'
import MainContentParagraph from '../../atoms/MainContentParagraph'
import { MainContentTextType } from './MainContentTextType'

export default function MainContentText({ headingText, paragraphText, headingClassName, paragraphClassName, summaryText }: MainContentTextType) {
    return (
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <ContentHeading text={headingText} className={headingClassName} />
            <MainContentParagraph text={paragraphText} className={paragraphClassName} />
            <MainContentParagraph text={summaryText} />
        </div>
    )
}
