export default function NavLink({ href }: { href: string }) {
    return (
        <li>
            <a href={`/${href.toLowerCase()}`} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-400 md:p-0 dark:text-white" aria-current="page">{href}</a>
        </li>
    )
}