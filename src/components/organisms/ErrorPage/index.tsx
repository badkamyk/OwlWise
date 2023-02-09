import HeadingButton from "../../atoms/HeadingButton";
import HeadingMain from "../../atoms/HeadingMain";
import MainContentParagraph from "../../atoms/MainContentParagraph";

export default function ErrorPage() {
	return (
		<section className="flex min-h-screen items-center bg-gray-900">
			<div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<HeadingMain secondPhrase={"404"} />
					<MainContentParagraph
						color={"white"}
						size={"xl"}
						text={"Something's missing."}
					/>
					<MainContentParagraph
						color={"white"}
						size={"lg"}
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
