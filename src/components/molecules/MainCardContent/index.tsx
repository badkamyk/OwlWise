import MainCardDescription from '../../atoms/MainCardDescription'
import MainCardImg from '../../atoms/MainCardImg'
import MainCardTitle from '../../atoms/MainCardTitle'
import { MainCardType } from './MainCardType'

export default function MainCardContent({ title, description, src }: MainCardType) {
    return (
        <div className="relative rounded-[15px] bg-white p-6">
            <div className="space-y-4">
                <MainCardImg src={src} alt="Image with particles" />
                <MainCardTitle text={title} />
                <MainCardDescription text={description} />
            </div>
        </div>
    )
}
