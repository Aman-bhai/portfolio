"use client"
import { useRouter } from 'next/navigation'

import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import toast from 'react-hot-toast';

const Button = (props) => {
    const router = useRouter()
    return (
        <button className="flex items-center border-0 gap-2 py-2 px-4 rounded-full font-semibold bg-red-500 text-white hover:bg-red-800" onClick={() => {
            toast.loading("CV loading")
            router.push(`${props.link}`)
           
        }}>
            Download CV <DownloadForOfflineOutlinedIcon />
        </button>
    )
}

export default Button