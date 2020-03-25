import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectSectors } from '@Redux/datasets/datasets.selectors';
import {
  DirectoryMenuContainer,
  SectorItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
} from './homepage-sectors.styles';

const HomePageSector = ({ sectors }) => {
  const handleImage = (name) => name.split(' ').join('-');
  return (
    <DirectoryMenuContainer>
      {
        sectors.map(({ id, name }) => (
          <SectorItemContainer to={`/datasets?sectorId=${id}`} key={id}>
            <BackgroundImageContainer
              className="background-image"
              imageUrl={`${process.env.PUBLIC_URL}/img/sector-${handleImage(name)}.jpg`}
            />
            <ContentContainer className="content">
              <ContentTitle>{ name.toUpperCase() }</ContentTitle>
            </ContentContainer>

          </SectorItemContainer>
        ))
      }
    </DirectoryMenuContainer>
  );
};
HomePageSector.propTypes = {
  sectors: PropTypes.array.isRequired,
};
const mapStateToProps = createStructuredSelector({
  sectors: selectSectors
});

export default connect(mapStateToProps)(HomePageSector);
=======
import {
  SectorsGrid, GridItem1, GridItem2, GridItem3,
  GridItem4, GridItem5, GridImage, GridItemSpan, GridOverlay
} from './homepage-sectors.styles';

const HomePageSector = () => (
  <SectorsGrid>
    <GridItem1>
      <GridImage
        src={`${process.env.PUBLIC_URL}/img/sector-climate-change.jpg`}
        alt="Credit: Patrick Hendry on Unsplash"
        title="Credit: Patrick Hendry on Unsplash"
      />
      <GridOverlay />
      <GridItemSpan> Hello</GridItemSpan>
    </GridItem1>
    <GridItem2>
      <GridImage
        src={`${process.env.PUBLIC_URL}/img/sector-oil-gas.jpg`}
        alt="Credit: Patrick Hendry on Unsplash"
        title="Credit: Patrick Hendry on Unsplash"
      />
      <GridOverlay />
      <GridItemSpan> Hello</GridItemSpan>
    </GridItem2>
    <GridItem3>
      <GridImage
        src={`${process.env.PUBLIC_URL}/img/sector-water-marine.jpg`}
        alt="Credit: Patrick Ryan on Unsplash"
        title="Credit: Patrick Ryan on Unsplash"
      />
      <GridOverlay />
      <GridItemSpan> Hello</GridItemSpan>
    </GridItem3>
    <GridItem4>
      <GridImage
        src={`${process.env.PUBLIC_URL}/img/sector-solid-minerals.jpg`}
        alt="Credit:Markus Spiske on Unsplash"
        title="Credit:Markus Spiske on Unsplash"
      />
      <GridOverlay />
      <GridItemSpan> Hello</GridItemSpan>
    </GridItem4>
    <GridItem5>
      <GridImage
        src={`${process.env.PUBLIC_URL}/img/sector-forest-resources.jpg`}
        alt="Credit:James Lee on Unsplash"
        title="Credit:James Lee on Unsplash"
      />
      <GridOverlay />
      <GridItemSpan> Hello</GridItemSpan>
    </GridItem5>
  </SectorsGrid>
);

export default HomePageSector;
>>>>>>> restructure folder, added craco for imports
