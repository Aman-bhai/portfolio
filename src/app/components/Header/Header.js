"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
    const pathname = usePathname()

    return (
        <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-6 py-1 md:px-10 lg:px-20 flex-col md:flex-row w-full z-10">
            <h1 className="w-full md:w-3/12 text-center md:text-left mb-2 md:mb-0">
                <Link href='/' className="font-extrabold text-xl text-red-500">
                    MyPortfolio
                </Link>
            </h1>

            <nav className="nav font-semibold text-base">
                <ul className="flex flex-wrap items-center justify-center md:justify-end">
                    <li className={`p-2 md:p-4 cursor-pointer border-b-2 ${pathname == "/" ? "border-red-500 text-red-500" : "border-transparent hover:border-red-500 hover:text-red-500"} transition-all duration-200`}>
                        <Link href="/" className={`text-sm md:text-base lg:text-lg ${pathname == "/" ? "active text-red-500" : ""}`}>Home</Link>
                    </li>
                    <li className={`p-2 md:p-4 cursor-pointer border-b-2 ${pathname == "/about" ? "border-red-500 text-red-500" : "border-transparent hover:border-red-500 hover:text-red-500"} transition-all duration-200`}>
                        <Link href="/about" className={`text-sm md:text-base lg:text-lg ${pathname == "/about" ? "active text-red-500" : ""}`}>About</Link>
                    </li>
                    <li className={`p-2 md:p-4 cursor-pointer border-b-2 ${pathname == "/Resume" ? "border-red-500 text-red-500" : "border-transparent hover:border-red-500 hover:text-red-500"} transition-all duration-200`}>
                        <Link href="/Resume" className={`text-sm md:text-base lg:text-lg ${pathname == "/Resume" ? "active text-red-500" : ""}`}>Resume</Link>
                    </li>
                    <li className={`p-2 md:p-4 cursor-pointer border-b-2 ${pathname == "/Projects" ? "border-red-500 text-red-500" : "border-transparent hover:border-red-500 hover:text-red-500"} transition-all duration-200`}>
                        <Link href="/Projects" className={`text-sm md:text-base lg:text-lg ${pathname == "/Projects" ? "active text-red-500" : ""}`}>Projects</Link>
                    </li>
                    <li className={`p-2 md:p-4 cursor-pointer border-b-2 ${pathname == "/Contact" ? "border-red-500 text-red-500" : "border-transparent hover:border-red-500 hover:text-red-500"} transition-all duration-200`}>
                        <Link href="/Contact" className={`text-sm md:text-base lg:text-lg ${pathname == "/Contact" ? "active text-red-500" : ""}`}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
