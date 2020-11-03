import React from "react";

const initContext = {
  actionType: "",
};

type IProps = {
  freeDrawing: boolean;
  setFreeDrawing: (value: boolean) => void;
  actionType: ActionType;
  setActive: (value: ActionType) => void;
};

export default React.createContext(initContext as IProps);
