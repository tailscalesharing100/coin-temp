import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [showShader, setShowShader] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setIsLoading(true);
    setShowShader(true);
    
    // Start loading animation and iframe
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleIframeLoad = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div className="app">
      <div className="contract-address">
        CA : Bj41XvRvz7vrCJA4vqY1GcPLj3AZ2UqagsHGTj9Bbonk
      </div>
      
      <audio ref={audioRef} loop hidden>
        <source src="/coin-temp/bg.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {!showShader && (
        <div className="intro-screen">
          <button 
            className="interest-button"
            onClick={handleClick}
          >
            PAJEET
          </button>
        </div>
      )}

      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}

      {showShader && (
        <iframe 
          id="shader-iframe"
          src="https://www.shadertoy.com/embed/3lsSzf?gui=false&t=0&paused=false&muted=false"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            pointerEvents: 'none',
            opacity: isIframeLoaded ? 1 : 0,
            transition: 'opacity 1s'
          }}
          onLoad={handleIframeLoad}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
        />
      )}
    </div>
  )
}

export default App
