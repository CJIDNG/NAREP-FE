import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  height: 4rem;
  letter-spacing: 0.5px;
  padding: 0 3.5rem 0 3.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #27AE60;
  color: white;
  border: none;
  margin:5rem 0; 
  border-radius:10rem;
 @media only screen and (max-width: 800px) {
  margin:3rem 0;
    }
  &:hover {
    background-color: white;
    color: #27AE60;
    border: 1px solid #27AE60;
  }
`;
