import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const ImgURL = video.snippet.thumbnails.medium.url;
  const Title = video.snippet.title
  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='media'>
        <img className="mr-3" width={168} height={94} src={ImgURL} />
        <div className="media-body">
          <p className="mt-0 mb-1">{Title}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;