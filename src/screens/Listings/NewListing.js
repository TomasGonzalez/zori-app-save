import React from "react";

import styled from "styled-components";
import { Field, Form } from "react-final-form";

import AddMultipleImages from "components/forms/AddMultipleImages";
import GridFormPanel, { FormRow } from "components/forms/GridFormPanel";
import { DefaultInput, BigInput } from "components/forms/inputs";
import { Dropdown2 } from "components/Dropdown";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 0px 57px 0px 57px;
  font-weight: 500;
  font-size: 20px;
`;

const BulletList = styled.ul`
  color: ${props => props.theme.color.gray1};
  font-size: 10px;
  padding: 0px;
  margin-left: 12px;

  li {
    margin-bottom: 8px;
    line-height: 1.5;
  }
`;

const TipsTitle = styled.h3`
  margin: 8px 0px;
  font-size: 10px;
  font-weight: 600;
  color: ${props => props.theme.color.gray2};
`;

const StyledGridFormPanel = styled(GridFormPanel)`
  width: 1008px;
`;

const StyledDropdown2 = styled(Dropdown2)`
  width: 185px;
`;

const AboutThisProductDD = styled(Dropdown2)`
  &:last-child {
    margin-left: 8px;
  }
  width: 100%;
`;

const HorizontalWrapper = styled.div`
  display: flex;
`;

const StyledBigInput = styled(BigInput)`
  border-color: ${props => props.theme.color.creme};
`;

export default function () {
  const handleSubmit = () => {
    console.log("test");
  };

  return (
    <MainContainer>
      <Form
        render={() => (
          <form>
            Add a new listing
            <StyledGridFormPanel
              title={"Product Photography"}
              subTitle={
                "Add photos that beautifully and intuitively showcase your product"
              }
            >
              <FormRow
                title={"Photos"}
                subTitle={
                  "Start off with up to 12 photos that show your product in a variety of angles"
                }
                extra={
                  <div>
                    <TipsTitle>Extra Tips</TipsTitle>
                    <BulletList>
                      <li>
                        <span style={{ position: "relative", left: -5 }}>
                          Use clean, light color backgrounds
                        </span>
                      </li>
                      <li>
                        <span style={{ position: "relative", left: -5 }}>
                          You can showcase different use cases but remember, you
                          can upload content at any time on your brand profile
                          and tag your product listings there. *There’s no limit
                          on photo uploads in your profile.
                        </span>
                      </li>
                      <li>
                        <span style={{ position: "relative", left: -5 }}>
                          Use clean, light color backgrounds
                        </span>
                      </li>
                    </BulletList>
                  </div>
                }
              >
                <Field name="Photos" component={AddMultipleImages} />
              </FormRow>
              <FormRow
                title={"Add your cover photo"}
                subTitle={
                  "This is the first thing customers see when they find your product. Pick the perfect one!"
                }
              >
                <Field
                  name="coverPhoto"
                  maxNumber={1}
                  component={AddMultipleImages}
                />
              </FormRow>
            </StyledGridFormPanel>
            <StyledGridFormPanel
              title={"Product Photography"}
              subTitle={
                "Add photos that beautifully and intuitively showcase your product"
              }
            >
              <FormRow
                title={"Title"}
                subTitle={"Be sure to choose an intuitive title "}
              >
                <Field name="title" component={DefaultInput} />
              </FormRow>
              <FormRow
                title={"Category"}
                subTitle={
                  "Manually add your categories here. Remember, the more specific you are the better. "
                }
              >
                <Field
                  name="category"
                  component={StyledDropdown2}
                  isMulti
                  placeholder="Select a category..."
                />
              </FormRow>
              <FormRow title={"About this product"}>
                <HorizontalWrapper>
                  <Field
                    name="category"
                    component={AboutThisProductDD}
                    placeholder="Who made it?"
                  />
                  <Field
                    name="category"
                    component={AboutThisProductDD}
                    placeholder="How are you selling it?"
                  />
                </HorizontalWrapper>
              </FormRow>
              <FormRow
                title={"Product Description"}
                subTitle={
                  "Start off with an overview that describes the best in your product"
                }
              >
                <Field name="category" component={StyledBigInput} />
              </FormRow>
              <FormRow
                title={"Product Pointers"}
                subTitle={
                  "Add pointers relevant to your product. This can include anything from extra specs, usage instructions etc."
                }
              >
                <Field name="category" />
              </FormRow>
            </StyledGridFormPanel>
          </form>
        )}
        onSubmit={handleSubmit}
      ></Form>
    </MainContainer>
  );
}
