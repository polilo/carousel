import React, { memo } from 'react';

const VideoComp = ({ src, type = 'mp4' }) => {
    const videoStyles = {
        width: '100%',
        height: '100%'
    };

    return (
        <video controls style={videoStyles}>
            <source src={src} type={`video/${type}`} />
        </video>
    )
};

export default memo(VideoComp);