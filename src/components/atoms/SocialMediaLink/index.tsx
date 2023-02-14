import { SocialMediaLinkType } from "./SocialMediaLinkType";

export default function SocialMediaLink({
	href,
	srText,
	path,
}: SocialMediaLinkType) {
	return (
		<a href={href} className="text-gray-200 hover:text-gray-500">
			<span className="sr-only">{srText}</span>
			<svg
				className="h-6 w-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				{path}
			</svg>
		</a>
	);
}
