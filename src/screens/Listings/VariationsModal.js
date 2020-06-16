import React, { useState, useEffect } from "react";

import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";

import Modal2 from "components/Modal2";
import { Dropdown2, CustomCreatableSelect } from "components/Dropdown";
import styled from "styled-components";
import Icon from "components/Icon";
import CheckBox from "components/Checkbox";

import theme from "theme";

const VariationTitle = styled.h1`
  font-size: 12px;
  font-weight: 500;
`;

const VariationsWrapper = styled.div``;
const VariationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  margin-top: 16px;
  padding-bottom: 24px;
  border: solid 1px ${props => props.theme.color.creme};
  border-width: 0 0 1px 0;
`;

const StyledCreatableSelect = styled(CustomCreatableSelect)`
  width: 170px;
`;

const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default function ({ variations, setVariations }) {
  const { data, loading, error } = useQuery(QUERY);

  useEffect(() => {
    console.log(variations);
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  console.log(variations);

  return (
    <Modal2
      isOpen={true}
      title={"Variations"}
      subTitle={
        "List all the variatons you have in mind here. They will appear in the order you list them. "
      }
    >
      <VariationsWrapper>
        {variations?.map(variation => (
          <VariationWrapper>
            <div>
              <IconWrapper>
                <VariationTitle>{variation.label}</VariationTitle>
                <div
                  style={{
                    marginLeft: 6,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 14,
                    height: 14,
                    backgroundColor: "#ff6150",
                    borderRadius: 2
                  }}
                >
                  <Icon color={theme.color.background} size={7} icon="close" />
                </div>
              </IconWrapper>
              <CheckBox
                style={{ marginTop: 14 }}
                label="Price varies for each flavor"
                colorTheme={theme.color.gray1}
              />
              <CheckBox
                style={{ marginTop: 14 }}
                label="SKU Numbers vary for each flavor"
                colorTheme={theme.color.gray1}
              />
              <CheckBox
                style={{ marginTop: 14 }}
                label="Inventory Varies for each flavor"
                colorTheme={theme.color.gray1}
              />
            </div>
            <div>
              {variation.scale && (
                <Dropdown2
                  placeholder="Choos the mesure unit"
                  options={data.productVariationScales?.map(scales => ({
                    value: scales.id,
                    label: scales.label
                  }))}
                />
              )}
              <StyledCreatableSelect isMulti />
            </div>
          </VariationWrapper>
        ))}
      </VariationsWrapper>
      <div
        style={{
          width: 260,
          marginTop: 12
        }}
      >
        <Dropdown2
          title="Add a variation"
          isMulti
          input={{
            onChange: selected => {
              setVariations([
                ...variations,
                ...selected.filter(item => {
                  return !variations.find(
                    variation => variation.value === item.value
                  );
                })
              ]);
            }
          }}
          options={data.productVariationOptions.map(options => ({
            value: options.id,
            label: options.label,
            scale: options.scale
          }))}
        />
      </div>
    </Modal2>
  );
}

const QUERY = gql`
  query Query {
    productVariationScales {
      id
      label
    }
    productVariationOptions {
      id
      label
      scale
    }
  }
`;
