

//////////////////// VIDEO LIST COMPONENT ///////////////////////

import React from 'react';

import VideoListItem from './video_list_item';

/////////////////////////////////////////////////////////////////

const VideoList = props => {

  const videoItems = props.videos.map(video => {
    return(
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    )
  });

  return(
    <ul className = "col-md-4 list-group" style={{padding:'0px'}} >
      {videoItems}
    </ul>
  );
}

//2- We must export the component

export default VideoList;

/////////////////////////////////////////////////////////////////
