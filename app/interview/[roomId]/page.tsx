"use client"
import {  useEffect, useRef } from "react"
import { useParams } from "next/navigation"

const Page =  () => {
    const params =   useParams()
    const socket: any = useRef(null);

    useEffect(() => {
        // Init socket connection
        socket.current = new WebSocket(`ws://localhost:8080/api/ws/start/${params.roomId}`)
        socket.current.onopen = () => {
            console.log("Connected")
        }

        socket.current.onclose = () => {
            console.log("Disconnected")
        }

        socket.current.onmessage = (event: any) => {
            console.log(event.data)
        }

        return () => {
            socket.current.close()
        }
    }, [])

    return (
        <div>
            <h1>Room: {params.roomId}</h1>
            <button onClick={() => socket.current.send("Hello")}>Say hello</button>
        </div>
    )
}

export default Page