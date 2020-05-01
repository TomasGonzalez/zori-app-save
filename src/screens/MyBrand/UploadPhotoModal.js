import React from "react";

import Modal from "react-modal";
import styled from "styled-components/macro";
import _ from "lodash";

export default function ({ isOpen, style, ...restProps }) {
  return (
    <Modal
      style={{
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(0, 0, 0, .45)",
          ..._.get(style, "overlay", {}),
        },
        content: {
          top: "50%",
          border: "none",
          left: "50%",
          right: "initial",
          bottom: "initial",
          overflow: " initial",
          transform: "translate(-50%, -50%)",
          borderRadius: 10,
          padding: 16,
          ..._.get(style, "content", {}),
        },
      }}
      {...restProps}
      isOpen={isOpen}
    >
      <div style={{ height: 592, width: 440 }}>hello</div>
    </Modal>
  );
}
