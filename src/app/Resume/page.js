import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

const page = () => {
  const link = process.env.RESUME;
  return (
    <section>
      <div className="bg-gray-100 dark:bg-gradient-to-r from-blue-800 to-indigo-900 dark:text-indigo-200 min-h-screen">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gradient-to-tr from-blue-800 to-indigo-600 shadow rounded-lg p-6 text-center">
                <Image src={'/apple-touch-icon.png'} width={200} height={200} className="w-32 h-32 mx-auto bg-gray-300 rounded-full mb-4" alt="Profile Image" />
                <h1 className="text-xl font-bold">Aman Soni</h1>
                <p className="text-gray-700 dark:text-blue-300 text-sm hidden lg:block">Data Analytics &apos;||&apos; Web Developer</p>
                <p className="text-gray-700 dark:text-blue-300 text-sm lg:hidden">Data Analytics <br /> Web Developer</p>
                <div className="mt-6 flex gap-4 justify-center flex-wrap">
                  <Link href="/Contact" className="bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded transition-colors duration-200">Contact</Link>
                  <Link href={link} className="bg-gray-300 hover:bg-gray-400 text-gray-700 dark:text-blue-900 py-2 px-4 rounded transition-colors duration-200">Resume</Link>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="text-left">
                  <span className="text-gray-700 dark:text-blue-300 uppercase font-bold tracking-wider mb-2">Ranking</span>
                  <ul className="flex flex-col sm:flex-row flex-wrap gap-2 mb-4">
                    <li>HackerRank : <span className="text-slate-400 font-semibold">****</span></li>
                    <li>HackerEarth : <span className="text-slate-400 font-semibold">**</span></li>
                    <li>LeetCode : <span>2,350,458</span></li>
                  </ul>
                  <span className="text-gray-700 dark:text-blue-300 uppercase font-bold tracking-wider mb-2">Languages</span>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    <li>English</li>
                    <li>Hindi</li>
                  </ul>
                  <span className="text-gray-700 dark:text-blue-300 uppercase font-bold tracking-wider mb-2">Skills</span>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    <li className="mb-2">C</li>
                    <li className="mb-2">C++</li>
                    <li className="mb-2">Python</li>
                    <li className="mb-2">Power BI</li>
                    <li className="mb-2">Data Visualization</li>
                    <li className="mb-2">Data Analytics</li>
                    <li className="mb-2">Web Scrapping</li>
                    <li className="mb-2">MS Word</li>
                    <li className="mb-2">MS Excel</li>
                    <li className="mb-2">MS Powerpoint</li>
                    <li className="mb-2">HTML/CSS</li>
                    <li className="mb-2">Tailwind CSS</li>
                    <li className="mb-2">JavaScript</li>
                    <li className="mb-2">MongoDB</li>
                    <li className="mb-2">Node.js</li>
                    <li className="mb-2">React</li>
                    <li className="mb-2">Next.js</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="bg-white dark:bg-gradient-to-tr from-blue-800 to-indigo-600 shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 dark:text-indigo-300 mb-6">
                  As a 6th semester student, I&apos;m passionate about web development and data science.
                  Seeking opportunities to gain real-world experience in a professional setting to enhance
                  skills and knowledge in these areas.
                </p>
                <h3 className="font-semibold text-center mt-3 -mb-2">Find me on</h3>
                <div className="flex justify-center items-center gap-6 my-6">
                  <Link className="text-gray-700 dark:text-indigo-300 hover:text-red-600 transition-colors duration-200" href={`${process.env.GITHUB}`} target="_blank"><GitHubIcon /></Link>
                  <Link className="text-gray-700 dark:text-indigo-300 hover:text-red-600 transition-colors duration-200" href={`${process.env.LINKEDIN}`} target="_blank"><LinkedInIcon /></Link>
                  <Link className="text-gray-700 dark:text-indigo-300 hover:text-red-600 transition-colors duration-200" href={`${process.env.X}`} target="_blank"><XIcon /></Link>
                  <Link className="text-gray-700 dark:text-indigo-300 hover:text-red-600 transition-colors duration-200" href={`${process.env.WHATSAPP}`} target="_blank"><WhatsAppIcon /></Link>
                </div>
                <h2 className="text-xl font-bold mb-4">Qualification</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-blue-300 font-bold">Bachelor of Technology (B.Tech) in Computer Science and Design</span>
                    <p className="text-gray-700 dark:text-indigo-300">Oct 2021 - April 2025</p>
                  </div>
                  <p className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-indigo-300">djhfauh</span>
                    <span className="text-gray-700 dark:text-indigo-300">CGPA : 3.77</span>
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-blue-300 font-bold">Higher Secondary (12th Grade)</span>
                    <p className="text-gray-700 dark:text-indigo-300">April 2020 - April 2021</p>
                  </div>
                  <p className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-indigo-300">Cnahficah (CBSE)</span>
                    <span className="text-gray-700 dark:text-indigo-300">Percentage: 1.2</span>
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-blue-300 font-bold">Secondary School (10th Grade)</span>
                    <p className="text-gray-700 dark:text-indigo-300">April 2018 - April 2019</p>
                  </div>
                  <p className="flex justify-between flex-wrap gap-2 w/full">
                    <span className="text-gray-700 dark:text-indigo-300">Shri Radha Vallabh Academy (CBSE)</span>
                    <span className="text-gray-700 dark:text-indigo-300">Percentage: 91.8</span>
                  </p>
                </div>
                <h2 className="text-xl font-bold mt-6 mb-4">Projects</h2>
                <div className="mb-4">
                  <h4 className="text-gray-700 dark:text-blue-300 font-bold">Project Title 1</h4>
                  <p className="text-gray-700 dark:text-indigo-300">Brief description of the project and technologies used.</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-gray-700 dark:text-blue-300 font-bold">Project Title 2</h4>
                  <p className="text-gray-700 dark:text-indigo-300">Brief description of the project and technologies used.</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-gray-700 dark:text-blue-300 font-bold">Project Title 3</h4>
                  <p className="text-gray-700 dark:text-indigo-300">Brief description of the project and technologies used.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
