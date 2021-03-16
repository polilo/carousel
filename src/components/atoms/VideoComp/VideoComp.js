import React, { memo } from 'react';

import './VideoComp.css'

const VideoComp = ({ src, expansion = 'mp4' }) => (
    <video controls>
        <source src={src} type={`video/${expansion}`} />
    </video>
)


export default memo(VideoComp);