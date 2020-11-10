import React from "react";
import { panelsTools } from "src/model";
import { Popover } from "antd";

export default () => {
  return (
    <>
      <div className="panels-tools">
        <div className="slider">
          {panelsTools.map((item, i) => (
            <Popover
              placement="leftTop"
              title={item.tip}
              content={item.content}
              key={i}
              trigger={["click"]}
            >
              <div className={"slider-item"} key={i} title={item.tip}>
                {typeof item.icon === "string" ? (
                  <i className={`iconfont ${item.icon}`} />
                ) : (
                  item.icon
                )}
              </div>
            </Popover>
          ))}
        </div>
      </div>
      <div className="panels-item"></div>
    </>
  );
};
