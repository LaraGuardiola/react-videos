import React from 'react';
import VideoItem from './VideoItem';

//retrieving the videos props from the parent component we return a VideoItem component for each video

const VideoList = ({videos}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem video={video}/>
    })
    return <div>{renderedList}</div>
}

export default VideoList;