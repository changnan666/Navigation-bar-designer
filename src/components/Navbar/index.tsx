import React from "react";

const defaultStyle: React.CSSProperties = {
  width: "100%",
  height: 60,
  backgroundColor: "#000",
  color: "#fff",
  cursor: "auto",
};

const wrapperStyle: React.CSSProperties = {
  width: 1200,
  margin: "0 auto",
};

const App = () => {
  return (
    <div style={defaultStyle}>
      <div style={wrapperStyle}>123</div>
    </div>
  );
};

export default App;
