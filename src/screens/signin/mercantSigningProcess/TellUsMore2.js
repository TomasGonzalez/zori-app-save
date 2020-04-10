import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import { TextInput, PasswordInput } from "components/forms/inputs";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Title from "components/Title";
import Dropdown from "components/Dropdown";
import { ScreenLoader } from "components/Loading";
import { NotEmptyValidator } from "lib/formValidation";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => props.theme.color.gray2};
`;

const ImageContainer = styled.img`
  height: 489.5px;
  width: 640px;

  @media (max-width: 1024px) {
    display: none;
  
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
  max-width: 440px;
`;

const FormWrapper = styled.div`
  max-width: 440px;
`;

const HorizontalInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const brandRoleOptions = [
  { value: 1, label: "Sales Manager" },
  { value: 1, label: "Operations Manager" },
  { value: 1, label: "Marketing Manager" },
  { value: 1, label: "Brand Strategist" },
];

const HYHUOptions = [
  { value: 1, label: "Google" },
  { value: 1, label: "Facebook" },
  { value: 1, label: "Instagram" },
];

export default function TellUsMore2({
  onVerification,
  setHandleSubmit,
  ...props
}) {
  const [updateVendor] = useMutation(UPDATE_VENDOR);
  const { loading, error, data } = useQuery(QUERY);

  const handleSubmit = (submitProps) => {
    console.log(submitProps);
    const platforms = submitProps.platforms.map((val) => val.value);
    const hyhuField = submitProps.hyhuField.map((val) => val.value);
    const address1 = `${submitProps.number} ${submitProps.street}`;

    console.log(platforms, hyhuField);
    updateVendor({
      variables: {
        state: submitProps.state.value,
        city: submitProps.city,
        platforms: platforms,
        hyhuField: hyhuField,
        address1: address1,
      },
    })
      .then(() => {
        onVerification();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return (
      <MainContainer>
        <ScreenLoader />
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <ImageContainer
        alt='People working'
        src={require("assets/people-talking-2.png")}
      />
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
                  fontSize={33}
                  errorMessage={""}
                  label={"Tell us a little bit more about your brand"}
                />
                <SubTitle style={{ marginBottom: 32 }}>
                  Where are you based? <br />
                  <span style={{ fontSize: 11 }}>
                    We’re only accepting applications from brands based in the
                    United States at this time.
                  </span>
                </SubTitle>
                <FormWrapper>
                  <Field
                    name='street'
                    component={TextInput}
                    style={{ marginBottom: 64 }}
                    placeholder='Street'
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name='number'
                    component={TextInput}
                    style={{ marginBottom: 64 }}
                    placeholder='Apt, Suite, Room #'
                    validate={NotEmptyValidator}
                  />
                  <HorizontalInput>
                    <Field
                      name='city'
                      component={TextInput}
                      style={{
                        marginBottom: 64,
                        width: "45%",
                        paddingTop: 11.5,
                      }}
                      placeholder='City'
                      validate={NotEmptyValidator}
                    />
                    <Field
                      name='state'
                      options={data.usStates.map((state) => ({
                        value: state,
                        label: state,
                      }))}
                      component={Dropdown}
                      style={{ marginBottom: 64, width: "45%" }}
                      placeholder='State'
                      validate={NotEmptyValidator}
                    />
                  </HorizontalInput>
                  <Field
                    name='platforms'
                    options={data.signup.map((val) => ({
                      value: val.id,
                      label: val.label,
                    }))}
                    isMulti
                    component={Dropdown}
                    placeholder={
                      "Which other platforms do you currently sell your products on?"
                    }
                    help={"Feel free to make more than one selection"}
                    style={{ marginBottom: 64, width: "100%" }}
                    validate={NotEmptyValidator}
                  />
                  <Field
                    name='hyhuField'
                    isMulti
                    options={data.hyhu.map((val) => ({
                      value: val.id,
                      label: val.label,
                    }))}
                    component={Dropdown}
                    placeholder={"How’d you hear about ZORI?"}
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
    $state: String
    $address1: String
    $city: String
    $platforms: [ID]
    $hyhuField: [ID]
  ) {
    updateVendor(
      city: $city
      state: $state
      address1: $address1
      platforms: $platforms
      hyhuField: $hyhuField
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

const QUERY = gql`
  {
    usStates
    signup: platformOptions(platformType: "signupPlatforms") {
      id
      label
    }
    hyhu: platformOptions(platformType: "hyhuPlatforms") {
      id
      label
    }
  }
`;
