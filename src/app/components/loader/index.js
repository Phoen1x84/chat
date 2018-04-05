import React from 'react';
import './scss/_incoming-msg.scss';

const Loader = () => {
    // recommended to call the type preview every 10 seconds
    return (
        <div className="incoming-msg">
            <span className="incoming-msg__dot"></span>
            <span className="incoming-msg__dot"></span>
            <span className="incoming-msg__dot"></span>
        </div>
    )
}

export default Loader;