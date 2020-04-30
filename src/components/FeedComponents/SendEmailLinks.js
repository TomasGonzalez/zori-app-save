import React, { useState, useEffect } from "react";

import { Form, Field } from "react-final-form";
import styled from "styled-components/macro";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";

import Button from "components/Button";
import theme from "theme";
import { PanelTitle } from "components/ButtonPanel";
import { BigInput } from "components/forms/inputs";
import Icon from "components/Icon";

import "react-multi-email/style.css";

const EmailWrapper = styled.div`
  width: 392px;
  padding: 20px;
`;

const StyledPanelTitle = styled(PanelTitle)`
  .title {
    font-size: 14px;
    font-weight: 600;
  }
`;

const EmailBox = styled.div`
  margin-right: 5px;
  display: flex;
  background-color: ${(props) => props.theme.color.linkBlue};
  cursor: pointer;
  border-radius: 3px;
  padding: 5px 10px;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.color.lightDanger};
  }
`;

const SubTitle = styled.div`
  font-size: 10px;
  color: ${(props) => props.theme.color.gray1};
  margin-top: 4px;
`;

const StyledForm = styled.form``;

const StyledBigInput = styled(BigInput)`
  height: 140px;
  width: 392px;
  margin-top: 8px;
  border-color: ${(props) => props.theme.color.lightGray};
  font-size: 12px;
  text-align: left;
  line-height: 2;
`;

const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export default function ({ setPanelSetting, setPanelOpen }) {
  const [emails, setEmails] = useState([]);
  const [emailText, setEmailText] = useState("");
  const [success, setSuccess] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const { loading, data, error } = useQuery(GET_SELF);
  const [inviteEmails] = useMutation(INVITE_EMAILS);

  useEffect(() => {
    if (data?.me?.invitation)
      setEmailText(
        `Hey there. Just letting you know that we’re up and active on ZORI as Zelles_Official. Get on the app and take advantage of all the group deals we have going. Bring friends! ${data.me.invitation.link}`
      );
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const close = () => {
    setPanelSetting(0);
    setPanelOpen(false);
    setSuccess(false);
  };

  const handleSubmit = (value) => {
    if (!!emails.length) {
      setButtonLoading(true);
      inviteEmails({
        variables: { emails, inviteText: emailText },
      })
        .then(() => {
          setButtonLoading(false);
          setSuccess(true);
          setTimeout(close, 1000);
        })
        .catch((err) => {
          setButtonLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <EmailWrapper>
      {!success ? (
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <StyledForm>
              <StyledPanelTitle
                title={"Send Invite to"}
                onRequestClose={() => {
                  setPanelSetting(0);
                  setPanelOpen(false);
                }}
              />
              <Field
                name='emails'
                component={ReactMultiEmail}
                placeholder={<>Who do you want to invite?</>}
                style={{
                  boxSizing: "border-box",
                  width: 392,
                  minHeight: "100px",
                  borderColor: theme.color.lightGray,
                }}
                emails={emails}
                onChange={(_emails) => {
                  setEmails(_emails);
                }}
                validateEmail={(email) => {
                  return isEmail(email);
                }}
                getLabel={(email, index, removeEmail) => {
                  return (
                    <EmailBox onClick={() => removeEmail(index)} key={index}>
                      <div data-tag-item>{email}</div>
                    </EmailBox>
                  );
                }}
              />
              <SubTitle>You can add up to 10 email addresses</SubTitle>
              <Field
                name='SendInvitation'
                input={{
                  value: emailText,
                  onChange: (_data) => {
                    setEmailText(_data.target.value);
                  },
                }}
                component={StyledBigInput}
              />
              <SubTitle>
                We’ve prepared a message for you assuming your inviting
                potential customers. Make sure to tweak the message a little bit
                when inviting your fellow brands.
              </SubTitle>
              <Button
                style={{ marginTop: 8 }}
                label='Send'
                buttonStyle={"dark"}
                width={392}
                height={32}
                isLoading={buttonLoading}
                onClick={handleSubmit}
              />
              {!emails.length && (
                <SubTitle style={{ color: theme.color.danger }}>
                  Please add at least one email!
                </SubTitle>
              )}
            </StyledForm>
          )}
        />
      ) : (
        <>
          <StyledPanelTitle
            style={{ margin: 0 }}
            title={""}
            onRequestClose={() => {
              setPanelSetting(0);
              setPanelOpen(false);
            }}
          />
          <SuccessWrapper>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.color.green1,
                height: 48,
                width: 48,
                borderRadius: 2,
              }}
            >
              <Icon size={34} color={theme.color.background} icon='checkMark' />
            </div>
            <b style={{ marginTop: 16 }}>Done and dusted!</b>
          </SuccessWrapper>
        </>
      )}
    </EmailWrapper>
  );
}

const GET_SELF = gql`
  query {
    me {
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
      invitation {
        link
      }
      isPromoter
      completedSteps {
        stepId
        label
        isFilled
      }
      vendor {
        isApproved
        tutorials {
          tutorial {
            id
            text
            link
          }
          isFilled
        }
      }
    }
  }
`;

const INVITE_EMAILS = gql`
  mutation InviteEmails($emails: [String], $inviteText: String) {
    inviteEmails(emailList: $emails, inviteText: $inviteText) {
      okay
      errorMessage
    }
  }
`;
