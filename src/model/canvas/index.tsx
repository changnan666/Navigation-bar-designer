import React, { useContext, useState } from "react";
import { CanvasController, Navbar } from "src/components";
import { CanvasContext } from "src/context";

const App = () => {
  const { actionType } = useContext(CanvasContext);
  const [elements, setElements] = useState<any[]>([]);

  const onMouseDown = () => {
    if (actionType === "rect") {
      elements.push(Navbar);
      setElements([...elements]);
    }
  };

  return (
    <CanvasController>
      <div className="content" onMouseDown={onMouseDown}>
        {elements.map((Item, i) => (
          <Item />
        ))}
      </div>
    </CanvasController>
  );
};

export default App;
