import React from "react";

import styled, { withTheme } from "styled-components";
import { MdClose } from "react-icons/md";
import { Line } from "rc-progress";

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
  return (
    <>
      <Header>
        <Logo src={require("assets/zori-logo.png")} />
        <Close>
          <MdClose onClick={props.onRequestClose} size={20} />
        </Close>
      </Header>
      <Line
        strokeLinecap={"square"}
        percent='30'
        style={{ height: 3, width: "100%" }}
        trailColor={props.theme.color.lightGray}
        strokeColor={props.theme.color.green1}
      />
    </>
  );
}
export default withTheme(MainMercantSigninScreen);
