import { model, models, Schema } from "mongoose";



const ProjectInfoSchema = new Schema({
    name: {
        type: String,
        required: 'Project title is required',
    },
    url: { type: String },
    description: { type: String },
    desc: { type: String },
    images: [{ type: String }],
    img: { type: String },
    date: { type: String, default: Date }
}, { timestamps: true });

export const Project = models?.Project || model('Project', ProjectInfoSchema);