import { useEffect, useState } from "react";
import { Gradient } from "./vendor/Gradient.js";

function App() {
  useEffect(() => {
    // Create your instance
    const gradient = new Gradient();
    //@ts-ignore
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="w-screen h-screen">
      <canvas id="gradient-canvas" data-transition-in />
    </div>
  );
}

export default App;
