

import Contacts from "@/app/components/Contact/Contacts"


const Contact = () => {
    return (
        <>
        <section className="text-gray-600 dark:bg-gradient-to-r from-blue-800 to-indigo-900 dark:text-blue-50 dark:min-h-screen body-font px-12 sm:px-24 py-10 z-0 ">
        <Contacts LINKEDIN={process.env.LINKEDIN} X={process.env.X} WHATSAPP={process.env.WHATSAPP}/>

        </section></>
    )
}

export default Contact