import HeadingMain from '../../atoms/HeadingMain'
import MainCard from '../../molecules/MainCard'
import { mainCardInfo } from '../../molecules/MainCard/mainCardInfo'

export default function ProcessSection() {
    const mainCardElement = mainCardInfo.map((item) => {
        return <MainCard title={item.title} description={item.description} src={item.src} key={item.title + item.description} />
    })
    return (
        <div className='bg-gradient-to-b text-center from-gray-600 via-rose-100 to-teal-100 h-fit flex flex-col gap-8 px-3 md:px-0 py-9 justify-center'>
            <HeadingMain secondPhrase={"Our reliable process"} />
            <div className='h-fit flex flex-col md:flex-row gap-8 px-3 md:px-0 py-9 justify-center'>
                {mainCardElement}
            </div>
        </div>
    )
}
