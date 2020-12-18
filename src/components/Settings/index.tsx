import React from "react";
import styles from "./index.scss";

type Props = {
  children: React.ReactNode;
  selectble: boolean;
  onClick: () => void;
};

const App = ({ children, selectble, onClick }: Props) => {
  const className = `${styles.settingsContainer} ${
    selectble ? styles.active : ""
  }`;

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default App;
