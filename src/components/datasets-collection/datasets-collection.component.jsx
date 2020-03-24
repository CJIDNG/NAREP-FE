/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectItems } from '../../redux/datasets/datasets.selectors';
import DataSetItem from '../single-datasets/single-dataset.component';
import { fetchDatasetsStarted } from '../../redux/datasets/datasets.actions';

const DatasetCollection = ({ fetchDatasetsStarted: getAllData, collections }) => {
  useEffect(() => {
    const fetchTrendingArticles = async () => {
      await getAllData();
    };
    fetchTrendingArticles();
  }, [getAllData]);
  return (
    <>
      { collections.map(({ id, ...otherCollectionProps }) => (
        <DataSetItem key={id} {...otherCollectionProps} />
      )) }
    </>
  );
};
DatasetCollection.propTypes = {
  fetchDatasetsStarted: PropTypes.func.isRequired,
  collections: PropTypes.array.isRequired
};
const mapStateToProps = createStructuredSelector({
  collections: selectItems,
});
const mapDispatchToProps = (dispatch) => ({
  fetchDatasetsStarted: () => dispatch(fetchDatasetsStarted())
});
export default connect(mapStateToProps, mapDispatchToProps)(DatasetCollection);
