import React from 'react';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <iframe
    src={videoSrcURL}
    title={videoTitle}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    />
)

export default Video;