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
        this.handleToggleWindowClick = this.handleToggleWindowClick.bind(this);
    }

    handleToggleWindowClick(e) {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {        
        return (
            <div className="live-chat-container">                
                <ChatWindow chatOpen={this.state.isOpen} />                
                <Launch chatOpen={this.state.isOpen} buttonText="Launch" toggleChatMethod={this.handleToggleWindowClick} />
            </div>
        )
    }
}

export default LiveChatApp;
