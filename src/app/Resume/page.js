import Link from 'next/link'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

const page = () => {
  const link = process.env.RESUME
  return (
    <section>
      <div className="bg-gray-100 dark:bg-gradient-to-r from-blue-800 to-indigo-900 dark:text-indigo-200">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white dark:bg-gradient-to-tr from-blue-800 to-indigo-600 shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <Image src={'/apple-touch-icon.png'} width={200} height={200} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0" />

                  <h1 className="text-xl font-bold">Aman Soni</h1>
                  <p className="text-gray-700 dark:text-blue-300 text-sm hidden lg:block">Data Analytics || Web Developer </p>
                  <p className="text-gray-700 dark:text-blue-300 text-sm lg:hidden">Data Analytics <br /> Web Developer </p>
                  <div className="mt-6 flex gap-4 justify-center flex-wrap">
                    <Link href={"/Contact"} className="bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded">Contact</Link>
                    <Link href={link} className="bg-gray-300 hover:bg-gray-400 text-gray-700 dark:text-blue-900 py-2 px-4 rounded">Resume</Link>

                  </div>
                </div>
                <hr className="my-6 border-t border-gray-300" />
                <div className="flex flex-col">
                  <span className="text-gray-700 dark:text-blue-300 uppercase font-bold tracking-wider mb-2">Ranking</span>
                  <ul className='flex flex-wrap gap-2 my-2 mb-3 flex-col sm:flex-row'>
                    <li className='block'>HackerRank : <span className='text-slate-400 text-md font-semibold'>****</span></li>
                    <li className='block'>HackerEarth : <span className='text-slate-400 text-md font-semibold'>**</span></li>
                    <li className='block'>LeetCode :  <span>
                      2,350,458</span></li>
                  </ul>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="text-gray-700 dark:text-blue-300 uppercase font-bold tracking-wider mb-2">Languages</span>
                  <ul className='flex flex-wrap gap-2 my-2 mb-3'>
                    <li>English</li>
                    <li>Hindi</li>
                  </ul>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="text-gray-700 dark:text-blue-300 uppercase font-bold tracking-wider mb-2">Skills</span>
                  <ul>
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
                    <li className="mb-2">Tailwind Css</li>
                    <li className="mb-2">JavaScript</li>
                    <li className="mb-2">MongoDB</li>
                    <li className="mb-2">Node.js</li>
                    <li className="mb-2">React</li>
                    <li className="mb-2">Next js</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-white  dark:bg-gradient-to-tr from-blue-800 to-indigo-600 shadow rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 dark:text-indigo-300"> As a 6th semester student, I'm passionate about web
                  development and data science. Seeking opportunities to gain
                  real-world experience in a professional setting to enhance
                  skills and knowledge in these areas
                </p>

                <h3 className="font-semibold text-center mt-3 -mb-2">
                  Find me on

                </h3>
                <div className="flex justify-center items-center gap-6 my-6">
                  <Link className="text-gray-700 dark:text-indigo-300 hover:text-red-600" aria-label="Visit TrendyMinds Github" href={`${process.env.GITHUB}`}
                    target="_blank"> <GitHubIcon /> </Link>
                  <Link className="text-gray-700 dark:text-indigo-300 hover:text-red-600" aria-label="Visit TrendyMinds Linkedin" href={`${process.env.LINKEDIN}`}
                    target="_blank"><LinkedInIcon /> </Link>

                  <Link className="text-gray-700 dark:text-indigo-300 hover:text-red-600" aria-label="Visit TrendyMinds X" href={`${process.env.X}`}
                    target="_blank"><XIcon /></Link>
                 
                  <Link className="text-gray-700 dark:text-indigo-300 hover:text-red-600" aria-label="Visit TrendyMinds Whatsapp" href={`${process.env.WHATSAPP}`}
                    target="_blank"><WhatsAppIcon /> </Link>
                </div>

                <h2 className="text-xl font-bold mb-4">Qualification</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-blue-300 font-bold">Bachelor of Technology (B.Tech) in Computer Science and Design</span>
                    <p>
                      <span className="text-gray-700 dark:text-indigo-300">Oct 2021 - April 2025</span>
                    </p>
                  </div>
                  <p className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-indigo-300">djhfauh</span>
                    <span className="text-gray-700 dark:text-indigo-300">CGPA : 3.77</span>
                  </p>
                </div>


                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-blue-300 font-bold"> Higher Secondary (12th Grade)</span>
                    <p>
                      <span className="text-gray-700 dark:text-indigo-300 ">April 2020- April 2021</span>
                    </p>
                  </div>
                  <p className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-indigo-300">Cnahficah (CBSE)</span>
                    <span className="text-gray-700 dark:text-indigo-300">Percentage: 1.2</span>
                  </p>
                </div>


                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-blue-300 font-bold">Secondary School (10th Grade)</span>
                    <p>
                      <span className="text-gray-700 dark:text-indigo-300">April 2018 - April 2019</span>
                    </p>
                  </div>
                  <p className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-indigo-300"> Shri Radha Vallabh Academy  (CBSE)</span>
                    <span className="text-gray-700 dark:text-indigo-300">Percentage: 91.8</span>
                  </p>
                </div>


                <h2 className="text-xl font-bold mt-6 mb-4">Projects</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-blue-300 font-bold"> Newsdaily News Website (Next.js)</span>

                  </div>
                  <p className="mt-2">
                    Implemented a dynamic news website named "newsdaily" using Next.js, a
                    React framework. Integrated a news API to fetch real-time news articles.
                    Developed features for browsing news by category and keyword search.
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-blue-300 font-bold"> Newsdaily News Website (Next.js)</span>

                  </div>
                  <p className="mt-2">
                    Implemented a dynamic news website named "newsdaily" using Next.js, a
                    React framework. Integrated a news API to fetch real-time news articles.
                    Developed features for browsing news by category and keyword search.
                  </p>
                </div>
              
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 dark:text-blue-300 font-bold"> Data Analysis and Prediction Dashboard</span>

                  </div>
                  <ul className='list-disc ml-4 mt-2'>
                    <li>Developed an interactive dashboard in Python for data analysis andprediction tasks.</li>
                    <li>Implemented data loading features for various datasets and web scraping capabilities.</li>
                    <li>Integrated logistic regression algorithm for predictive modeling within the dashboard</li>
                    <li>Conducted statistical analysis and generated visualizations including correlation matrices and graphs using scikit-learn.</li>
                  </ul>
                </div>
                <h2 className="text-xl font-bold mb-4">Certification</h2>
                <div className="mb-6">
                  <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 dark:text-indigo-300 font-bold">Responsive Web Design</span>
                      <p>
                        <span className="text-gray-700 dark:text-indigo-300 mr-2">freeCodeCamp</span>
                        <span className="text-gray-700 dark:text-indigo-300">2024-01-17</span>
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 dark:text-indigo-300 font-bold">Introductory Course On Microsoft Office</span>
                      <p>
                        <span className="text-gray-700 dark:text-indigo-300 mr-2">MITS SIP-1</span>
                        <span className="text-gray-700 dark:text-indigo-300">2022-06-30</span>
                      </p>
                    </div>
                  </div>


                  <div className="mb-6">
                    <div className="flex justify-between flex-wrap gap-2 w-full">
                      <span className="text-gray-700 dark:text-indigo-300 font-bold"> Introduction to Data Science and Machine Learning</span>
                      <p>
                        <span className="text-gray-700 dark:text-indigo-300 mr-2">Udemy</span>
                        <span className="text-gray-700 dark:text-indigo-300">2022-03-06</span>
                      </p>
                    </div>
                  </div>


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