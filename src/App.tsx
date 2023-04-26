import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const fullscreen = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   // Check if the browser supports the Fullscreen API
  //   (async () => {
  //     await fullscreen.current?.requestFullscreen();
  //   })();
  // }, []);
  return (
    <div className="App" ref={fullscreen}>
      <button
        onClick={async (e) => {
          await fullscreen.current?.requestFullscreen();
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
