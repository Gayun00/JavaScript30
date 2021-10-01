import React from 'react';
import VideoList from '../video_list/video_list';

const VideoItem = (props) => (
      <li>
        <img src={props.video.snippet.thumbnails.medium.url} alt="" />
        
      </li>
  );

export default VideoItem;