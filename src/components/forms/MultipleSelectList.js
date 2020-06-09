import React, { useEffect, useState } from "react";

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
  align-items: center;
  justify-content: space-between;
  margin: 0px 16px;
  border: solid 1px ${props => props.theme.color.creme};
  border-width: 0 0 1px 0;
  padding: 16px 0px;

  &:last-child {
    border-style: none;
  }
`;

const Title = styled.h1`
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
`;

const SubText = styled.h2`
  color: ${props => props.theme.color.gray1};
  font-size: 10px;
  font-weight: normal;
  margin: 0px;
`;

const Price = styled.b`
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme.color.black1};
`;

export function ShippingOptions({
  selected,
  setSelected,
  help,
  text,
  price,
  value
}) {
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
        <RoundCheckBox
          onClick={() =>
            selected?.find(val => val === value)
              ? setSelected(selected.filter(val => val !== value))
              : setSelected([...selected, value])
          }
          style={{ marginRight: 8 }}
          isChecked={selected.find(val => val === value) || false}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title>{text}</Title>
          <SubText>{help}</SubText>
        </div>
      </div>
      <Price style={{ paddingRight: 21 }}>${price}</Price>
    </OptionsLayoutWrapper>
  );
}

export default function ({ _data, RowLayout, ...props }) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    props.input.onChange(selected);
  }, [selected]);

  return (
    <MainWrapper>
      {_data.map(vals => {
        return (
          <RowLayout
            setSelected={setSelected}
            selected={selected}
            {...vals}
            {...props}
          />
        );
      })}
    </MainWrapper>
  );
}
