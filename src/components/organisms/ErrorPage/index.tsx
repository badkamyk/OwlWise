import ContentHeading from "../../atoms/MainContentHeading";
import MainContentParagraph from "../../atoms/MainContentParagraph";
import HeadingButton from "../../atoms/HeadingButton";

export default function ErrorPage() {
	return (
		<section className="bg-gray-900 min-h-screen">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<ContentHeading
						className={"mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white"}
						text={"404"} />
					<MainContentParagraph
						className={"mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white"}
						text={"Something's missing."} />
					<MainContentParagraph className={"mb-4 text-lg font-light text-gray-500 dark:text-gray-400"}
																text={"Sorry, we can't find that page. You'll find lots to explore on the home page."} />
					<HeadingButton text={"Back to Homepage"} href={"/"} />
				</div>
			</div>
		</section>
	);
}