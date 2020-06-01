import React, { useEffect, useCallback, useState } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Form, Field } from "react-final-form";
import Modal from "react-modal";
import styled from "styled-components/macro";
import _ from "lodash";
import { useDropzone } from "react-dropzone";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

import { NotEmptyValidator } from "lib/formValidation";
import { ScreenLoader } from "components/Loading";
import Button from "components/Button";
import ProfileIcon from "components/ProfileIcon";
import { BigInput } from "components/forms/inputs";
import theme from "theme";
import Icon from "components/Icon";
import {
  CustomCreatableSelect,
  Dropdown2,
  DropdownAsync
} from "components/Dropdown";

const ImageDrop = styled.div`
  cursor: pointer;
  height: 592px;
  width: 440px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.color.creme};
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
  font-weight: 500;
`;

const StyledBigInput = styled(BigInput)`
  height: 40px;
  font-size: 16px;
  margin-top: 4px;
  border-color: ${props => props.theme.color.creme};
`;

const AboutBigInput = styled(BigInput)`
  height: 100%;
  border-style: none;
  margin-top: 2px;
`;

const ProfileContainer = styled.div`
  border: solid 1px ${props => props.theme.color.creme};
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
  color: ${props => props.theme.color.gray1};
`;

const DisplayImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  outline: none;
  cursor: default;
`;

const ImageForm = styled.div`
  margin-left: 16px;
  width: 460px;
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1;
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
  bottom: ${props => props.values.yPercent}%;
  right: ${props => props.values.xPercent}%;
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

const ErrorMessage = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: ${props => props.theme.color.lightDanger};
  position: absolute;
`;

const PostButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: stretch;
  flex: 1;
  padding-bottom: 24px;
`;

const StyledButton = styled(Button)`
  height: 32px;
  width: 100%;
`;

