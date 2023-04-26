import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const fullscreen = useRef<HTMLDivElement | null>(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  // useEffect(() => {
  //   // Check if the browser supports the Fullscreen API
  //   (async () => {
  //     await fullscreen.current?.requestFullscreen();
  //   })();
  // }, []);
  return (
    <div className="App" ref={fullscreen}>
      <h1>LIJEPA PRICA</h1>
      {/* {isFullscreen ? (
        <div></div>
      ) : (
        <button
          onClick={async (e) => {
            setIsFullscreen(true);
            await fullscreen.current?.requestFullscreen();
          }}
        >
          click
        </button> 
      )}
*/}
    </div>
  );
}

export default App;
