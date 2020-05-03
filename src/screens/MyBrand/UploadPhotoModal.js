import React, { useCallback, useState } from "react";

import { Form, Field } from "react-final-form";
import Modal from "react-modal";
import styled from "styled-components/macro";
import _ from "lodash";
import { useDropzone } from "react-dropzone";

import ProfileIcon from "components/ProfileIcon";
import { BigInput } from "components/forms/inputs";
import theme from "theme";
import Icon from "components/Icon";

const ImageDrop = styled.div`
  height: 592px;
  width: 440px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.creme};
  border-radius: 10px;
`;

const Title = styled.div`
  font-size: 14px;
`;
const FormTitle = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

const StyledBigInput = styled(BigInput)`
  height: 40px;
  margin-top: 4px;
  border-color: ${(props) => props.theme.color.creme};
`;

const AboutBigInput = styled(BigInput)`
  height: 100%;
  border-style: none;
`;

const ProfileContainer = styled.div`
  border: solid 1px ${(props) => props.theme.color.creme};
  width: 100%;
  border-radius: 5px;
  margin-top: 24px;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 8px;
  box-sizing: border-box;
`;

const SubTitle = styled.div`
  font-size: 12px;
  margin-top: 8px;
  color: ${(props) => props.theme.color.gray1};
`;

const DisplayImage = styled.img`
  object-fit: cover;
  height: 592px;
  width: 440px;
  outline: none;
`;

const ImageForm = styled.div`
  margin-left: 16px;
  width: 460px;
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainWrapper = styled.div`
  display: flex;
`;

const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default function ({ isOpen, style, ...restProps }) {
  const [imageFile, setImageFile] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    setImageFile(URL.createObjectURL(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = () => {
    console.log("test");
  };

  return (
    <Modal
      style={{
        overlay: {
          zIndex: 100,
          backgroundColor: "rgba(0, 0, 0, .45)",
          ..._.get(style, "overlay", {}),
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
          ..._.get(style, "content", {}),
        },
      }}
      {...restProps}
      isOpen={isOpen}
    >
      <MainWrapper>
        <ImageDrop style={{ outline: "none" }} {...getRootProps()}>
          {imageFile && <DisplayImage src={imageFile} alt={"Uploaded"} />}
          <input style={{ outline: "none" }} {...getInputProps()} />

          {!imageFile && (
            <>
              <Icon
                color='black'
                style={{ marginBottom: 16 }}
                icon={"arrowUp"}
                size={48}
              />
              <Title>Drag and drop or click to upload</Title>
              <SubTitle>
                Tip: Use high quality .jpg files for your photos
              </SubTitle>
            </>
          )}
        </ImageDrop>
        <ImageForm>
          <CloseWrapper>
            <Icon
              style={{ cursor: "pointer" }}
              icon={"close"}
              size={14}
              color={"black"}
            />
          </CloseWrapper>

          <FormWrapper>
            <Form
              onSubmit={handleSubmit}
              render={({ handleSubmit }) => (
                <StyledForm>
                  <FormItem>
                    <FormTitle>
                      Add Title
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: "bold",
                          color: theme.color.gray1,
                        }}
                      >
                        {" "}
                        (optional)
                      </span>
                    </FormTitle>
                    <SubTitle>This will show up on discovery screens</SubTitle>
                  </FormItem>
                  <Field name='title' component={StyledBigInput} />
                  <ProfileContainer>
                    <ProfileIcon size={56} />
                    <Field
                      name='about'
                      component={AboutBigInput}
                      placeholder={"Tell everyone what this photo is about..."}
                    />
                  </ProfileContainer>
                  <FormItem>
                    <Field name='save-to-boxes' component={BigInput} />
                  </FormItem>
                </StyledForm>
              )}
            />
          </FormWrapper>
        </ImageForm>
      </MainWrapper>
    </Modal>
  );
}
