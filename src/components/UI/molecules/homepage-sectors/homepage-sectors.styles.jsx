import styled, { css } from 'styled-components';


const ImageStyle = css`
display:block;
width:100%;
height:20rem;
object-fit:cover;
position:relative;
`;

export const SectorsGrid = styled.div`
   grid-column: full-start / full-end;
    height:100%;
    display: grid;
    grid-gap: .5rem;
    padding: 0.5rem;
    grid-template: repeat(2, 1fr) / repeat(6, 1fr);
    width:90%;
    margin:0 auto;

    @media only screen and (max-width: 800px) {
        display:block;
        width:90%;
        margin: 0 auto;
    }
`;
export const GridOverlay = styled.div`
    width:50rem;
   background: rgba(0,0,0,0.6);
    position: absolute;
    margin: auto;
    width: 0px;
    height: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;   
    opacity: 0;   
    -webkit-transition: .4s ease;
    transition: .4s ease;


`;
export const GridItemSpan = styled.span`
    color: #fff;
    text-align: center;
    position: absolute;
    margin: auto;
    width: 200px;
    height: 30px;
    line-height: 30px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: transform .5s ease, opacity .7s ease;
    transition: transform .5s ease, opacity .7s ease;
`;

const FigureStyle = css`
position: relative;   
 cursor: pointer;
  overflow: hidden;
 &:hover ${GridOverlay}{
    opacity: 1;
    width: 100%;
    height: 100%;    
  }
  &:hover ${GridItemSpan}{
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: transform .5s ease, opacity 1.3s ease;
    transition: transform .5s ease, opacity 1.3s ease;
    
  }
`;
export const GridImage = styled.img`
  position: relative; 
 ${ImageStyle}
  @media only screen and (max-width: 800px) {
margin-bottom:3rem;
    }
`;

export const GridItem1 = styled.figure`
   grid-row: 1 / 2;
   grid-column: 1 / span 2;
    ${FigureStyle}
`;
export const GridItem2 = styled.figure`
   grid-row: 1 / 2;
   grid-column: 3 / span 2;
    ${FigureStyle}
`;
export const GridItem3 = styled.figure`
   grid-row: 1 / 2;
   grid-column: 5 / span 2;
    ${FigureStyle}
`;
export const GridItem4 = styled.figure`
  grid-row: 2 / 3;
   grid-column: 1 / span 3;
    ${FigureStyle}
`;
export const GridItem5 = styled.figure`
   grid-row: 2 / 3;
   grid-column: 4 / span 3;
    ${FigureStyle}
`;
