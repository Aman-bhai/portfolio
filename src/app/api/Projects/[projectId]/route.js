import { Project } from "@/app/models/Project.model"



export async function GET(req, { params }) {
    let projectId = params.projectId
    let result = await Project.findById(projectId)

    return Response.json(result)

}