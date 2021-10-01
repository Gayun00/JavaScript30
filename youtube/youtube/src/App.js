
import { useEffect, useState } from 'react';
import './App.css';
import VideoList from './component/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(()=> {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAt8I7JixpSlVGYppZFNK-Lw3ZXfegCJD4", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      // .then(console.log(videos))
  })
  return (
    <VideoList videos={videos}/>
  );
}

export default App;
