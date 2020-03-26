/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';


export const HomeBannerContainer = styled.div`
 display:flex;
 flex-wrap:wrap;
 margin:5rem;

  @media only screen and (max-width: 800px) {
      display:flex;
      flex-grow:1;
      flex-direction:column;
      justify-content:center;
      align-items:center;
  }
`;

export const HomeBannerTextContainer = styled.div`
  flex-grow:1;
  width:40%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight:bolder;
  flex-direction:column;
  flex-wrap:wrap;
  padding:2rem;
    @media only screen and (max-width: 800px) {
    width:100%;
    }
`;
export const HomeBannerText = styled.p`
  font-weight:500;
  font-size:1.5rem;

`;
export const HomeBannerImage = styled.img`
  flex-grow:1;
  width:50%;
  padding:2rem;
  display:block;
  height:auto;
  object-fit: cover;
  @media only screen and (max-width: 800px) {
 display:none;
  }
`;
