import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { usePopper } from "react-popper";

const PanelContainer = styled.div`
  padding: 16px;
  border-radius: 7px;
  box-shadow: 0 0 15px 0 ${(props) => props.theme.color.gray3};
  background-color: ${(props) => props.theme.color.background};
  transition: height 10s, width 10s;
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
  font-weight: 600;
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
  } = props;

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: contentSide || "bottom-end",
    }
  );

  useEffect(() => {
    let promise;
    try {
      promise = update();
    } catch (err) {
      console.log(err);
    }
  }, [showScreen]);

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
            style={styles.popper}
            {...attributes.popper}
            ClassName='PanelContainer'
          >
            {ModalContent[showScreen]}
          </PanelContainer>
        )}
      </MainWrapper>
    </>
  );
}
