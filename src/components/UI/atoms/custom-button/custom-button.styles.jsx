import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: 100%;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 5rem;
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

  &:hover {
    background-color: white;
    color: #27AE60;
    border: 1px solid #27AE60;
  }
`;
