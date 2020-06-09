import React from "react";

import styled from "styled-components/macro";
import { Field, Form } from "react-final-form";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import AddMultipleImages from "components/forms/AddMultipleImages";
import { InputCurrency, DefaultInput, BigInput } from "components/forms/inputs";
import { Dropdown2, CustomCreatableSelect } from "components/Dropdown";
import Button from "components/Button";
import DumbCheckBox from "components/forms/DumbCheckBox";
import theme from "theme";
import GridFormPanel, {
  FormRow,
  FormSection
} from "components/forms/GridFormPanel";
import MultipleSelectList, {
  ShippingOptions
} from "components/forms/MultipleSelectList";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 57px 0px 57px;
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

const StyledDropdown2 = styled(Dropdown2)``;

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

const StyledFormRow = styled(FormRow)`
  border-color: ${props => props.theme.color.creme};
`;

export default function () {
  const [CreateProduct] = useMutation(CREATE_PRODUCT);
  const { data, refetch, loading, error } = useQuery(QUERY);

  const handleSubmit = values => {
    console.log(values, "form values");
    console.log(
      values?.productCategory?.map(category => category.value),
      "category values array"
    );

    CreateProduct({
      variables: {
        ...values,
        productCategory: values.productCategory?.map(
          category => category.value
        ),
        aboutThisProduct: {
          whoMadeIt: values.whoMadeIt?.value,
          howSellingIt: values.howSellingIt?.value
        },
        ingredients: values.ingredients?.map(ingredient => ingredient.label),
        sustainablePrinciples: values.sustainablePrinciples(
          principle => principle.value
        ),
        productTags: values.productTags?.map(tags => tags?.value),
        productSections: values.productSections?.map(
          sections => sections?.value
        )
      }
    })
      .then(response => {
        console.log("Testing response", response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <MainContainer>
      <Form
        render={({ handleSubmit }) => (
          <form style={{ height: "100%" }}>
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
                <Field name="images" component={AddMultipleImages} />
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
                  name="productCategory"
                  component={StyledDropdown2}
                  isMulti
                  options={data.productCategories?.map(categories => ({
                    value: categories.id,
                    label: categories.label
                  }))}
                  placeholder="Select a category..."
                />
              </FormRow>
              <FormRow title={"About this product"}>
                <HorizontalWrapper>
                  <Field
                    name="whoMadeIt"
                    component={AboutThisProductDD}
                    placeholder="Who made it?"
                    options={[
                      { value: 0, label: "We did" },
                      { value: 1, label: "Another company did" }
                    ]}
                  />
                  <Field
                    name="howSellingIt"
                    component={AboutThisProductDD}
                    options={[
                      { value: 0, label: "As a finished product" },
                      { value: 1, label: "As a made to order product" }
                    ]}
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
                <Field name="description" component={StyledBigInput} />
              </FormRow>
              <FormRow
                title={"Ingredients"}
                subTitle={
                  "Talk about the main components that make up your product."
                }
              >
                <Field
                  name="ingredients"
                  rows={1}
                  isMulti
                  component={CustomCreatableSelect}
                />
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
                  name="sustainablePrinciples"
                  options={data.sustainablePrinciples?.map(principles => ({
                    label: principles.label,
                    value: principles.id
                  }))}
                  component={CustomCreatableSelect}
                  isMulti
                />
              </FormRow>
              <FormRow
                title={"Personalization"}
                isOptional
                subTitle={
                  "Allow customers to make specific personalization requests"
                }
              >
                <Field
                  name="personalization"
                  labels={["Offered", "Not offered"]}
                  colorText={theme.color.gray1}
                  color={theme.color.creme}
                  component={DumbCheckBox}
                />
              </FormRow>
              <FormRow
                title={"tags"}
                isOptional
                subTitle={
                  "These are some of the search terms you expect your customers to use to find your products"
                }
              >
                <Field
                  placeholder="Organic face cream, Vegan toothpaste..."
                  name="tags"
                  options={data.productTags?.map(tags => ({
                    value: tags.id,
                    label: tags.label
                  }))}
                  component={Dropdown2}
                  isMulti
                />
              </FormRow>
              <FormRow
                title={"Sections"}
                isOptional
                subTitle={
                  "Create sections to intuitively organize your listings. Make it easier for both you and your customer to find your products"
                }
              >
                <Field
                  placeholder="Pick your section..."
                  name="productSections"
                  options={data.vendorProductSections?.map(sections => ({
                    value: sections.id,
                    label: sections.label
                  }))}
                  component={Dropdown2}
                />
              </FormRow>
            </StyledGridFormPanel>
            Inventory and Pricing
            <StyledGridFormPanel
              title="Pricing*"
              subTitle={`ZORI enables you to reward customers when they buy in groups. Set rules on how you want to price your items in both individual and group purchase scenarios.
              Be sure to factor in the total cost of the goods you’re selling including materials and labor. Keep in mind shipping costs for your customers when setting your prices.`}
            >
              <FormRow
                title={"Individual Pricing"}
                subTitle={"Pricing when only one customer makes a purchase"}
              >
                <Field name={"pricing"} component={InputCurrency} />
              </FormRow>
              <FormRow
                title="Team Purchase Pricing"
                subTitle="Pricing when customers shop together as a team."
              >
                <Field
                  name="teaPurchasePricing"
                  label={"Set team purchasing rules"}
                  component={Button}
                  borderColor={theme.color.creme}
                  textColor={[theme.color.background, theme.color.black1]}
                  style={{ height: 32, width: 169 }}
                />
              </FormRow>
              <FormRow
                title="Inventory"
                subTitle="Indicate how much stock you have available. Will automatically deplete as you sell."
              >
                <Field
                  name="inventory"
                  type="number"
                  component={DefaultInput}
                />
              </FormRow>
              <FormRow
                title="Pre-Orders"
                subTitle="Would you like to continue taking orders after stock runs out?"
                extra={
                  <p
                    style={{
                      fontSize: 10,
                      color: theme.color.gray1,
                      paddingTop: 8,
                      margin: 0
                    }}
                  >
                    Be sure to only take pre-orders for what you’re able to
                    fulfill
                  </p>
                }
              >
                <Field
                  name="preOrdes"
                  colorText={theme.color.gray1}
                  color={theme.color.creme}
                  labels={["Yes", "No"]}
                  component={DumbCheckBox}
                ></Field>
              </FormRow>
              <FormRow
                subTitle="Set purchase limits per customer?"
                title="Purchase limits"
              >
                <Field
                  name="purchaselimits"
                  labels={["Yes", "No"]}
                  colorText={theme.color.gray1}
                  color={theme.color.creme}
                  component={DumbCheckBox}
                ></Field>
              </FormRow>
              <FormRow
                title="SKU"
                subTitle="Record your SKU to make it easier to manage your inventory. It will NOT be displayed to customers"
                isOptional
              >
                <Field name="SKU" component={DefaultInput} />
              </FormRow>
              <FormSection title="Variation" isOptional>
                <div>
                  <h3
                    style={{
                      fontSize: 12,
                      margin: 0,
                      color: theme.color.gray1,
                      fontWeight: "normal"
                    }}
                  >
                    Add all available options you’d like your customers to
                    choose from when making a purchase.
                  </h3>
                  <h4
                    style={{
                      fontSize: 10,
                      margin: 0,
                      color: theme.color.gray1,
                      fontWeight: "normal"
                    }}
                  >
                    You can offer options in anything from Size, Color, Material
                    type and more.
                  </h4>
                  <Button
                    style={{ width: 168, height: 32, marginTop: 16 }}
                    label="Add a Variation"
                    buttonColor={[theme.color.background, theme.color.black1]}
                    textColor={[theme.color.background, theme.color.black1]}
                    borderColor={theme.color.creme}
                  />
                </div>
              </FormSection>
            </StyledGridFormPanel>
            <StyledGridFormPanel>
              <FormRow
                title={"Processing Time"}
                subTitle={
                  "Tell your customers how long it’ll take to process each order before it’s ready for dispatch"
                }
              >
                <Field
                  name="processingTime"
                  options={[
                    { label: "1 business day", value: 0 },
                    { label: "2 - 4 business days", value: 1 },
                    { label: "5 - 7 business days", value: 2 },
                    { label: "8+ business days", value: 3 }
                  ]}
                  component={Dropdown2}
                />
              </FormRow>
              <FormRow
                title="Burden of Cost"
                subTitle="Indicate if you will cover shipping costs for your customers"
              >
                <Field
                  name="burdenOfCost"
                  color={theme.color.creme}
                  colorText={theme.color.gray1}
                  labels={["Yes", "No"]}
                  component={DumbCheckBox}
                />
              </FormRow>
              <FormRow
                title="Shipping Options"
                subTitle="Choose the most appropriate shipping option for your product"
              >
                <Field
                  name="shippingOptions"
                  _data={[
                    {
                      text: "USPS Priority Mail 2-Day Flat Rate Envelope",
                      price: "123.23",
                      value: 1,
                      help: "this is a help"
                    },
                    {
                      text: "USPS Priority Mail 2-Day Flat Rate Box",
                      price: "123.23",
                      value: 2,
                      help: "testing this help"
                    },
                    {
                      text: "USPS Priority Mail 2-Day Small Flat Rate Box",
                      price: "123.23",
                      value: 3,
                      help: "testing this help"
                    },
                    {
                      text: "usps priority mail 2-day medium flat rate box",
                      price: "123.23",
                      value: 4,
                      help: "testing this help"
                    },
                    {
                      text: "USPS Priority Mail 2-Day Large Flat Rate Box",
                      price: "123.23",
                      value: 5,
                      help: "testing this help"
                    }
                  ]}
                  RowLayout={ShippingOptions}
                  component={MultipleSelectList}
                />
              </FormRow>
              <StyledFormRow
                title="ZORI Shipping Labels"
                subTitle="Unless you have your own, you can have ZORI automatically generate ready to print shipping labels with each order"
              >
                <Field
                  labels={[
                    "Yes please, generate ZORI shipping labels",
                    "No thanks, I have my own"
                  ]}
                  colorText={theme.color.gray1}
                  color={theme.color.creme}
                  name="labels"
                  component={DumbCheckBox}
                />
              </StyledFormRow>
            </StyledGridFormPanel>
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end"
              }}
            >
              <Button
                onClick={handleSubmit}
                style={{ width: 168, height: 40, margin: 20 }}
                buttonColor={[theme.color.black1, theme.color.background]}
                textColor={[theme.color.black1, theme.color.background]}
                label={"Publish Listing"}
              />
            </div>
          </form>
        )}
        onSubmit={handleSubmit}
      ></Form>
    </MainContainer>
  );
}

const QUERY = gql`
  query Query {
    productCategories {
      id
      label
      productTags {
        id
        label
      }
    }
    sustainablePrinciples {
      id
      label
    }
    productTags {
      id
      label
    }
    vendorProductSections {
      id
      label
    }
  }
`;

const CREATE_PRODUCT = gql`
  mutation CreateProductMutation(
    $title: String
    $description: String
    $images: [Upload]
    $coverPhoto: Upload
    $productCategory: [ID]
    $ingredients: [String]
    $sustainablePrnciples: [ID]
    $productTags: [ID]
    $productSections: [ID]
  ) {
    createProduct(
      sutainablePrnciples: $sustainablePrinciples
      productCategory: $productCategory
      ingredients: $ingredients
      coverPhoto: $coverPhoto
      title: $title
      description: $description
      images: $images
      productTags: $productTags
      productSections: $productSections
    ) {
      errorMessage
      product {
        id
        title
        description
        inventory
      }
    }
  }
`;
