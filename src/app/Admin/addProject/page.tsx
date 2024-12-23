"use client";
import { useState } from "react";
import { useEdgeStore } from "@/app/lib/edgestore";
import { MultiFileDropzone, type FileState } from '@/app/components/multiFile/multiFile';
import { SingleImageDropzone } from '@/app/components/single-image-dropzone/single-image-dropzone';

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/navigation";
import BeforeLogin from "@/app/components/BeforeLogin/BeforeLogin";
import UsersFetch from "@/app/components/User/UsersFetch";
import { resolve } from "path";

const AddProject = () => {
    const [file, setFile] = useState<File | undefined>(undefined);
    const [fileStates, setFileStates] = useState<FileState[]>([]);
    const [images, setimages] = useState<String[]>([]);
    const [img, setimg] = useState("");
    const [Progress, setProgress] = useState(0);

    const { edgestore } = useEdgeStore();
    const session = useSession();
    const router = useRouter();

    const status = session?.status;
    const userData = session.data?.user;
    let userName = userData?.name || userData?.email;
    if(userName){
      localStorage.setItem("userName", userName);
    }

    const [name, setname] = useState("");
    const [url, seturl] = useState("");
    const [desc, setdesc] = useState("");
    const [description, setdescription] = useState("");

    function updateFileProgress(key: string, progress: FileState['progress']) {
        setFileStates((fileStates) => {
            const newFileStates = structuredClone(fileStates);
            const fileState = newFileStates.find(
                (fileState) => fileState.key === key,
            );
            if (fileState) {
                fileState.progress = progress;
            }
            return newFileStates;
        });
    }

    const Reset = () => {
        setname("");
        setimg("");
        setimages([]);
        setdesc("");
        setdescription("");
        seturl("");
        setFileStates([]);
        setFile(undefined); 
    };

    const handleSubmit = async () => {
        const response = await fetch("/api/Projects/addProject", {
            method: "POST",
            body: JSON.stringify({ name, img, images, desc, description, url }),
            headers: { 'Content-Type': 'application/json' },
        });

        Reset();
    };

    console.log(localStorage.getItem("isAdmin"));
    console.log(typeof localStorage.getItem("isAdmin"));

    return (
        <div className="min-h-screen dark:bg-gradient-to-r from-blue-800 to-indigo-900">
            {session.status === "authenticated" ? <UsersFetch email={session?.data?.user?.email} /> : null}
            <header className="sticky inset-0 z-50 border-b border-slate-100 dark:border-0 dark:bg-gradient-to-r from-blue-900 to-indigo-950 mb-4 bg-white/80 backdrop-blur-lg dark:text-indigo-200">
                <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
                    <div className="relative flex items-center">
                        {status === "authenticated" ? (
                            <Image src="/android-chrome-192x192.png" width={60} height={50} className="rounded-full" alt="profile" />
                        ) : (
                            <span className="w-[60px] h-[50px] flex justify-center items-center">
                                <AccountCircleIcon fontSize="large" />
                            </span>
                        )}
                    </div>
                    <ul className="hidden items-center justify-center gap-6 md:flex">
                        <li className="pt-1.5 font-dm text-sm font-medium text-slate-700 dark:text-indigo-300">
                            <div>{status === "authenticated" ? (
                                <span className="text-md font-semibold">{localStorage.getItem("userName")}</span>
                            ) : (
                                <span className="text-lg font-semibold">Admin</span>
                            )}</div>
                        </li>
                    </ul>
                    <div className="flex-grow"></div>
                    <div className="items-center justify-center gap-6 md:flex">
                        {status === "authenticated" ? (
                            <button
                                className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
                                onClick={() => {
                                    signOut();
                                    localStorage.removeItem("userName");
                                    localStorage.removeItem("isAdmin");
                                }}
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-8 py-2 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
                                onClick={() => router.push("/Admin")}
                            >
                                Login
                            </button>
                        )}
                    </div>
                </nav>
            </header>

            {status === "authenticated" ? (
                localStorage.getItem("isAdmin") === "true" ? (
                    <div className="py-4 max-w-screen-md border px-4 shadow-xl sm:mx-4 dark:min-h-screen sm:rounded-xl dark:bg-gradient-to-r from-blue-800 to-indigo-900 dark:shadow-lg dark:shadow-black/80 sm:px-4 sm:py-4 md:mx-auto dark:text-indigo-100 pb-4">
                        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
                            <div className="shrink-0 mr-auto sm:py-3">
                                <p className="font-medium">Add Project</p>
                                <p className="text-sm text-gray-600 dark:text-indigo-300">Add Project’s Details in our Database</p>
                            </div>
                            <button
                                className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200 dark:bg-gray-200 dark:hover:bg-gray-300"
                                onClick={Reset}
                            >
                                Cancel
                            </button>
                            <button
                                className="hidden rounded-lg border-2 border-transparent bg-red-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-red-800"
                                onClick={handleSubmit}
                            >
                                Save
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                            <p className="shrink-0 w-32 font-medium">Name</p>
                            <input
                                placeholder="First Name"
                                className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-red-600 sm:mr-4 dark:bg-transparent sm:mb-0 focus:ring-1"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                            <input
                                placeholder="Short Explanative Description"
                                className="w-full rounded-md border bg-white px-2 py-2 dark:bg-transparent outline-none ring-red-600 focus:ring-1"
                                value={desc}
                                onChange={(e) => setdesc(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                            <p className="shrink-0 w-32 font-medium">Description</p>
                            <input
                                placeholder="Description in Detail"
                                className="mb-2 w-full rounded-md border bg-white dark:bg-transparent px-2 py-2 outline-none ring-red-600 sm:mr-4 sm:mb-0 focus:ring-1"
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                            />
                            <input
                                placeholder="Project Code Link"
                                className="w-full dark:bg-transparent rounded-md border bg-white px-2 py-2 outline-none ring-red-600 focus:ring-1"
                                value={url}
                                onChange={(e) => seturl(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                            <p className="shrink-0 w-32 font-medium">Image</p>
                            <SingleImageDropzone
                                width={200}
                                height={200}
                                value={file}
                                onChange={(file) => {
                                    setFile(file);
                                }}
                            />
                           {Progress > 0 && Progress < 100 && (
  <div className="w-full bg-gray-300 rounded-full dark:bg-gray-800 my-4 h-6 relative">
    <div
      className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-xs font-medium text-white text-center leading-6 rounded-full transition-all duration-300"
      style={{ width: `${Progress}%` }}
    >
      {Progress}%
    </div>
  </div>
)}

                            {Progress > 0 && file && img ? (
                                <span className="mt-4 my-auto">Uploading Successfully</span>
                            ) : (
                                <button
                                    className="bg-red-700 text-white h-fit w-fit my-auto px-4 py-2 hover:bg-red-500 rounded-md"
                                    onClick={async () => {
                                        if (file) {
                                            const res = await edgestore.publicFiles.upload({
                                                file,
                                                onProgressChange: (progress) => {
                                                  // you can use this to show a progress bar
                                                  // console.log(progress);
                                                  setProgress(progress);
                                                },
                                              });
                                              // you can run some server action or api here
                                              // to add the necessary data to your database
                                              console.log(res);
                                              setimg(res?.url);
                                        }
                                    }}
                                >
                                    Upload
                                </button>
                            )}
                        </div>
                        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                            <p className="shrink-0 w-32 font-medium">Images</p>
                            <MultiFileDropzone
                                value={fileStates}
                                onChange={(fileStates) => setFileStates(fileStates)}
                                onFilesAdded={async(addedFiles)=>{
                                    setFileStates([...fileStates,...addedFiles])

                                    await Promise.all(
                                        addedFiles.map(async(addedFilestate)=>{
                                            try{
                                                const res=await edgestore.publicImages.upload({
                                                    file:addedFilestate.file,
                                                    onProgressChange:async(progress)=>{
                                                        updateFileProgress(addedFilestate.key,progress)
                                                        if(progress==100){
                                                            await new Promise((resolve)=>{
                                                                setTimeout(resolve,100)
                                                            })
                                                            updateFileProgress(addedFilestate.key,"COMPLETE")
                                                        }
                                                    }
                                                })
                                                console.log(res)
                                                setimages((prevImages)=>[...prevImages,res.url])
                                            }
                                            catch(err){
                                                updateFileProgress(addedFilestate.key,"ERROR")
                                            }
                                        })
                                    )
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    <BeforeLogin title="Unauthorized Access" subtitle="Only Admin can visit this page" text="Go To Homepage" link="/"/>
                )
            ) : (
                <BeforeLogin  title="Login is Required!" subtitle="Admin is Required for this page"  text="Go To Homepage" link="/"/>
            )}
        </div>
    );
};

export default AddProject;
