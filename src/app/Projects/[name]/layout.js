import Link from "next/link"

export default function Layout({
    children,params
}) 

{
  

    return (
       <div className="container sm:px-24 px-12 min-h-screen bg-gray-100 dark:bg-gradient-to-r from-blue-800 to-indigo-900">
         {children}
       </div>
    )
}