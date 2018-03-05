

//////////////////// VIDEO LIST ITEMS ///////////////////////////

import React from 'react';

/////////////////////////////////////////////////////////////////

const VideoListItem = ({video, onVideoSelect}) => { //we can get a var from props
                                     //this way.
  const imageUrl = video.snippet.thumbnails.default.url;

  return(

    <li onClick={()=>onVideoSelect(video)} className="list-group-item">
      <div className="video-list media" >
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

//2- We must export the component

export default VideoListItem;

/////////////////////////////////////////////////////////////////
