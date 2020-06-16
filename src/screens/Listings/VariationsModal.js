import React, { useState, useEffect } from "react";

import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";

import Modal2 from "components/Modal2";
import { Dropdown2, CustomCreatableSelect } from "components/Dropdown";
import styled from "styled-components";

const VariationTitle = styled.h1`
  font-size: 12px;
  font-weight: 500;
`;

const VariationsWrapper = styled.div`
  margin-top: 16px;
`;
const VariationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const StyledCreatableSelect = styled(CustomCreatableSelect)`
  width: 170px;
`;

export default function () {
  const { data, loading, error } = useQuery(QUERY);
  const [variations, setVariation] = useState([]);

  useEffect(() => {
    console.log(variations);
  }, []);

  if (loading) {
    return <div> loading</div>;
  }

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
            <VariationTitle>{variation.label}</VariationTitle>
            <StyledCreatableSelect isMulti />
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
              console.log(selected, "this is selected");
              setVariation(selected);
            }
          }}
          options={data.productVariationOptions.map(options => ({
            value: options.id,
            label: options.label
          }))}
        />
      </div>
    </Modal2>
  );
}

const QUERY = gql`
  query Query {
    productVariationOptions {
      id
      label
    }
  }
`;
