import React from "react";

import styled from "styled-components";
import { Field, Form } from "react-final-form";

import GridFormPanel, { FormRow } from "components/forms/GridFormPanel";

const MainContainer = styled.div`
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
            <GridFormPanel
              title={"Product Photography"}
              subTitle={
                "Add photos that beautifully and intuitively showcase your product"
              }
            >
              <FormRow
                title={"Photos*"}
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
                <Field name="Photos" component={() => <div> test </div>} />
              </FormRow>
              <FormRow title={"this is title"} subTitle={"subTitle"} isOptional>
                <div>form element</div>
              </FormRow>
            </GridFormPanel>
            Add a new listing
          </form>
        )}
        onSubmit={handleSubmit}
      ></Form>
    </MainContainer>
  );
}
