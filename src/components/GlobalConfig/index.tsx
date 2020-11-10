import React from "react";
import { Modal, Button } from "antd";
import { ModalProps } from "antd/lib/modal";

interface IProps extends ModalProps {
  children: any;
}

const App = (props: IProps) => {
  return (
    <Modal
      {...props}
      centered
      footer={
        <>
          <Button type="primary" onClick={props.onCancel}>
            取消
          </Button>
          <Button
            type="primary"
            className="bg-primary-light"
            onClick={props.onOk}
          >
            确定
          </Button>
        </>
      }
    >
      {props.children}
    </Modal>
  );
};

export default App;
