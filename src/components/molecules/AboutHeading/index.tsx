import HeadingMain from "../../atoms/HeadingMain";
import MainContentParagraph from "../../atoms/MainContentParagraph";

export default function AboutHeading() {
	return (
		<div
			className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6"
			data-testid="about-heading"
		>
			<HeadingMain firstPhrase={"About"} secondPhrase={"us"} />
			<MainContentParagraph
				color={"white"}
				size={"xl"}
				text={
					"We are a team of software engineers who are passionate about building scalable solutions for businesses."
				}
			/>
		</div>
	);
}
