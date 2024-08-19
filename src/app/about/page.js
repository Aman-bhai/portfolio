import Image from "next/image"
import Link from "next/link"
import Skills from "../components/Skills/skills";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const About = () => {
    return (
        <>
            <section className="px-12 sm:px-24  py-10 dark:bg-gradient-to-r from-blue-800 to-indigo-900 dark:text-indigo-100">
                <h2 className="font-semibold text-red-500 text-center text-3xl">About Me</h2>
                <p className="my-6 px-4 text-center"> As a 6th semester student, I'm passionate about web
                    development and data science. Seeking opportunities to gain
                    real-world experience in a professional setting to enhance
                    skills and knowledge in these areas</p>

                <div className="about-section flex flex-col lg:flex-row my-16">
                    <div className="about-photo  lg:w-1/3 w-full flex justify-center items-center rounded-lg">
                        <Image src="/logo/logo-no-background.png" width={200} height={200} className="dark:shadow-sm shadow-lg  shadow-gray-800 dark:shadow-black" alt="profiler-image" />
                    </div>
                    <div className="about-card w-full lg:w-2/3 flex items-center flex-col pb-6">
                        <h3 className="text-3xl font-semibold  mb-6 my-6">Aman Soni</h3>
                        <div className="about-cardIn flex flex-wrap space-y-4 sm:items-center flex-col sm:flex-row lg:px-0">
                            <Link href="mailto:amansoni18860@gmail.com" className="sm:w-1/2 mt-4"><span className="text-black font-semibold dark:text-indigo-300">Email : </span><span>amansoni18860@gmail.com</span></Link>
                            <Link href={"tel:9691823063"} className="sm:w-1/2"><span className="text-black font-semibold dark:text-indigo-300">Phone :</span><span>+91 9691823063</span> </Link>
                            <Link href={"https://maps.app.goo.gl/AFzg73V9poND2v4G6"} className="sm:w-1/2"><span className="text-black font-semibold dark:text-indigo-300">Location : </span><span>Gwalior,M.P</span></Link>
                            <Link href={"https://maps.app.goo.gl/pzMTgSg2Me7DqSZd6"} ><span className="text-black font-semibold dark:text-indigo-300">Nationality : </span><span>India</span></Link>
                            <Link href={"https://web.mitsgwalior.in/"} className="sm:w-1/2"><span className="text-black font-semibold dark:text-indigo-300">Study : </span><span>MITS</span></Link>
                            <Link href={"#"} className="sm:w-1/2"><span className="text-black font-semibold dark:text-indigo-300">DOB : </span>18-10-2002</Link>
                            <Link href={"#"} className="sm:w-1/2"><span className="text-black font-semibold dark:text-indigo-300">Interest : </span><span>Data Analytics & Web Developing</span></Link>
                            <div className="social-links flex sm:justify-between items-center justify-evenly sm:space-x-4">
                                <Link href={`${process.env.GITHUB}`} className="cursor-pointer hover:text-red-500  text-lg rounded-full"><GitHubIcon /></Link>
                                <Link href={`${process.env.LINKEDIN}`} className="cursor-pointer hover:text-red-500  text-lg rounded-full"><LinkedInIcon /></Link>
                                <Link href={`${process.env.X}`} className="cursor-pointer hover:text-red-500  text-lg rounded-full"><XIcon /></Link>
                                <Link href={`${process.env.WHATSAPP}`} className="cursor-pointer hover:text-red-500  text-lg rounded-full"><WhatsAppIcon /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Skills />
        </>
    )
}

export default About