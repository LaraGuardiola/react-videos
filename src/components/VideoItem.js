import React from 'react';

//videos have been passed as a prop from the parent component and used to display the thumbnail and title
const VideoItem = ({video, onVideoSelect}) => {
    console.log(video)
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;