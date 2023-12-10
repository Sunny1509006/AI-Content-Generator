import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from "../Axios"

const YouTubePlayer = () => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get('/api/youtube/get/1')
      .then(response => {
        const videoData = response.data.result[0];
        if (videoData && videoData.url) {
          // Extract the YouTube video ID from the URL
          const urlParts = new URL(videoData.url);
          const searchParams = new URLSearchParams(urlParts.search);
          const youtubeId = searchParams.get('v');
          console.log(youtubeId)
          setVideoId(youtubeId);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data only once on component mount

  const opts = {
    height: '600',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    console.log(`YouTube player is ready: ${event.target}`);
  };

  const onError = (event) => {
    console.error(`Error occurred: ${event.data}`);
  };

  return (
    <div style={{padding: '40px'}}>
      {videoId && (
        <YouTube videoId={videoId} opts={opts} onReady={onReady} onError={onError} />
      )}
    </div>
  );
};

export default YouTubePlayer;








// import React from 'react';
// import YouTube from 'react-youtube';

// const YouTubePlayer = () => {
//   // Options for the YouTube player (can be customized as needed)
//   const opts = {
//     height: '700',
//     width: '100%',
//     playerVars: {
//       autoplay: 1, // Auto-play the video
//     },
//   };

//   const youtubeVideoId = 'Cx5aNwnZYDc';

//   // OnReady function to log the ready state of the YouTube player
//   const onReady = (event) => {
//     // access to player in all event handlers via event.target
//     console.log(`YouTube player is ready: ${event.target}`);
//   };

//   // OnError function to handle any errors encountered while loading the video
//   const onError = (event) => {
//     console.error(`Error occurred: ${event.data}`);
//   };

//   return (
//     <div>
//       <YouTube videoId={youtubeVideoId} opts={opts} onReady={onReady} onError={onError} />
//     </div>
//   );
// };

// export default YouTubePlayer;
