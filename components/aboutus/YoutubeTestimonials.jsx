// src/components/YouTubeVideo.js
import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId,height,width }) => {
  // Options to customize the embedded player
  const opts = {
    height: height,
    width: width,
    playerVars: {
      // Add any desired player parameters (optional)
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
