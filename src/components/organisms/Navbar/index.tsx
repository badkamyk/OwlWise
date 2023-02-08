import { useState } from "react";
import NavButton from "../../atoms/NavButton";
import NavLogo from "../../atoms/NavLogo";
import AllNavLinks from "../../molecules/AllNavLinks";

export default function Navbar() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<nav className="border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<NavLogo
					href="https://flowbite.com/"
					src="https://flowbite.com/docs/images/logo.svg"
					alt="Flowbite"
					text="OwlWise"
				/>
				<NavButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
				<AllNavLinks isExpanded={isExpanded} />
			</div>
		</nav>
	);
}
