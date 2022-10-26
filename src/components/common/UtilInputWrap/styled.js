import styled from 'styled-components';

export const StyledUtilInputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-self: ${({ alignSelf }) => alignSelf};
  width: 100%;
  margin: ${({ margin }) => (margin ? margin : '0 0 2rem 0')};
`;
