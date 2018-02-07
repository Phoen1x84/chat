import React from 'react';
import ReactDOM from 'react-dom';
import LiveChatApp from './live-chat.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('looks like we are in development mode!');
}

ReactDOM.render(
    <LiveChatApp />,
    document.getElementById('live-chat-app')
);