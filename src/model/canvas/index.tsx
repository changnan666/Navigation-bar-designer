import React, { useContext, useState } from "react";
import { CanvasController, Navbar, Settings } from "src/components";
import { CanvasContext } from "src/context";

const App = () => {
  const { actionType, setActive } = useContext(CanvasContext);
  const [elements, setElements] = useState<any[]>([]);

  const [index, setIndex] = useState(-1);

  const onMouseDown = () => {
    if (actionType === "rect") {
      elements.push(Navbar);
      setElements([...elements]);
      setActive("");
    }
  };

  return (
    <CanvasController>
      <div className="content" onMouseDown={onMouseDown}>
        {elements.map((Item, i) => (
          <Settings selectble={i === index} onClick={() => setIndex(i)} key={i}>
            <Item />
          </Settings>
        ))}
      </div>
    </CanvasController>
  );
};

export default App;
