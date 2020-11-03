import React, { useContext } from "react";
import { Checkbox } from "antd";
import { CanvasContext } from "src/context";

const App = () => {
  const { freeDrawing, setFreeDrawing } = useContext(CanvasContext);

  const onChange = (e: any) => {
    setFreeDrawing(e.target.value);
  };

  return (
    <Checkbox onChange={onChange} value={freeDrawing}>
      自由绘制
    </Checkbox>
  );
};

export default App;
