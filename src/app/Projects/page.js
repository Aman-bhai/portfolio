import React from 'react'
import Projectpage from "@/app/components/Project/Projectpage"

const page = () => {

    return (<div className='min-h-screen dark:bg-gradient-to-r from-blue-800 to-indigo-900'>
        <Projectpage imgUrl={process.env.SINGLE_IMAGE} /></div>
    )
}

export default page