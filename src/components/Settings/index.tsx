import React from "react";

type Props = {
  children: any;
};

const App = ({ children }: Props) => {
  return <div onMouseDown={(e) => e.stopPropagation()}>{children}</div>;
};

export default App;
