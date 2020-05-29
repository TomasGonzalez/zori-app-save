import React from 'react';

import styled from 'styled-components';

import Button from 'components/Button';
import theme from 'theme';

const MainContainer = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.theme.color.black1};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export default function ({onClick}) {
  return (
    <MainContainer>
      <Title>
        Aw, there’s no listings in your store yet!
      </Title>
      <Button 
        onClick={onClick}
        label="Create your first" 
        style={{height: 32, width: 200}}
        buttonColor={[theme.color.green1, theme.color.background]} 
        textColor={[theme.color.green1, theme.color.background]} 
        borderColor='transparent'
      /> 
    </MainContainer>
  )  
}
