import MainCardDescription from '../../atoms/MainCardDescription'
import MainCardImg from '../../atoms/MainCardImg'
import MainCardTitle from '../../atoms/MainCardTitle'
import { MainCardType } from './MainCardType'

export default function MainCardText({ title, description }: MainCardType) {
    return (
        <div className="relative rounded-[15px] bg-white p-6">
            <div className="space-y-4">
                <MainCardTitle text={title} />
                <MainCardDescription text={description} />
                <MainCardImg src="https://nuxt.com/assets/home/ux-fast-light.svg" alt="Image with particles" />
            </div>
        </div>
    )
}
