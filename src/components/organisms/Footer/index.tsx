import FooterLink from "../../atoms/FooterLink";
import MainContentParagraph from "../../atoms/MainContentParagraph";
import FooterMediaLinks from "../../molecules/FooterMediaLinks";

export default function Footer() {
	return (
		<section className="bg-gray-900" data-testid="footer-section">
			<div className="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 text-center sm:px-6 lg:px-8">
				<footer className="-mx-5 -my-2 flex flex-wrap justify-center gap-3">
					<FooterLink href={"Home"} />
					<FooterLink href={"About"} />
					<FooterLink href={"Pricing"} />
					<FooterLink href={"Contact"} />
				</footer>
				<FooterMediaLinks />
				<MainContentParagraph
					text={"© 2023 OwlWise, Inc. All rights reserved."}
					color={"white"}
					size={"sm"}
				/>
			</div>
		</section>
	);
}
