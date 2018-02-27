import React from 'react';
import ChatWindow from './../../components/live-chat-window';
import Launch from './../../components/launch/index';
import './scss/_live-chat-container.scss';

const LiveChatApp = () => {    
    return (
        <div className="live-chat-container">
            <ChatWindow />
            <Launch />
        </div>
    )
}

export default LiveChatApp;
