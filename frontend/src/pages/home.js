import {useEffect} from 'react'
import { useMessageContext } from '../hooks/useMessageContext'

// components
import MessageDetails from '../components/MessageDetails'
import MessageForm from '../components/MessageForm'


const Home = () => {
    const {messages, dispatch} = useMessageContext()

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch('/api/message')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_MESSAGES', payload: json})
            }
        }

        fetchMessage()
    }, [dispatch])

    return (
        <div className="home">
            <div className="messages">
                {messages && messages.map((message) => (
                    <MessageDetails key={messages._id} message={message}/>
                ))}
            </div>
            <MessageForm/>
        </div>
    )
}

export default Home