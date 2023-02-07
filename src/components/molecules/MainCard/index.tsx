import MainHeading from '../../atoms/HeadingMain'
import MainCardContent from '../MainCardContent'
import { MainCardType } from '../MainCardContent/MainCardType'

export default function MainCard({ title, description, src }: MainCardType) {
    return (
        <div className="flex items-center">
            <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
                <MainCardContent title={title} description={description} src={src} />
            </div>
        </div>
    )
}
