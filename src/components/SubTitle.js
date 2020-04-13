import styled from "styled-components";

const SubTitle = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: ${(props) => props.theme.color.gray1};
  line-height: 1.6;
  span {
    color: ${(props) => props.theme.color.linkBlue};
    cursor: pointer;
  }
`;

export default SubTitle;
