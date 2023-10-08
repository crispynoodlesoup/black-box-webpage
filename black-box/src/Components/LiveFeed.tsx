import React, { useEffect, useRef } from 'react';

const LiveFeed = () => {
  // Provide an initial type for videoRef using the 'HTMLVideoElement' type
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const startVideoStream = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/video_feed'); // Corrected URL
        if (!response.ok) {
          throw new Error('Failed to fetch video stream');
        }

        const stream = response.body as ReadableStream<Uint8Array>;

        const mediaSource = new MediaSource();

        // Check if videoRef.current is not null before setting src
        if (videoRef.current) {
          videoRef.current.src = window.URL.createObjectURL(mediaSource);
        }

        const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');

        const reader = stream.getReader();
        
        const onData = async () => {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              mediaSource.endOfStream();
              break;
            }
            sourceBuffer.appendBuffer(value);
          }
        };

        onData();
      } catch (error) {
        console.error('Error fetching video stream:', error);
      }
    };

    startVideoStream();
  }, []);

  return (
    <div>
      <h1>Live Video Feed</h1>
      {/* Add 'controls' and 'autoPlay' props to the video element */}
      <video ref={videoRef} controls autoPlay />
    </div>
  );
};

export default LiveFeed;
