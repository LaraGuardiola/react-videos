import './VideoItem.css';
import React from 'react';
import VideoItem from './VideoItem';

//retrieving the videos props from the parent component we return a VideoItem component for each video

const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect}video={video}/>
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;