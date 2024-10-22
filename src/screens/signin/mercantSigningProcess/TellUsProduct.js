import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { BigInput } from "components/forms/inputs";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Title from "components/Title";
import Dropdown from "components/Dropdown";

import { NotEmptyValidator } from "lib/formValidation";
import { ScreenLoader } from "components/Loading";
import SubTitle from "components/SubTitle";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.white};

  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

const StyledForm = styled.form`
  padding: 80px;
  max-width: 592px;
`;

const FormWrapper = styled.div``;

export default function TellUsMore2({
  onVerification,
  setHandleSubmit,
  data,
  ...props
}) {
  const [updateVendor] = useMutation(UPDATE_VENDOR);

  const handleSubmit = (submitProps) => {
    const productType = submitProps.whatYouMake.map((val) => val.value);
    const sustainable = submitProps.howAreSustainable.map((val) => val.value);

    updateVendor({
      variables: {
        ...submitProps,
        productType: productType,
        sustainable: sustainable,
      },
    })
      .then(() => {
        onVerification();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <MainContainer>
      <FormContainer>
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => {
            return (
              <StyledForm
                onChange={() => {
                  setHandleSubmit(() => handleSubmit);
                }}
              >
                <Title
                  style={{ marginBottom: 35 }}
                  fontSize={30}
                  errorMessage={""}
                  label={
                    "Tell us a little bit about what you produce and how you produce "
                  }
                />
                <SubTitle style={{ marginBottom: 32 }}>
                  We’re building ZORI for ethical and sustainable independent
                  brands. Kindly go ahead and tell us about the products you
                  make and some of the ways you try to ensure your products stay
                  clean
                </SubTitle>
                <FormWrapper>
                  <Field
                    name='whatYouMake'
                    options={data.productTypes.map((val) => ({
                      value: val.id,
                      label: val.label,
                    }))}
                    component={Dropdown}
                    isMulti
                    placeholder={"What do you make?"}
                    help={
                      "we’re currently only accepting applications from independent brands that make essentials in personal, household and baby care "
                    }
                    style={{ marginBottom: 64, width: "100%" }}
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name='howAreSustainable'
                    options={data.sustainablePrinciples.map((val) => ({
                      value: val.id,
                      label: val.label,
                    }))}
                    component={Dropdown}
                    isMulti
                    placeholder={
                      "How do you keep your products ethical, sustainable or clean?"
                    }
                    help={"Feel free to make more than one selection"}
                    style={{ marginBottom: 64, width: "100%" }}
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name='MoreAboutYou'
                    component={BigInput}
                    placeholder={
                      "Feel free to talk about your work a little more..."
                    }
                    style={{ marginBottom: 64, width: "100%" }}
                    validate={NotEmptyValidator}
                  />
                </FormWrapper>
              </StyledForm>
            );
          }}
        />
      </FormContainer>
    </MainContainer>
  );
}

const UPDATE_VENDOR = gql`
  mutation UpdateVendor(
    $productType: [ID]
    $applicationText: String
    $sustainable: [ID]
  ) {
    updateVendor(
      productType: $productType
      applicationText: $applicationText
      sustainable: $sustainable
    ) {
      vendor {
        businessAddr {
          address1
          address2
          state
          city
          zipcode
        }
        user {
          id
          isVerified
          username
          email
          phoneNumber
          firstName
          lastName
          dateJoined
          isActive
          avatar
          isPromoter
          completedSteps {
            stepId
            label
            isFilled
          }
        }
      }
    }
  }
`;
