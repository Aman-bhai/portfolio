"use client"
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { useRouter } from "next/navigation";

const Projects = (props) => {
    const [Project, setProject] = useState([]);

    const fetchProject = async () => {
        try {
            const response = await fetch(`/api/Projects`);
            const data = await response.json();
            setProject(data.Projects || []);
        } catch (error) {
            console.error("Error fetching projects:", error);
            setProject([]); 
        }
    };

    useEffect(() => {
        fetchProject();
    }, []);

    const router = useRouter();
    const imgUrl = props.imgUrl;

    return (
        <section className="px-12 sm:px-20 py-10 dark:text-indigo-100">
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-red-500 text-center text-3xl my-10">Projects</h2>
                <button
                    className="bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-800"
                    onClick={() => router.push("/Admin/addProject")}
                >
                    Add Project
                </button>
            </div>

            <div className="projects-container flex flex-col md:flex-row flex-wrap gap-3 justify-evenly space-y-4 items-center cursor-pointer">
                {Project.length === 0 ? (
                    <div className="text-red-600 text-2xl">No projects are available</div>
                ) : (
                    Project.map((project) => (
                        <ProjectCard
                            key={project._id}
                            img={project.img}
                            images={project.images}
                            desc={project.desc}
                            description={project.description}
                            id={project._id}
                            name={project.name}
                            url={project.url}
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default Projects;