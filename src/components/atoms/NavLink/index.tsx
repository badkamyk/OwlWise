export default function NavLink({ href }: { href: string }) {
	return (
		<li>
			<a
				data-testid="nav-link"
				href={href === "Home" ? "/" : `/${href.toLowerCase()}`}
				className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-400"
				aria-current="page"
			>
				{href}
			</a>
		</li>
	);
}
