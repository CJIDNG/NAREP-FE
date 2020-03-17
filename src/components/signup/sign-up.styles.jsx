import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


const subColor = 'grey';
// const mainColor = 'black';

const SpanStyle = css`
  padding-top:30px;
  font-size:1.5rem;

`;
export const SignUpContainer = styled.div`
  display: flex;
  height:100vh;
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
  text-align:center;
  font-size:2rem;
  color:${subColor};
`;
export const FormContainer = styled.form`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:30%;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding:30px;
  margin: auto;
`;
export const InputErrors = styled.span`
  color:red;
  ${SpanStyle};
`;
export const ToSignin = styled.span`
  ${SpanStyle}
  text-align:center;
`;

export const LinkToSignin = styled(Link)`
 color: #27AE60;
 margin-left:5px;
`;
