import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => (
      props.videos.map((video)=> <VideoItem video={video}/>)
  );

export default VideoList;