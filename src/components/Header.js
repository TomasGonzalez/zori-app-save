import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  height: 52px;
  display: flex;
  padding: 0px 16px;
  box-sizing: border-box;

  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const CurrentPageName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.color.black};
`;

const HeaderOptions = styled.div``;

export default function Header({ children }) {
  return (
    <MainWrapper>
      <HeaderWrapper>
        <CurrentPageName>My Dashboard</CurrentPageName>
        <HeaderOptions>
          <div>test</div>
        </HeaderOptions>
      </HeaderWrapper>
      {children}
    </MainWrapper>
  );
}
