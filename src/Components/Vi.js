import React, { useState, useEffect, useRef } from 'react';
import video from '../vi.mp4'



const VideoComponent = () => {

  const videoEl = useRef(null);


  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const [showComponent, setShowComponent] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (opacity === 0) {
      const hideTimer = setTimeout(() => {
        setShowComponent(false);
      }, 500);
      return () => clearTimeout(hideTimer);
    }
  }, [opacity]);

  if (!showComponent) {
    return <LandingPage />;
  }

  return (
    <div style={{
      opacity,
      transition: 'opacity 0.5s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <video width="100%" 
        height="100%" 
        muted 
        playsInline 
        ref={videoEl}
        src={video} 
      ></video>
    </div>
  );
};

const LandingPage = () => {
  return(
    <p>Hello</p>
  );  
};

export default VideoComponent;