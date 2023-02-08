export default function FooterLink({ href }: { href: string }) {
    return (
        <a href={`${href.toLowerCase()}`} className="text-base leading-6 text-gray-100 hover:text-gray-400">
            {href}
        </a>
    )
}