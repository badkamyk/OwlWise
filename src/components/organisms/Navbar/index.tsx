import NavLogo from "../../atoms/NavLogo"
import NavButton from "../../atoms/NavButton"
import AllNavLinks from "../../molecules/AllNavLinks"
import { useState } from "react"


export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <NavLogo href="https://flowbite.com/" src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite" text="OwlWise" />
                <NavButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
                <AllNavLinks isExpanded={isExpanded} />
            </div>
        </nav>
    )
} 
