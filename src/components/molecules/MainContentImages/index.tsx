import MainCardImg from "../../atoms/MainCardImg";
import { MainContentImagesType } from "./MainContentImgType";

export default function MainContentImages({
	firstSrc,
	firstAlt,
	secondSrc,
	secondAlt,
	firstClass,
	secondClass,
}: MainContentImagesType) {
	return (
		<div className="mt-8 grid grid-cols-2 gap-4">
			<MainCardImg src={firstSrc} alt={firstAlt} className={firstClass} />
			<MainCardImg src={secondSrc} alt={secondAlt} className={secondClass} />
		</div>
	);
}
