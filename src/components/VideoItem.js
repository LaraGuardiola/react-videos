import React from 'react';

//videos have been passed as a prop from the parent component and used to display the thumbnail and title
const VideoItem = ({video}) => {
    console.log(video)
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt={video.id.kind}/>
            {video.snippet.title}
        </div>
    )
}

export default VideoItem;