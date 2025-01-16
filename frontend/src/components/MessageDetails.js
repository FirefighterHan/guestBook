import {useMessageContext} from '../hooks/useMessageContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const MessageDetails = ({message}) => {

    const {dispatch} = useMessageContext()

    const handleClick = async () => {
        const response = await fetch('/api/message/'+message._id, {
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_MESSAGE', payload: json})
        }
    }
    return (
        <div className="message-details">
            <h4>Message Details:</h4>
            <p><strong>Message: </strong>{message.message}</p>
            <p><strong>Category: </strong>{message.category}</p>
            <p><strong>Date & Time: </strong>{formatDistanceToNow(new Date(message.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default MessageDetails