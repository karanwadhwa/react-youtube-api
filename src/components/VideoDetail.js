import React from 'react';

const VideoDetail = (props) => {

  if(!props.video){
    return <div>Loading...</div>
  }
  const VideoID = props.video.id.videoId;
  const VideoURL = 'https://www.youtube.com/embed/'+VideoID;

  return (
    <div className='col-md-8 video-detail'>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={VideoURL}></iframe>
      </div>
      <div className="details">
        <h5>{props.video.snippet.title}</h5>
        <div>{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;