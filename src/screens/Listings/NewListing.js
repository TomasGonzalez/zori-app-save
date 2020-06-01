import React from "react";

import styled from "styled-components/macro";
import { Field, Form } from "react-final-form";

import AddMultipleImages from "components/forms/AddMultipleImages";
import GridFormPanel, { FormRow } from "components/forms/GridFormPanel";
import { DefaultInput, BigInput } from "components/forms/inputs";
import { Dropdown2, CustomCreatableSelect } from "components/Dropdown";
import DumbCheckBox from "components/forms/DumbCheckBox";
import theme from "theme";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px 57px 0px 57px;
  font-weight: 500;
  font-size: 20px;
  overflow: auto;
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
                title={"Ingredients"}
                subTitle={
                  "Talk about the main components that make up your product."
                }
              >
                <Field name="ingredients" rows={1} component={StyledBigInput} />
              </FormRow>
              <FormRow
                title={"Principles"}
                subTitle={
                  "Outline some of the ethical/sustainable principles you stick to when building your products"
                }
              >
                <Field
                  placeholder="No Parabens, No Animal Cruelty... "
                  help="Start typing to generate suggestions. Feel free to add more than one."
                  name="principles"
                  component={CustomCreatableSelect}
                  isMulti
                />
              </FormRow>
              <FormRow
                title={"Personalization"}
                optional
                subTitle={
                  "Allow customers to make specific personalization requests"
                }
              >
                <Field
                  placeholder="No Parabens, No Animal Cruelty... "
                  name="personalization"
                  labels={["Offered", "Not offered"]}
                  colorText={theme.color.gray1}
                  color={theme.color.creme}
                  component={DumbCheckBox}
                  isMulti
                />
              </FormRow>
            </StyledGridFormPanel>
          </form>
        )}
        onSubmit={handleSubmit}
      ></Form>
    </MainContainer>
  );
}
