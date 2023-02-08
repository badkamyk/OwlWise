import HeadingButton from "../../atoms/HeadingButton";
import ContentHeading from "../../atoms/MainContentHeading";
import MainContentParagraph from "../../atoms/MainContentParagraph";

export default function ErrorPage() {
	return (
		<section className="min-h-screen bg-gray-900">
			<div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<ContentHeading
						className={
							"mb-4 text-7xl font-extrabold tracking-tight text-white lg:text-9xl"
						}
						text={"404"}
					/>
					<MainContentParagraph
						className={
							"mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl"
						}
						text={"Something's missing."}
					/>
					<MainContentParagraph
						className={
							"mb-4 text-lg font-light text-gray-500 dark:text-gray-400"
						}
						text={
							"Sorry, we can't find that page. You'll find lots to explore on the home page."
						}
					/>
					<HeadingButton text={"Back to Homepage"} href={"/"} />
				</div>
			</div>
		</section>
	);
}
