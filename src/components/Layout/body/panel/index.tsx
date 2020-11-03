import React from "react";
import { panelsTools, Layer } from "src/model";
import { Popover, Tabs } from "antd";

const { TabPane } = Tabs;

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
      <div className="panels-item">
        <Tabs type="card" tabPosition="top">
          <TabPane tab="Tab 1" key="1">
            <Layer />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            2
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
