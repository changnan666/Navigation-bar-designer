import React, { useContext } from "react";
import { Checkbox } from "antd";
import { CanvasContext } from "src/context";

const App = () => {
  const { freeDrawing, setFreeDrawing } = useContext(CanvasContext);

  return (
    <Checkbox
      onChange={(e) => {
        setFreeDrawing(e.target.checked ? true : false);
      }}
      checked={freeDrawing}
    >
      自由绘制
    </Checkbox>
  );
};

export default App;
