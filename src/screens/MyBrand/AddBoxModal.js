import React, { useState } from "react";
import Modal from "react-modal";
import _ from "lodash";
import styled from "styled-components/macro";
import { Form, Field } from "react-final-form";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import { NotEmptyValidator } from "lib/formValidation";
import Button from "components/Button";
import DumbCheckBox from "components/forms/DumbCheckBox";
import { BigInput } from "components/forms/inputs";
import theme from "theme";

const MainWrapper = styled.div`
  width: 530px;
  flex: 1;
  padding: 16px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  padding-bottom: 23px;
  border: solid 1px ${props => props.theme.color.creme};
  border-width: 0px 0px 1px 0px;
  flex: 1;

  font-weight: 500;
  font-size: 20px;
  text-align: center;
`;

const StyledForm = styled.form`
  flex: 1;
`;

const StyledBigInput = styled(BigInput)`
  font-size: 18px;
  border-color: ${props => props.theme.color.creme};
`;

const DescriptionBigInput = styled(StyledBigInput)`
  font-size: 12px;
`;

const ButtonWrapper = styled.div`
  margin-top: 15px;
  padding-top: 32px;
  border: solid 1px ${props => props.theme.color.creme};
  border-width: 1px 0px 0px 0px;
`;

export default function ({ onRequestClose, isOpen, style, ...restProps }) {
  const [isLoading, setIsLoading] = useState(false);

  const [createVendorPostBox] = useMutation(CREATE_BOX);

  const handleSubmit = values => {
    setIsLoading(true);
    createVendorPostBox({ variables: { ...values } })
      .then(() => {
        setIsLoading(false);
        onRequestClose();
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <Modal
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(0, 0, 0, .45)",
          ..._.get(style, "overlay", {})
        },
        content: {
          top: "50%",
          border: "none",
          left: "50%",
          right: "initial",
          bottom: "initial",
          overflow: " initial",
          transform: "translate(-50%, -50%)",
          borderRadius: 10,
          padding: 16,
          ..._.get(style, "content", {})
        }
      }}
      {...restProps}
      isOpen={isOpen}
    >
      <MainWrapper>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <StyledForm>
              <TitleWrapper>Create a box</TitleWrapper>
              <Field
                title="Name your box"
                name="title"
                component={StyledBigInput}
                mainWrapperStyle={{ marginTop: 24 }}
                rows={"1"}
                validate={NotEmptyValidator}
              />
              <Field
                title="Briefly describe your box"
                titleSpan="(optional)"
                mainWrapperStyle={{ marginTop: 24 }}
                name="description"
                component={DescriptionBigInput}
                validate={NotEmptyValidator}
              />
              <Field
                name="isPublic"
                title="Would you like your box out there in the open"
                subTitle="This controls whether users are able to find your box on ZORI"
                labels={["Yes please!", "No, keep it a secret!"]}
                mainWrapperStyle={{ marginTop: 24 }}
                component={DumbCheckBox}
                color={theme.color.gray2}
                validate={NotEmptyValidator}
              />
              <ButtonWrapper>
                <Button
                  width="100%"
                  style={{ height: 32 }}
                  borderColor={"transparent"}
                  textColor={[theme.color.green1, theme.color.background]}
                  buttonColor={[theme.color.green1, theme.color.background]}
                  isLoading={isLoading}
                  label="Create"
                  onClick={handleSubmit}
                />
              </ButtonWrapper>
            </StyledForm>
          )}
        />
      </MainWrapper>
    </Modal>
  );
}

const CREATE_BOX = gql`
  mutation($description: String, $title: String) {
    createVendorPostBox(
      description: $description
      title: $title
      isPublic: true
    ) {
      errorMessage
    }
  }
`;
