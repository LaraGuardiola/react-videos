import React from 'react';

//videos have been passed as a prop from the parent component and used to display the thumbnail and title
const VideoItem = ({video}) => {
    console.log(video)
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.id.kind}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;