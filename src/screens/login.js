import React from "react";

import { Form, Field } from "react-final-form";
import styled from "styled-components";

import TextInput from "components/inputs/TextInput";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const ImageContainer = styled.img`
  height: 100vh;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const FormContaienr = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.color.white};
`;

const StyledForm = styled.form`
  padding: 112px;
  width: 100%;
`;

const login = () => {
  return (
    <MainContainer>
      <ImageContainer
        alt='Office Deskt'
        src={require("assets/login-side-image.png")}
      />
      <FormContaienr>
        <Form
          onSubmit={() => console.log("test")}
          render={() => (
            <StyledForm>
              <Field
                name='bio'
                render={({ input, meta }) => (
                  <div>
                    <Title>Log in</Title>

                    <TextInput
                      style={{ marginBottom: 84 }}
                      placeholder='Enter your email address'
                    />
                    <TextInput placeholder='Enter your password*' />

                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              />
            </StyledForm>
          )}
        />
      </FormContaienr>
    </MainContainer>
  );
};

export default login;
