import NavLink from "../../atoms/NavLink"

export default function AllNavLinks({ isExpanded }: { isExpanded: boolean }) {
    const navLinks = ["Home", "About", "Services", "Contact"]
    const navLinksList = navLinks.map((link) => {
        return <NavLink key={link + " link"} href={link} />
    })
    const navLinksClass = isExpanded ? "block" : "hidden"

    return (
        <div className={`${navLinksClass} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {navLinksList}
            </ul>
        </div>
    );
}
