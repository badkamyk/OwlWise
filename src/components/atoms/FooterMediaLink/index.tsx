import { FooterMediaLinkType } from "./FooterMediaLinkType";

export default function FooterMediaLink({ href, srText, path }: FooterMediaLinkType) {
    return (
        <a href={href} className="text-gray-200 hover:text-gray-500">
            <span className="sr-only">{srText}</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                {path}
            </svg>
        </a>
    );
}