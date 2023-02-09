import HeadingMain from "../../atoms/HeadingMain";
import MainContentParagraph from "../../atoms/MainContentParagraph";

export default function AboutHeading() {
	return (
		<div className="py-8 px-4 text-center mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
			<HeadingMain firstPhrase={"About"} secondPhrase={"us"} />
			<MainContentParagraph
				text={"Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind"} />
		</div>
	);
}