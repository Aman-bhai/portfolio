import mongoose from "mongoose";

import { Project } from "@/app/models/Project.model"

export async function POST(req) {
    try {
        mongoose.connect(process.env.mongoURL);
        const data = await req.json();
        Project.create(data)
        return Response.json(data)

    } catch (error) {
        return Response.json(error)

    }

}