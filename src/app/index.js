import React from 'react';
import ReactDOM from 'react-dom';
import LiveChatApp from './components/live-chat-container/index.js';

if (process.env.NODE_ENV !== 'production') {
    console.log('looks like we are in development mode!');
}

ReactDOM.render(
    <LiveChatApp />,
    document.getElementById('live-chat-app')
);