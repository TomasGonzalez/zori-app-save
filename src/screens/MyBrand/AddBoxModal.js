import React from "react";
import Modal from "react-modal";
import _ from "lodash";
import styled from "styled-components/macro";
import { Form, Field } from "react-final-form";

import DumbCheckBox from "components/forms/DumbCheckBox";
import { BigInput } from "components/forms/inputs";
import theme from "theme";

const MainWrapper = styled.div`
  width: 530px;
  height: 456px;
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

export default function({ onRequestClose, isOpen, style, ...restProps }) {
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
          onSubmit={values => console.log(values)}
          render={({ handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <TitleWrapper>Create a box</TitleWrapper>
              <Field
                title="Name your box"
                name="boxName"
                component={StyledBigInput}
                mainWrapperStyle={{ marginTop: 24 }}
                rows={"1"}
              />
              <Field
                title="Briefly describe your box"
                titleSpan="(optional)"
                mainWrapperStyle={{ marginTop: 24 }}
                name="descrtiption"
                component={DescriptionBigInput}
              />
              <Field
                name="isBoxPublic"
                title="Would you like your box out there in the open"
                subTitle="This controls whether users are able to find your box on ZORI"
                mainWrapperStyle={{ marginTop: 24 }}
                component={DumbCheckBox}
                color={theme.color.gray2}
              />
            </StyledForm>
          )}
        />
      </MainWrapper>
    </Modal>
  );
}
