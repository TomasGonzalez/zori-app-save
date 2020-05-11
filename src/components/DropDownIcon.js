import React, { useState, useRef, useEffect } from "react";

import theme from "theme";
import ButtonPanel from "components/ButtonPanel";
import styled from "styled-components/macro";
import Icon from "components/Icon";

const IconOptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;

export default function DropDownIcon({ icon, content }) {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setPanelOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <ButtonPanel
      title={"Invite users to ZORI"}
      onRequestClose={() => {
        setPanelOpen(false);
      }}
      buttonComponent={
        <IconOptionsWrapper
          onClick={() => {
            setPanelOpen(!isPanelOpen);
          }}
        >
          <Icon size={14} icon={icon} />
        </IconOptionsWrapper>
      }
      contentSide={"bottom"}
      notBackground
      visible={isPanelOpen}
      showScreen={0}
      ModalContent={<div ref={wrapperRef}>{content}</div>}
    />
  );
}
