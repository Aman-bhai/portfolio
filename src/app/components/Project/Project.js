
"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const page = (props) => {
    const id = props.id
    const images = props.multiimages

    const Router = useRouter()

    const [project, setProject] = useState({ id: "", images: [], img: "", url: "", name: "", description: "", desc: "" })

    const fetchProject = async (id) => {

        const response = await fetch(`/api/Projects/${id}`)
        let data = await response.json()
        setProject(data)
    }
    useEffect(() => {
        fetchProject(id)


    }, [])


    return (
        <>
            <section className="text-gray-600 body-font min-h-screen">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font dark:text-indigo-200 text-gray-900 lg:w-1/3 lg:mb-0 mb-4">{project.name}</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base dark:text-indigo-50 dark:text-opacity-40">{project.description}<br />
                            <button className="bg-red-600 text-white p-2 rounded-lg my-2 hover:bg-red-800" onClick={
                                () => Router.push(`${project.url}`)
                            }>Source Code</button></p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block dark:shadow:lg dark:shadow-black/50" src={`${images}${project.images[0]}`} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block dark:shadow:lg dark:shadow-black/50" src={`${images}${project.images[1]}`} />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block dark:shadow:lg dark:shadow-black/50" src={`${images}${project.images[2]}`} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block dark:shadow:lg dark:shadow-black/50" src={`${images}${project.images[3]}`} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block dark:shadow:lg dark:shadow-black/50" src={`${images}${project.images[4]}`} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block dark:shadow:lg dark:shadow-black/50" src={`${images}${project.images[5]}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page