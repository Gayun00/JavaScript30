import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css'

const VideoList = (props) => (
      <ul className={styles.list}>
        {props.videos.map((video)=> <VideoItem video={video}/>)}
      </ul>
  );

export default VideoList;