import React from 'react';

const ChatViewer = (props) => {
    const feed = props.chatFeed.messages;

    const messageType = (message) => {
        if (message.from.type === 'Agent') {
            return 'agent-msg';
        } else {
            return 'user-msg';
        }
    };

    const messages = feed.map((message) => {
        const prefix = messageType(message);
        const timeStamp = new Date(Date.UTC(message.utcTime));
        return <div className={`${prefix}`} key={message.index}>
            <span className={`${prefix}__icon`}></span>
            <div className={`${prefix}__text`}>
                <p>{message.text}</p>
            </div>
            <span className={`${prefix}__time-stamp`}>
                {message.utcTime}
            </span>
        </div>;
    });

    return (
        <div className="">
            {messages}
            {/* <div className="agent-msg">
                <span className="agent-msg__icon">
                </span>
                <div className="agent-msg__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <span className="agent-msg__time-stamp">12:05</span>
            </div>
            <div className="user-msg">
                <div className="user-msg__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <span className="user-msg__time-stamp">12:10</span>
            </div> */}
        </div>
    )
}

export default ChatViewer;