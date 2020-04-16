import React from "react";

import styled from "styled-components";
import { Form, Field } from "react-final-form";

import Title from "components/Title";
import SubTitle from "components/SubTitle";

const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.img`
  height: 518.5px;
  width: 560px;

  @media (max-width: 1024px) {
    display: none;
  
`;

const FormContaienr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.white};
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const StyledForm = styled.form`
  padding: 0px 80px;
`;

const FormWrapper = styled.div`
  max-width: 552px;
`;

export default function Panel({
  errorMessage = "",
  handleSubmit,
  title,
  children,
}) {
  return (
    <MainContainer>
      <ImageContainer
        alt='People working'
        src={require("assets/people-working.png")}
      />
      <FormContaienr>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit, values, invalid }) => (
            <StyledForm
              id='myForm'
              subscription={{ values: true, valid: true }}
            >
              <Title
                style={{ marginBottom: 56 }}
                errorMessage={errorMessage}
                label={title}
              />
              <FormWrapper>{children}</FormWrapper>
            </StyledForm>
          )}
        />
      </FormContaienr>
    </MainContainer>
  );
}
