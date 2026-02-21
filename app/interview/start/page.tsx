"use client"

import {useRouter} from "next/navigation"

export default function Page() {
    const router = useRouter()

    const handleClick = () => {
        // Generate the room id 
        // Todo: Move to server
        const roomId = Array.from({length:5}, () => {
            return "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
        }).join("");
        // Navigate to the room page
        router.push(`/interview/${roomId}`)
    }

    return (
        <div className="interview-start-page w-full h-screen flex flex-col">
            <div className="header text-center p-4 border-[var(--primary)] border-solid border-b-1">
                <h1 className='font-semibold'>Start Interview as</h1>
            </div>

            <div className="role-selector flex w-full justify-between align-center text-center h-full">
                <div 
                onClick={handleClick}
                className="selector-box flex-1 border-[var(--primary)] border-solid border-r-1 flex flex-col justify-center">
                    <div className='h-max item-center font-bold'>Candidate</div>
                </div>
                <div
                onClick={handleClick} 
                className="selector-box flex-1 border-[var(--primary)] flex flex-col justify-center">
                    <div className='h-max item-center font-bold'>Interviewer</div>
                </div>
            </div>
        </div>
    )
}