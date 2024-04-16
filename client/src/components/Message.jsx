import React, { useState } from 'react'
import Avatar from 'react-avatar';
import { SlLike } from "react-icons/sl";

const Message = ({ name, time, message }) => {
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const [showLikeButton, setShowLikeButton] = useState(false);

    const handleLike = () => {
        if (!liked) {
            setLikeCount(likeCount + 1);
            setLiked(true);
        }
    };
    return (
        <div className="chat-container" onMouseEnter={() => setShowLikeButton(true)}
            onMouseLeave={() => setShowLikeButton(false)}>
            <Avatar size="50" round={true} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80' />
            <div className="chat-bubble">
                <div className="chat-info" onClick={handleLike}>
                    <span className="user-name">{name}</span>
                    <span className="chat-time">{time}</span>
                </div>
                <p className="chat-message">{message}</p>
                {showLikeButton && (
                    <div className="like-container" onClick={handleLike}>
                        <SlLike style={{ color: liked ? 'blue' : 'black' }}/>
                        {liked && <span className="like-count">{likeCount}</span>}
                    </div>
                )}

            </div>


        </div>
    )
}

export default Message
