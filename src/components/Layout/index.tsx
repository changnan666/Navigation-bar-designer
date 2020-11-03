import React, { useState } from "react";
import styles from "./index.scss";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import PresetHeader from "./presetHeader";
import { CanvasContext, FpsContext } from "src/context";
import { useFpsConfig } from "src/hooks";

export default () => {
  const [freeDrawing, setFreeDrawing] = useState(false);
  const [active, setActive] = useState<ActionType>("");
  const fps = useFpsConfig();

  return (
    <div className={styles.container}>
      <FpsContext.Provider value={fps}>
        <Header />
        <CanvasContext.Provider
          value={{ actionType: active, setActive, freeDrawing, setFreeDrawing }}
        >
          <PresetHeader />
          <Body />
        </CanvasContext.Provider>
        <Footer />
      </FpsContext.Provider>
    </div>
  );
};
