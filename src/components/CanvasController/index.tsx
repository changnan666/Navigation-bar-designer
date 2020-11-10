import React, { useContext } from "react";
import { CanvasContext } from "src/context";

const App: React.FunctionComponent = ({ children }) => {
  const { actionType } = useContext(CanvasContext);

  const startDraw = actionType === "rect";

  return (
    <div
      onMouseDown={(e) => startDraw || e.stopPropagation()}
      style={{
        width: "100%",
        height: "100%",
        cursor: startDraw ? "cell" : "auto",
      }}
    >
      {children}
    </div>
  );
};

export default App;
