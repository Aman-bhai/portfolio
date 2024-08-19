import { Project } from "@/app/models/Project.model";
import mongoose from "mongoose"

export async function GET(req){
    mongoose.connect(process.env.mongoURL);
    let data=await Project.find()
    return Response.json({"Projects":data})

}