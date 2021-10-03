import React from 'react';
import VideoList from '../video_list/video_list';
import styles from './video_item.module.css'

const VideoItem = (props) => (
      <li className={styles.item}>
        <img src={props.video.snippet.thumbnails.medium.url} alt="" />
        <h4 className={styles.title}>{props.video.snippet.title}</h4>
        <h5>{props.video.snippet.channelTitle}</h5>
      </li>
  );

export default VideoItem;