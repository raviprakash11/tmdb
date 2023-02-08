import React from 'react';

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