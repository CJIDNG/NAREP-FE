import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectSectors } from '@Redux/datasets/get-datasets/datasets.selectors';
import LazyLoad from 'react-lazyload';
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
            <LazyLoad>
              <BackgroundImageContainer
                className="background-image"
                imageUrl={`${process.env.PUBLIC_URL}/img/sector-${handleImage(name)}.jpg`}
              />
              <ContentContainer className="content">
                <ContentTitle>{ name.toUpperCase() }</ContentTitle>
              </ContentContainer>
            </LazyLoad>
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
