import React, { useState } from "react";
import { CanvasController, Navbar, Settings } from "src/components";

const App = () => {
  const [elements, setElements] = useState<any[]>([]);

  const onMouseDown = () => {
    elements.push(Navbar);
    setElements([...elements]);
  };

  return (
    <CanvasController>
      <div className="content" onMouseDown={onMouseDown}>
        {elements.map((Item, i) => (
          <Settings key={i}>
            <Item />
          </Settings>
        ))}
      </div>
    </CanvasController>
  );
};

export default App;
