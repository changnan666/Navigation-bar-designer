import React, { useContext } from "react";
import { CanvasContext } from "src/context";
import { slider } from "src/model";

export default () => {
  const { actionType, setActive } = useContext(CanvasContext);

  return (
    <>
      {slider.map((item, i) => (
        <div
          className={`slider-item${item.icon === actionType ? " active" : ""}`}
          key={i}
          onClick={() => {
            if (item.icon === actionType) {
              setActive("");
            } else {
              setActive(item.icon as ActionType);
            }
          }}
        >
          <i className={`iconfont ${item.icon}`} title={item.tip} />
        </div>
      ))}
    </>
  );
};
