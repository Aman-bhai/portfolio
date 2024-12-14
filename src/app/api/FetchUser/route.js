import { User } from "../../models/User.model";
import mongoose from "mongoose"




export async function POST(req) {
    mongoose.connect(process.env.mongoURL).then(() => {
        console.log("server is connected with database")
    }).catch((err) => {
        console.log(err)
    })

    const email = await req.json();
    const doc = await User.findOne({ email })
    
    return Response.json(doc)



}  