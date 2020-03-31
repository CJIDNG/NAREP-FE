import styled from 'styled-components';

export const TagStyle = styled.span`
&:not(:last-child)::after{
  content: ", ";
}
`;
