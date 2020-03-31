import React, { useState } from "react";

import styled, { withTheme } from "styled-components";
import { MdClose } from "react-icons/md";

import Progress from "react-progress";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 34.6px;
  width: 35px;
  padding-left: 16px;
`;

function MainMercantSigninScreen(props) {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Header>
        <Logo src={require("assets/zori-logo.png")} />
        <Close>
          <MdClose onClick={props.onRequestClose} size={20} />
        </Close>
      </Header>
      <div>
        <div
          style={{
            position: "relative",
            height: 3,
            top: 14,
            width: "100%",
            backgroundColor: props.theme.color.lightGray
          }}
        />
        <Progress
          style={{
            height: 3,
            top: 0,
            position: "relative",
            boxShadow: "transparent"
          }}
          color={props.theme.color.green1}
          height={3}
          speed={0.4}
          percent={progress}
        />
      </div>
    </>
  );
}
export default withTheme(MainMercantSigninScreen);
