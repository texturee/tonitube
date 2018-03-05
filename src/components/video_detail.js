

//////////////////// VIDEO DETAILS //////////////////////////////

import React from 'react';

/////////////////////////////////////////////////////////////////

const VideoDetail = ({video}) => {

  if(!video) {
    return <div> Loading... </div>;
  }

  console.log(video);

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div className="video-detail col-md-8" style={{padding:'0px'}}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div className="video-title">{video.snippet.title}</div>
        <div className="descriptionn">{video.snippet.description}</div>
          <nav className="level">
            <div className="level-item has-text-centered">
            <div>
              <p className="heading">Plays</p>
              <p className="subtitle">3,456</p>
            </div>
          </div>
            <div className="level-item has-text-centered">
            <div>
              <p className="heading">Following</p>
              <p className="subtitle">123</p>
            </div>
          </div>
            <div className="level-item has-text-centered">
            <div>
              <p className="heading">Followers</p>
              <p className="subtitle">250</p>
            </div>
          </div>
            <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="subtitle">789</p>
            </div>
            </div>
          </nav>
      </div>
    </div>

  );
};

//2- We must export the component

export default VideoDetail;

/////////////////////////////////////////////////////////////////
