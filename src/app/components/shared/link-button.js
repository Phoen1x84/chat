import React from 'react';

const LinkButton = (props) => {
    return(
        <a href={props.linkUrl} className="">
            props.linkText
        </a>
    )
}

export default LinkButton;