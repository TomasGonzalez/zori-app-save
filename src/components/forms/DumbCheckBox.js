import React from "react";

import styled from "styled-components/macro";

import BaseInput from "components/BaseInput";
import Checkbox from "components/Checkbox";

const MultiCheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  max-width: 280px;
`;

const StyledCheckbox = styled(Checkbox)`  
  .label{
    font-size: 12px;
    margin-left: 4px;
  }
`;

export default function( props ) {
  return (
    <BaseInput {...props}>
      <MultiCheckBoxWrapper>
        <StyledCheckbox 
          label="Yes please!" 
          colorTheme={props.color} 
          {...props} 
          onClick={()=>props.input.onChange(true)} />
        <StyledCheckbox 
          onClick={()=>props.input.onChange(false)} 
          inverted={typeof props.input.value === "boolean"} 
          label="No, keep it a secret!" colorTheme={props.color} {...props}/>
      </MultiCheckBoxWrapper>
    </BaseInput>
  );
}
