import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectItems } from '@Redux/datasets/datasets.selectors';
import DataSetItem from '@Components/UI/atoms/datasets-item/datasets-item.component';
import { fetchDatasetsStarted } from '@Redux/datasets/datasets.actions';

const DatasetCollection = ({ fetchDatasetsStarted: getAllDatasets, collections }) => {
  useEffect(() => {
    const fetchDatasets = async () => {
      await getAllDatasets();
    };
    fetchDatasets();
  }, [getAllDatasets]);
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
