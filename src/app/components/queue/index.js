import React from 'react';
//import LinkButton from './../../components/shared/link-button/link-button.js';
import './scss/_queue.scss';

const QueueWindow = (props) => {

    return(
        <div className="queue">
            <img src="http://via.placeholder.com/62x62" alt="placeholder image" />
            <p>We apologise for the delay, all our agents are currently busy.</p>
            <div className="wait">
                <div className="wait__time">
                    <span className="wait__stamp">10:00</span>
                    <span className="wait__text">Est. time till chat</span>
                </div>
                <div className="wait__position">
                    <span className="wait__stamp">6</span>
                    <span className="wait__text">Position</span>
                </div>
            </div>
            <p>If you do not want to wait we could <strong>arrange a callback</strong> for a time that suits you?</p>
            <div className="">
                <div className="">
                    {/* <LinkButton LinkUrl="#" LinkText="Wait" /> */}
                </div>
                <div className="">
                    {/* <LinkButton LinkUrl="#" LinkText="Arrange" />                     */}
                </div>
            </div>
        </div>
    )
}

export default QueueWindow;