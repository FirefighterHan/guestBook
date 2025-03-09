import {useMessageContext} from '../hooks/useMessageContext'
import { useAuthContext } from '../hooks/useAuthContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const MessageDetails = ({message}) => {

    const {dispatch} = useMessageContext()
    const {user} = useAuthContext()

    const handleClick = async () => {
        if (!user) {
            return
        }
        
        const response = await fetch('/api/message/'+message._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_MESSAGE', payload: json})
        }
    }
    return (
        <div className="message-details">
            <h4>{user.email}</h4>
            <p><strong>Message: </strong>{message.message}</p>
            <p><strong>Category: </strong>{message.category}</p>
            <p><strong>Date & Time: </strong>{formatDistanceToNow(new Date(message.createdAt), {addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default MessageDetails