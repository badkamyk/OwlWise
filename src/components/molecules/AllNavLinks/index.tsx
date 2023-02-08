import NavLink from "../../atoms/NavLink";

export default function AllNavLinks({ isExpanded }: { isExpanded: boolean }) {
	const navLinks = ["Home", "About", "Services", "Contact"];
	const navLinksList = navLinks.map(link => {
		return <NavLink key={link + " link"} href={link} />;
	});
	const navLinksClass = isExpanded ? "block" : "hidden";

	return (
		<div
			className={`${navLinksClass} w-full md:block md:w-auto`}
			id="navbar-default"
		>
			<ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
				{navLinksList}
			</ul>
		</div>
	);
}
