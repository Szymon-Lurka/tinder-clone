import Avatar from '@material-ui/core/Avatar';
import React, { useState } from 'react'
import './ChatScreen.css';

const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Sarah',
            image: 'https://cdn-lubimyczytac.pl/upload/authors/106803/337622-352x500.jpg',
            message: 'Hey! How are you 😄'
        },
        {
            name: 'Sarah',
            image: 'https://cdn-lubimyczytac.pl/upload/authors/106803/337622-352x500.jpg',
            message: 'Maybe u want to hangout sometimes?'
        },
        {
            message: "Sure! I'd love to!"
        }
    ]);
    const handleChangeInput = e => {
        let value = e.target.value;
        setInput(value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__title">YOU MATCHED WITH SARAH ON 24/01/2021</p>
            {messages.map(message => (
                message.name ? (
                    <div
                        className="chatScreen__message">
                        <Avatar
                            src={message.image}
                            alt=""
                            className="chatScreen__avatar" />
                        <p
                            className="chatScreen__text">
                            {message.message}
                        </p>
                    </div>
                ) : (
                        <div
                            className="chatScreen__myMessage">
                            <p
                                className="chatScreen__myText">
                                {message.message}
                            </p>
                        </div>
                    )
            ))}
            <form
                className="messageForm">
                <input
                    placeholder="Type a message"
                    className="messageForm__input"
                    value={input}
                    onChange={handleChangeInput}
                />
                <button
                    className="messageForm__button"
                    onClick={handleSubmit}
                >
                    SEND
                    </button>
            </form>
        </div>
    );
}

export default ChatScreen;
