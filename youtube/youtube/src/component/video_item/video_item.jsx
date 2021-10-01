import React from 'react';
import VideoList from '../video_list/video_list';

const VideoItem = (props) => (
      <h3>{props.video.snippet.title}</h3>
  );

export default VideoItem;