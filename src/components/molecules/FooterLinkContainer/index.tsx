import FooterLink from "../../atoms/FooterLink";

export default function FooterLinkContainer({ href }: { href: string }) {
	return (
		<div className="px-5 py-2">
			<FooterLink href={href} />
		</div>
	);
}
