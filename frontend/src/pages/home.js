import {useEffect, useState } from 'react'

// components
import MessageDetails from '../components/MessageDetails'

const Home = () => {
    const [messages, setMessages] = useState(null)

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch('/api/message')
            const json = await response.json()

            if (response.ok) {
                setMessages(json)
            }
        }

        fetchMessage()
    }, [])

    return (
        <div className="home">
            <div className="messages">
                {messages && messages.map((message) => (
                    <MessageDetails key={messages._id} message={message}/>
                ))}
            </div>
        </div>
    )
}

export default Home