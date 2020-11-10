import React from "react";
import { header } from "src/model";

export default () => {
  return (
    <header className="header">
      <div className="logo">Navbar</div>
      {header.left.map((item, i) => {
        return (
          <div className="header-item" key={i}>
            <span className="title">{item.title}</span>
          </div>
        );
      })}
      <div className="header-right-container">
        {header.right.map((item, i) => {
          return (
            <div className="header-item" key={i}>
              <span className="title">{item.title}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
};
