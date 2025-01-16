import { useState } from 'react'

const MessageForm = () => {
    const  [message, setMessage] = useState('')
    const  [category, setCategory] = useState('')
    const  [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const messageSent = {message, category}

        const response = await fetch('/api/message', {
            method: 'POST',
            body: JSON.stringify(messageSent),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)

        }
        if (response.ok) {
            setMessage('')
            setCategory('')
            setError(null)
            console.log('new Message added', json)
        }
    }

    return (
        <form className = "create" onSubmit={handleSubmit}>
            <h3>Add a new message</h3>

            <label>Message:</label>
            <input
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                />
            
            <label>category:</label>
            <input
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                />
            
            <button>Send Message</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default MessageForm