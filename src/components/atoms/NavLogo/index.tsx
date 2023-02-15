import { NavLogoType } from "./NavLogoType";

export default function NavLogo({ href, src, alt, text }: NavLogoType) {
	return (
		<a href={href} className="flex items-center" data-testid="nav-logo">
			<img src={src} className="mr-3 h-6 sm:h-9" alt={alt} />
			<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
				{text}
			</span>
		</a>
	);
}
