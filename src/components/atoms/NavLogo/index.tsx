import { NavLogoType } from "./NavLogoType"

export default function NavLogo({ href, src, alt, text }: NavLogoType) {
    return (
        <a href={href} className="flex items-center">
            <img src={src} className="h-6 mr-3 sm:h-9" alt={alt} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{text}</span>
        </a>
        //     <a href="https://flowbite.com/" className="flex items-center">
        //     <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt={alt} />
        //     <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{text}</span>
        // </a>
    )
} 