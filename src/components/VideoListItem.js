import React from 'react';

const VideoListItem = (props) => {
  console.log(props.video);
  const ImgURL = props.video.snippet.thumbnails.medium.url;
  const Title = props.video.snippet.title
  return (
    <li className='list-group-item'>
      <div className='media'>
        <img className="mr-3" width={168} height={94} src={ImgURL} />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{Title}</h5>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;