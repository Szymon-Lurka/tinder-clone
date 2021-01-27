import React from 'react'
import './Chats.css';
import Chat from '../Chat/Chat';

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="Hey! How are you 😄"
                timestamp="35 minutes ago"
                profilePic="https://cdn-lubimyczytac.pl/upload/authors/106803/337622-352x500.jpg"
            />
            <Chat
                name="Sasha"
                message="What's going on? 👄👄👄"
                timestamp="48 minutes ago"
                profilePic="https://cdn.galleries.smcloud.net/t/galleries/gf-1JGf-Ljhq-9EQy_sasha-grey-kim-jest-7-faktow-o-slynnej-aktorce-664x442-nocrop.jpg"
            />
            <Chat
                name="Mark"
                message="Do we know each other? 😉"
                timestamp="5 hours ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
            />
        </div>
    );
}

export default Chats;