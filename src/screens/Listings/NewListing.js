import React from 'react';

import styled from 'styled-components';

import GridFormPanel ,{FormRow}from 'components/forms/GridFormPanel';

const MainContainer = styled.div`
  margin-top: 16px;
  padding: 0px 57px 0px 57px ;
  font-weight: 500;
  font-size: 20px;
`;

export default function () {
  return (
    <MainContainer>
      Add a new listing
      <GridFormPanel>
        <FormRow 
          title={'this is title'} 
          subTitle={'subTitle'}
          isOptional
        >
          <div>form element</div> 
        </FormRow>
        <FormRow 
          title={'this is title'} 
          subTitle={'subTitle'}
          isOptional
        >
          <div>form element</div> 
        </FormRow>
      </GridFormPanel>
    </MainContainer>
  )
}
