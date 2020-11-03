import React, { useContext } from "react";
import { CanvasController } from "src/components";
import { CanvasContext } from "src/context";

const App = () => {
  const { actionType } = useContext(CanvasContext);

  const startDraw = actionType === "rect";

  return (
    <CanvasController>
      <div className="content">123</div>
    </CanvasController>
  );
};

export default App;
