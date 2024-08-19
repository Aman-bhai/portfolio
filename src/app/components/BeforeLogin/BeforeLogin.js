import Link from "next/link"


const BeforeLogin = (props) => {
  const {title,subtitle,link,text}=props
  return (
    <div className="min-h-[450px] flex flex-grow items-center justify-center dark:bg-gradient-to-r from-blue-800 to-indigo-900 bg-gray-50">
    <div className="rounded-lg bg-white p-8 text-center shadow-xl">
      <h1 className="mb-4 text-4xl font-bold">{title}</h1>
      <p className="text-gray-600">{subtitle}</p>
      <Link href={`${link}`} className="mt-4 inline-block rounded bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-600"> {text} </Link>
    </div>
  </div>
  )
}

export default BeforeLogin