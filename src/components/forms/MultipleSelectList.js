import React from "react";

import styled from "styled-components/macro";

const MainWrapper = styled.div`
  border: solid 1px ${props => props.theme.color.creme};
  display: flex;
  flex-direction: column;
`;

const RoundCheckBox = styled.div`
  border-radius: 36px;
  border: solid 1px ${props => props.theme.color.gray1};
  background-color: ${props =>
    props.isChecked ? props.theme.color.creme : props.theme.color.background};
  width: 16px;
  height: 16px;
`;

const OptionsLayoutWrapper = styled.div`
  display: flex;
  align-items: row;
  justify-content: space-between;
  margin: 0px 16px;
  border: solid 1px ${props => props.theme.color.creme};
  border-width: 0 0 1px 0;
`;

export function ShippingOptions({ text, price, value }) {
  return (
    <OptionsLayoutWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}
      >
        <RoundCheckBox style={{ marginRight: 8 }} isChecked={true} />
        <p>{text}</p>
      </div>
      <p style={{ paddingRight: 21 }}>{price}</p>
    </OptionsLayoutWrapper>
  );
}

export default function ({ _data, RowLayout, ...props }) {
  console.log(props, _data);
  return (
    <MainWrapper>
      {_data.map(vals => {
        return <RowLayout {...vals} {...props} />;
      })}
    </MainWrapper>
  );
}
