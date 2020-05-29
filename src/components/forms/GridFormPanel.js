import React from 'react'; 

import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 24px;  
  border-radius: 5px;
  box-shadow: 0 0 15px 0 ${props => props.theme.color.creme};
  margin: 24px 28px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 18px;
    font-weight: 500;
    padding: 0px;
    margin: 0px;
    color: 
    ${props => props.theme.color.black1};
  }

  span {
    font-size: 12px;
    color: ${props => props.theme.color.gray2};
    font-weight: 500;
  }

  margin-bottom: 16px;

  h3 {
    margin: 0px;
    margin-top: 8px;
    font-size: 12px;
    color: ${props => props.theme.color.gray1};
    font-weight: normal;
  }
`

const GridElement = styled.div`
  display: grid;
  grid-template-columns: 180px auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;

  h2 {
    font-size: 14px;
    font-weight: 500;
    padding: 0px;
    margin: 0px;
    color: 
    ${props => props.theme.color.black1};
  }

  h3 {
    font-weight: normal;
    margin: 0px;
    margin-top: 8px;
    font-size: 10px;
    color: ${props => props.theme.color.gray1};
  }

  span {
    font-size: 10px;
    color: ${props => props.theme.color.gray2};
    font-weight: 500;
  }
`;

export const FormRow = ({isOptional, title, subTitle, children}) => {
  return (
    <>
      <div>
        <h2>{title} {isOptional && <span>(Optional)</span>}</h2>
        <h3 style={{marginTop: 4}}>{subTitle}</h3>
      </div>
      <div>
        {children}
      </div>
    </>
  )
}

export default function ({children, ...props}) {
  return (
    <MainContainer>
      <Title>
        <h2>Product Photography</h2>
        <h3>Add photos that beautifully and intuitively showcase your product </h3>
      </Title>
      <GridElement>
        {children}
      </GridElement>
    </MainContainer>
  )
}
