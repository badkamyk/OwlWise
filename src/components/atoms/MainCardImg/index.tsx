import { MainCardImageType } from './MainCardImgType'

export default function MainCardImg({ src, alt, className }: MainCardImageType) {
    return (
        <img src={src} alt={alt} className={className} />
    )
}
