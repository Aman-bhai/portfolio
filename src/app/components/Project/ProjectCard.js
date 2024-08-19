"use client"
import Link from "next/link"


const Card = (props) => {
    return (

        <div className="bg-gray-200 dark:bg-gradient-to-tr from-blue-800 to-indigo-600 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25 dark:shadow-lg dark:hover:shadow-black/75 w-[250px] lg:w-1/4 ">
            <div className="text-center">

                <img src={`${props.imgUrl}${props.img}`} alt="project" className="max-h-auto max-h-24 block mx-auto" />
            </div>
            <h4 className="font-semibold my-3 text-xl dark:text-blue-300">{props.name}</h4>
            <p className="text-gray-500 dark:text-indigo-200 text-sm mb-4">{props.desc.slice(0,200)}</p>
            <Link href={`/Projects/${props.id}`} className="mt-6 bg-red-500 hover:bg-red-800  text-white rounded-lg px-4 py-2">Read More</Link>
        </div>
    )
}

export default Card

