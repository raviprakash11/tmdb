import React from 'react';
import "./BackgroundImage.css";

export const BackgroundImage = ({ content, bgImage }) => {
    const bgStyle = {};
    if(bgImage) {
        bgStyle['background-image'] = `url(${bgImage})`;
    }

    return (
        <div className="bg-image" style={bgStyle}>
            {content}
        </div>
    )
}