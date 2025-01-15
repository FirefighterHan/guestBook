const MessageDetails = ({message}) => {
    return (
        <div className="message-details">
            <h4>Message Details:</h4>
            <p><strong>Message: </strong>{message.message}</p>
            <p><strong>Category: </strong>{message.category}</p>
            <p><strong>Date & Time: </strong>{message.createdAt}</p>
        </div>
    )
}

export default MessageDetails