import React from 'react'
import Project from "../../components/Project/Project"

const page = ({ params }) => {
  let id = params.name

  return (
    <>
      <Project id={id} multiimages={process.env.MULTI_IMAGE} /></>
  )
}

export default page