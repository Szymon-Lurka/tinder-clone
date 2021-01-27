import React from 'react'
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';

const Chat = ({ name, message, timestamp, profilePic }) => {
    return (
        <div className="chat">
            <Avatar src={profilePic} alt="" className="chat__avatar" />
            <div className="chat__details">
                <h2 className="chat__name">{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
        </div>
    );
}

export default Chat;
