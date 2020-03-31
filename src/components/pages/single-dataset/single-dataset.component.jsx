/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { fetchSingleDatasetStarted } from '@Redux/datasets/datasets.actions';
import { selectDataset } from '@Redux/datasets/datasets.selectors';
import Spinner from '@Atoms/spinner/spinner.component';
import Header from '@Components/UI/organisms/header/header.component';
import DatasetPage from './dataset-component';

const SingleDataset = ({ match: { params: { slug } }, getSingleDataset, singleDataset: { isLoading, singleDataset } }) => {
  useEffect(() => {
    const fetchSingleDataset = async () => {
      await getSingleDataset(slug);
    };
    fetchSingleDataset(slug);
  }, [slug, getSingleDataset]);
  return (
    <div>
      <Header />
      {
        isLoading ? <Spinner /> : <DatasetPage {...singleDataset} />
      }
    </div>

  );
};
SingleDataset.propTypes = {
  getSingleDataset: PropTypes.func.isRequired,
};
const mapStateToProps = createStructuredSelector({
  singleDataset: selectDataset,
});
const mapDispatchToProps = (dispatch) => ({
  getSingleDataset: (slug) => dispatch(fetchSingleDatasetStarted(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleDataset);