export default function ({ onRequestClose, isOpen, style, ...restProps }) {
  const [imageFile, setImageFile] = useState(null);
  const [crudeImageFile, setCrudImageFile] = useState(null);
  const [productsTags, setProductsTags] = useState([]);
  const [userTags, setUserTags] = useState([]);
  const [tagType, setTagType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback(async acceptedFiles => {
    setImageFile(URL.createObjectURL(acceptedFiles[0]));

    setCrudImageFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const { data, loading, error, refetch } = useQuery(QUERY, {
    variables: { searchUser: "", searchVendor: "" }
  });

  const toBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  const [createVendorPost] = useMutation(CREATE_POST);

  const ResetState = () => {
    setImageFile(null);
    setProductsTags([]);
    setUserTags([]);
    setTagType(null);
    setIsLoading(false);
    setCrudImageFile(null);
  };

  console.log(crudeImageFile, "crud image file");

  const handleSubmit = values => {
    setIsLoading(true);
    createVendorPost({
      variables: {
        ...values,
        taggedProducts: productsTags?.map(product => {
          return {
            xCoordinate: product?.xPercent,
            yCoordinate: product?.yPercent,
            products: product?.tags.map(tag => tag.value)
          };
        }),
        file: crudeImageFile,
        taggedUsers: userTags?.map(user => user.value),
        tags: values?.posts?.map(post => post.value),
        box: values?.box?.value
      }
    })
      .then(value => {
        onRequestClose();
        ResetState();
      })
      .catch(err => {
        console.log(err);
        setIsLoading(true);
      });
  };
  useEffect(() => {
    console.log(productsTags);
  }, [productsTags]);

  const addProductTag = event => {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const imageHeight = event.target.offsetHeight;
    const imageWidth = event.target.offsetWidth;

    setProductsTags([
      ...productsTags,
      {
        xPercent: ((imageWidth - (x + 10)) / imageWidth) * 100,
        yPercent: ((imageHeight - y) / imageHeight) * 100,
        id: null,
        brandName: null,
        productList: [],
        tags: []
      }
    ]);
  };

  const changeSubTags = (newSubTag, index) => {
    setProductsTags(
      productsTags.map((productTag, _index) => {
        return index === _index
          ? { ...productTag, tags: newSubTag }
          : productTag;
      })
    );
  };

  const ProfileField = ProfileProps => {
    return (
      <div style={{ position: "relative" }}>
        <ProfileContainer>
          <ProfileIcon size={56} />
          <AboutBigInput {...ProfileProps} meta={null} />
        </ProfileContainer>

        {ProfileProps.meta.error && ProfileProps.meta.touched && (
          <ErrorMessage>{ProfileProps.meta.error}</ErrorMessage>
        )}
      </div>
    );
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
      {!data ? (
        <ScreenLoader style={{ height: "100%" }} />
      ) : (
        <MainWrapper>
          <ImageDrop style={{ outline: "none" }} {...getRootProps()}>
            {imageFile && (
              <DisplayImage
                onDragStart={e => {
                  e.preventDefault();
                }}
                onClick={tagType === "product" && addProductTag}
                src={imageFile}
                alt={"Uploaded"}
              />
            )}
            <TransitionGroup>
              {productsTags.map((_vals, index) => {
                return (
                  <TagPin values={_vals}>
                    <CSSTransition
                      in={tagType === "product"}
                      timeout={200}
                      classNames="see-more"
                      unmountOnExit
                    >
                      <FloatingTagDescriptionWrapper key={index}>
                        <DropdownAsync
                          input={{
                            value: _vals.brandName && { label: _vals.brandName }
                          }}
                          loadOptions={(value, callback) => {
                            refetch({
                              searchVendor: value
                            }).then(_data => {
                              callback(
                                _data.data?.vendorList.map(vendor => ({
                                  label: vendor.brandname,
                                  value: vendor.user.id,
                                  productList: vendor.products
                                }))
                              );
                            });
                          }}
                          onChange={value => {
                            setProductsTags(
                              productsTags.map((productTag, _index) => {
                                return _index === index
                                  ? {
                                      ...productTag,
                                      brandName: value.label,
                                      productList: value.productList
                                    }
                                  : productTag;
                              })
                            );
                          }}
                          placeholder="Start typing the name of a brand"
                        />
                        <Dropdown2
                          isMulti
                          input={{
                            onChange: _value => changeSubTags(_value, index),
                            value: _vals.tags
                          }}
                          options={_vals.productList?.map(product => {
                            return {
                              label: product.title,
                              value: product.id
                            };
                          })}
                          placeholder="Start typing the name of the product..."
                        />
                      </FloatingTagDescriptionWrapper>
                    </CSSTransition>
                  </TagPin>
                );
              })}
            </TransitionGroup>
            {!imageFile && (
              <input style={{ outline: "none" }} {...getInputProps()} />
            )}
            {!imageFile && (
              <>
                <Icon
                  color="black"
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
            <Form
              onSubmit={handleSubmit}
              render={({ handleSubmit }) => (
                <StyledForm>
                  <FormItem>
                    <FormTitle>
                      Add a title
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: "bold",
                          color: theme.color.gray1
                        }}
                      >
                        {" "}
                        (optional)
                      </span>
                    </FormTitle>
                    <SubTitle>This will show up on discovery screens</SubTitle>
                  </FormItem>
                  <Field name="title" component={StyledBigInput} />
                  <Field
                    name="description"
                    component={ProfileField}
                    placeholder={"Tell everyone what this photo is about..."}
                  />
                  <TagsButtonWrapper>
                    {[
                      { label: "Tag Products", type: "product" },
                      { label: "Tag Users", type: "user" },
                      { label: "Tag your post", type: "post" }
                    ].map(_buttonData => (
                      <Button
                        label={_buttonData.label}
                        onClick={() =>
                          setTagType(
                            tagType !== _buttonData.type
                              ? _buttonData.type
                              : null
                          )
                        }
                        style={{ marginRight: 6, width: 122, height: 32 }}
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
                        name="taggedUsers"
                        placeholder={
                          "Start typing in usernames to tag users..."
                        }
                        input={{
                          value: userTags
                        }}
                        isMulti
                        onChange={value => {
                          setUserTags(value);
                        }}
                        loadOptions={(value, callback) => {
                          refetch({ searchUser: value }).then(_data => {
                            callback(
                              _data?.data?.userList?.map(user => {
                                return { label: user.username, value: user.id };
                              })
                            );
                          });
                        }}
                        component={DropdownAsync}
                      />
                    </div>
                  )}

                  {tagType === "post" && (
                    <div style={{ width: "100%", marginTop: 6 }}>
                      <Field
                        name="posts"
                        isMulti
                        placeholder={
                          "Start typing in posts titles to tag posts..."
                        }
                        component={Dropdown2}
                        options={data.vendorPostList.map(_post => {
                          return { label: _post.title, value: _post.id };
                        })}
                      />
                    </div>
                  )}

                  <div style={{ width: "100%", marginTop: 24 }}>
                    <FormTitle>Save to one of your boxes</FormTitle>
                    <Field
                      name="box"
                      placeholder={"Select a box to save your post in..."}
                      component={Dropdown2}
                      options={data.vendorBoxList.map(_box => {
                        return { label: _box.title, value: _box.id };
                      })}
                    />
                  </div>
                  <PostButtonWrapper>
                    <StyledButton
                      borderColor={"transparent"}
                      buttonColor={[theme.color.green1, theme.color.background]}
                      textColor={[theme.color.green1, theme.color.background]}
                      label={"Post"}
                      onClick={handleSubmit}
                      isLoading={isLoading}
                    />
                  </PostButtonWrapper>
                </StyledForm>
              )}
            />
          </ImageForm>
        </MainWrapper>
      )}
    </Modal>
  );
}

const CREATE_POST = gql`
  mutation CreatePost(
    $description: String
    $box: ID
    $taggedProducts: [TagProductInput]
    $taggedUsers: [ID]
    $tags: [ID]
    $title: String
    $file: Upload!
  ) {
    createVendorPost(
      image: $file
      description: $description
      title: $title
      box: $box
      taggedProducts: $taggedProducts
      taggedUsers: $taggedUsers
      tags: $tags
    ) {
      post {
        id
        title
        image
        description
        taggedProducts {
          productTags {
            description
            title
          }
        }
        taggedUsers {
          user {
            email
          }
        }
        tags {
          tag {
            id
            label
          }
        }
      }
      errorMessage
    }
  }
`;

const QUERY = gql`
  query Query($searchUser: String!, $searchVendor: String!) {
    userList(searchQuery: $searchUser) {
      id
      username
    }
    vendorPostList {
      id
      title
      image
    }
    vendorBoxList {
      id
      title
    }
    vendorList(searchQuery: $searchVendor) {
      brandname
      user {
        id
        username
      }
      products {
        id
        title
      }
    }
  }
`;
