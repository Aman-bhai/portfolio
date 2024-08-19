"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const Header = () => {
    const pathname=usePathname()
    
    return (
        <header className="header sticky top-0 bg-white shadow-md flex  items-center justify-between px-28 py-02 flex-col md:flex-row min-w-full z-10">
            <h1 className="w-3/12">
                <Link href='/'  className="font-extrabold text-xl text-red-500 md:text-lg">
                    MyPortfolio
                </Link>
            </h1>

            <nav className="nav font-semibold text-lg">
                <ul className="flex items-center">
                    <li className={`p-4 cursor-pointer border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 ${pathname=="/"?"hover:border-opacity-0":''}`}>
                        <Link href="/" className={`text-sm md:text-lg ${pathname=="/"?"active text-red-500":''}`}>Home</Link>
                    </li>
                    <li className={`p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer`}>
                        <Link href="/about" className={`text-sm md:text-lg ${pathname=="/about"?"active text-red-500":''}`}>About</Link>
                    </li>
                    <li className={`p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer`}>
                        <Link href="/Resume" className={`text-sm md:text-lg ${pathname=="/Resume"?"active text-red-500":''}`}>Resume</Link>
                    </li>
                    <li className={`p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer`}>
                        <Link href="/Projects" className={`text-sm md:text-lg ${pathname=="/Projects"?"active text-red-500":''}`}>Projects</Link>
                    </li>
                    <li className={`p-4 border-b-2 border-red-500 border-opacity-0 hover:border-opacity-100 hover:text-red-500 duration-200 cursor-pointer`}>
                        <Link href="/Contact" className={`text-sm md:text-lg ${pathname=="/Contact"?"active text-red-500":''}`}>Contact</Link>
                    </li>
                </ul>
            </nav>


        </header>)
}

export default Header