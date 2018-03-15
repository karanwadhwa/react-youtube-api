import React from 'react';

const VideoListItem = (props) => {
  console.log(props.video);
  const ImgURL = props.video.snippet.thumbnails.default.url;
  const Title = props.video.snippet.title
  return (
    <li className='list-group-item'>
      <div className='media'>
        <img class="mr-3" src={ImgURL} alt="Generic placeholder image" />
        <div class="media-body">
          <h5 class="mt-0 mb-1">{Title}</h5>

        </div>
      </div>
    </li>
  );
};

export default VideoListItem;