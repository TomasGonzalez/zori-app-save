import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { usePopper } from "react-popper";

const PanelContainer = styled.div`
  padding: 16px;
  border-radius: 7px;
  box-shadow: 0 0 15px 0 ${(props) => props.theme.color.gray3};
  background-color: ${(props) => props.theme.color.background};
`;

const MainWrapper = styled.div``;

const DarkBackground = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  margin-right: 8px;
`;

export function PanelTitle({ title, onRequestClose, ...props }) {
  return (
    <TitleWrapper {...props}>
      <Title className='title'>{title}</Title>
      <img
        alt={"close"}
        onClick={() => {
          onRequestClose();
        }}
        src={require("assets/close-icon.png")}
        style={{ height: 12, width: 12, cursor: "pointer" }}
      />
    </TitleWrapper>
  );
}

export default function (props) {
  const {
    ModalContent,
    onRequestClose,
    buttonComponent,
    visible,
    showScreen,
    contentSide,
    notBackground,
    popperStyle,
  } = props;

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [updating, setUpdating] = useState(false);

  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: contentSide || "left-start",
      modifiers: [
        {
          name: "eventListeners",
          options: {
            scroll: true,
            resize: true,
          },
        },
      ],
    }
  );

  useEffect(() => {
    update && update();
  }, [showScreen, visible]);

  return (
    <>
      {visible && !notBackground && (
        <DarkBackground
          onClick={() => {
            onRequestClose();
          }}
        />
      )}
      <MainWrapper>
        <div ref={setReferenceElement}>{buttonComponent}</div>
        {visible && (
          <PanelContainer
            ref={setPopperElement}
            style={{ ...styles.popper, ...popperStyle }}
            {...attributes.popper}
            ClassName='PanelContainer'
          >
            {ModalContent}
          </PanelContainer>
        )}
      </MainWrapper>
    </>
  );
}
