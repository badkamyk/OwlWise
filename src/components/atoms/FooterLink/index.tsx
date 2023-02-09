export default function FooterLink({ href }: { href: string }) {
	const isHome = href === "Home";

	return (
		<a
			href={isHome ? "/" : href}
			className="text-base leading-6 text-gray-100 hover:text-gray-400"
		>
			{href}
		</a>
	);
}
