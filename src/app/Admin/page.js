// "use client";

// import GoogleIcon from '@mui/icons-material/Google';
// import { signIn, useSession } from 'next-auth/react';
// import Link from 'next/link';
// import { useState } from 'react';
// import BeforeLogin from "@/app/components/BeforeLogin/BeforeLogin";

// const Adminpage = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const session = useSession();
//     const [logInProgress, setLogInProgress] = useState(false);
//     const [loggedIn, setLoggedIn] = useState(false);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoggedIn(false);
//         setLogInProgress(true);

//         await signIn('credentials', { email, password });
//         setLoggedIn(true);
//         setLogInProgress(false);
//     };

//     return (
//         <>
//             {session.status === "authenticated" && loggedIn ? (
//                 <div className='min-h-screen dark:bg-gradient-to-r from-blue-800 to-indigo-900'>
//                     <BeforeLogin
//                         title={` Hey! ${session.data.user.name}`}
//                         subtitle={"You are LoggedIn"}
//                         text={"Go To AddProject Page"}
//                         link={"/Admin/addProject"}
//                     />
//                 </div>
//             ) : (
//                 <section className="pt-8 dark:bg-gradient-to-r from-blue-800 to-indigo-900 min-h-screen">
//                     <div className="flex items-center justify-center w-full px-5 sm:px-0">
//                         <div className="flex bg-white dark:bg-gradient-to-tr from-blue-800 to-indigo-700 dark:text-indigo-100 rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-sm w-full">
//                             <div className="w-full p-8">
//                                 <p className="text-xl text-red-600 dark:text-indigo-100 text-center font-semibold">Admin Login</p>
//                                 <div className="mt-4">
//                                     <label className="block text-gray-700 dark:text-indigo-300 text-sm font-bold mb-2">
//                                         Email Address
//                                     </label>
//                                     <input
//                                         className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-700"
//                                         type="email"
//                                         name="email"
//                                         id="email"
//                                         value={email}
//                                         onChange={e => setEmail(e.target.value)}
//                                         disabled={logInProgress}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mt-4 flex flex-col justify-between">
//                                     <div className="flex justify-between">
//                                         <label className="block text-gray-700 dark:text-indigo-300 text-sm font-bold mb-2">
//                                             Password
//                                         </label>
//                                     </div>
//                                     <input
//                                         className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-red-700"
//                                         type="password"
//                                         name='password'
//                                         value={password}
//                                         onChange={e => setPassword(e.target.value)}
//                                         disabled={logInProgress}
//                                     />
//                                 </div>
//                                 <div className="mt-8">
//                                     <button
//                                         className="bg-red-700 text-white dark:text-indigo-100 font-bold py-2 px-4 w-full rounded hover:bg-red-400"
//                                         disabled={logInProgress}
//                                         onClick={handleSubmit}
//                                     >
//                                         Login
//                                     </button>
//                                 </div>
//                                 <button type='button'
//                             className=" flex items-center justify-center mt-4 text-white dark:bg-gray-50 dark:hover:bg-gray-200 w-full rounded-lg shadow-md hover:bg-gray-100" onClick={() => signIn('google', { callbackUrl: '/' })}
//                         >
//                             <div className="flex px-5 justify-center w-full py-3">
//                                 <div className="min-w-[30px]">
//                                     <svg className="h-6 w-6" viewBox="0 0 40 40">
//                                         <path
//                                             d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                                             fill="#FFC107"
//                                         />
//                                         <path
//                                             d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
//                                             fill="#FF3D00"
//                                         />
//                                         <path
//                                             d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
//                                             fill="#4CAF50"
//                                         />
//                                         <path
//                                             d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
//                                             fill="#1976D2"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <div className="flex w-full justify-center">
//                                     <div className="whitespace-nowrap text-gray-600 dark:text-indigo-500 font-bold">
//                                         SignIn with Google
//                                     </div>
//                                 </div>
//                             </div>
//                         </button>
//                                 <div className="mt-4 flex items-center w-full text-center">
//                                     <Link
//                                         href="/register"
//                                         className="text-xs text-gray-500 dark:text-indigo-50 capitalize text-center w-full"
//                                     >
//                                         Don&apos;t have any account yet?
//                                         <span className="text-red-700"> Sign Up</span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             )}
//         </>
//     );
// };

// export default Adminpage;

import React from 'react'

const login = () => {
  return (
    <div>login</div>
  )
}

export default login
