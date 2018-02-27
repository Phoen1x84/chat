import React from "react";
import './scss/_launch.scss';

const Launch = () => {
    return(
        <div className="launch">
            <button className="launch__btn">
                <span className="launch__text">Launch</span>
                <i className="launch__icon">X</i>
            </button>
        </div>
    )
}

export default Launch;