import HeadingMain from "../../atoms/HeadingMain";
import MainCard from "../../molecules/MainCard";
import { mainCardInfo } from "../../molecules/MainCard/mainCardInfo";

export default function ProcessSection() {
	const mainCardElement = mainCardInfo.map(item => {
		return <MainCard key={item.title + item.description} {...item} />;
	});
	return (
		<div className="flex h-fit flex-col justify-center gap-8 bg-gradient-to-b from-gray-600 via-rose-100 to-teal-100 px-3 py-9 text-center md:px-0">
			<HeadingMain secondPhrase={"Our services"} />
			<div className="flex h-fit flex-col justify-center gap-8 px-3 py-9 md:flex-row md:px-0">
				{mainCardElement}
			</div>
		</div>
	);
}
