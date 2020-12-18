import { useState } from "react";

const defaultStyle: React.CSSProperties = {
  width: "100%",
  height: 60,
  lineHeight: "60px",
  backgroundColor: "#000",
  color: "#fff",
  cursor: "auto",
};

const wrapperStyle: React.CSSProperties = {
  width: 1200,
  margin: "0 auto",
};

export default () => {
  return useState({ defaultStyle, wrapperStyle });
};
