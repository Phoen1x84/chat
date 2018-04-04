import React, { Component } from 'react';
import ChatWindow from './../../components/live-chat-window';
import Launch from './../../components/launch/index';
import './scss/_live-chat-container.scss';

class LiveChatApp extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {        
        return (
            <div className="live-chat-container">                
                <ChatWindow chatOpen={this.state.isOpen} />
                <Launch chatOpen={this.state.isOpen} buttonText={Launch} toggleChatMethod={this.handleClick} />
            </div>
        )
    }
}

export default LiveChatApp;
