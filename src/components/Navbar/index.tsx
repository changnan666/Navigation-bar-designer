import React from "react";
import useNavbar from "src/hooks/useNavbar";

const App = () => {
  const [style] = useNavbar();

  return (
    <div style={style.defaultStyle}>
      <div style={style.wrapperStyle}>123</div>
    </div>
  );
};

export default App;
