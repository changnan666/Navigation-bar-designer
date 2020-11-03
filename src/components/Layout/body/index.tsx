import React from "react";
import { Canvas } from "src/model";
import Slider from "./slider";
import Panel from "./panel";

export default () => {
  return (
    <div className="body">
      <div className="slider">
        <Slider />
      </div>
      <div className="canvas">
        <Canvas />
      </div>
      <div className="panels">
        <Panel />
      </div>
    </div>
  );
};
