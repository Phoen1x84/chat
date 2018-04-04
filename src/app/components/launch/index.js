import React from "react";
import './scss/_launch.scss';

const Launch = (props) => {     
    return (        
        <div className="launch">
            <button className={props.chatOpen ? "launch__btn launch__btn--open" : "launch__btn"} onClick={props.toggleChatMethod}>
                <i className="launch__icon"></i>
                <span className="launch__text">
                    {props.buttonText}
                </span>
            </button>
        </div>
    )
}

export default Launch;