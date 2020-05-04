import React, { useCallback, useState } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Form, Field } from "react-final-form";
import Modal from "react-modal";
import styled from "styled-components/macro";
import _ from "lodash";
import { useDropzone } from "react-dropzone";

import Button from "components/Button";
import ProfileIcon from "components/ProfileIcon";
import { BigInput } from "components/forms/inputs";
import theme from "theme";
import Icon from "components/Icon";
import { Dropdown2 } from "components/Dropdown";
import CreatableSelect from "components/CreatableSelect";

const ImageDrop = styled.div`
  cursor: pointer;
  height: 592px;
  width: 440px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.creme};
  border-radius: 10px;

  .see-more-enter {
    opacity: 0;
    width: 55px;
    transform: scale(0);
  }

  .see-more-enter-active {
    opacity: 1;
    transform: translateX(0);
    width: 256px;
    transition: opacity 300ms, width 300ms;
  }

  .see-more-exit {
    opacity: 1;
    width: 256px;
  }

  .see-more-exit-active {
    opacity: 0;
    width: 55px;
    transition: opacity 300ms, width 300ms;
  }
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
  height: 100%;
  width: 100%;
  outline: none;
  cursor: default;
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

const TagPin = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 16px;
  width: 16px;
  border-radius: 160px;
  background-color: white;
  bottom: ${(props) => props.values.yPercent}%;
  right: ${(props) => props.values.xPercent}%;
`;

const TagsButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 24px;
`;

const FloatingTagDescriptionWrapper = styled.div`
  position: absolute;
  width: 256px;
  heigh: 100%;
  background-color: white;
  margin-top: 24px;
  padding: 8px;
  border-radius: 3px;
`;

const BoxMessage = styled.div`
  width: 100%;
  background-color: #e2e2e2;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 6px;
  padding: 7px;
`;

export default function ({ onRequestClose, isOpen, style, ...restProps }) {
  const [imageFile, setImageFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [tagType, setTagType] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setImageFile(URL.createObjectURL(acceptedFiles[0]));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = () => {
    console.log("test");
  };

  const addProductTag = (event) => {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const imageHeight = event.target.offsetHeight;
    const imageWidth = event.target.offsetWidth;

    setTags([
      ...tags,
      {
        xPercent: ((imageWidth - (x + 10)) / imageWidth) * 100,
        yPercent: ((imageHeight - y) / imageHeight) * 100,
        type: tagType,
        subTags: "",
      },
    ]);
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
          {imageFile && (
            <DisplayImage
              onDragStart={(e) => {
                e.preventDefault();
              }}
              onClick={tagType === "product" && addProductTag}
              src={imageFile}
              alt={"Uploaded"}
            />
          )}
          <TransitionGroup>
            {tags.map((_vals, index) => {
              return (
                _vals.type === "product" && (
                  <TagPin values={_vals}>
                    <CSSTransition
                      in={tagType === "product"}
                      timeout={200}
                      classNames='see-more'
                      unmountOnExit
                    >
                      <FloatingTagDescriptionWrapper key={index}>
                        <CreatableSelect placeholder='Type products tags.' />
                      </FloatingTagDescriptionWrapper>
                    </CSSTransition>
                  </TagPin>
                )
              );
            })}
          </TransitionGroup>
          {!imageFile && (
            <input style={{ outline: "none" }} {...getInputProps()} />
          )}
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
              onClick={() => onRequestClose()}
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
                  <TagsButtonWrapper>
                    {[
                      { label: "Tag Products", type: "product" },
                      { label: "Tag Users", type: "user" },
                      { label: "Tag your post", type: "post" },
                    ].map((_buttonData) => (
                      <Button
                        label={_buttonData.label}
                        onClick={() =>
                          setTagType(
                            tagType !== _buttonData.type
                              ? _buttonData.type
                              : null
                          )
                        }
                        style={{ marginRight: 6 }}
                        width={112}
                        height={32}
                        active={tagType === _buttonData.type}
                        borderColor={theme.color.creme}
                        textSize={12}
                      />
                    ))}
                  </TagsButtonWrapper>
                  {tagType === "product" && (
                    <BoxMessage>
                      Click anywhere on the image where you want your tag to
                      appear. Users will be able to checkout or launch team
                      deals with one click.
                    </BoxMessage>
                  )}

                  {tagType === "user" && (
                    <div style={{ width: "100%", marginTop: 6 }}>
                      <Field
                        name='tagUsers'
                        isMulti
                        placeholder={
                          "Start typing in usernames to tag users..."
                        }
                        component={Dropdown2}
                      />
                    </div>
                  )}

                  {tagType === "post" && (
                    <div style={{ width: "100%", marginTop: 6 }}>
                      <Field
                        name='tagUsers'
                        isMulti
                        placeholder={
                          "Start typing in posts titles to tag posts..."
                        }
                        component={Dropdown2}
                      />
                    </div>
                  )}
                </StyledForm>
              )}
            />
          </FormWrapper>
        </ImageForm>
      </MainWrapper>
    </Modal>
  );
}
