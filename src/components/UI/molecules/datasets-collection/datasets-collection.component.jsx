import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectItems, selectItemsCount, selectSectors } from '@Redux/datasets/get-datasets/datasets.selectors';
import { fetchDatasetsStarted } from '@Redux/datasets/get-datasets/datasets.actions';
import { withRouter, useLocation } from 'react-router-dom';
import DatasetLists from './dataset-list.component';

const DatasetCollection = ({
  fetchDatasetsStarted: getAllDatasets, collections, collectionsCount
}) => {
  const query = new URLSearchParams(useLocation().search);
  const queryString = query.get('sectorId');
  const [activePage, setActivePage] = useState(1);
  const onChange = (event, pageInfo) => {
    setActivePage(pageInfo.activePage);
    if (queryString) {
      getAllDatasets(activePage, queryString);
    }
    getAllDatasets(activePage);
  };
  useEffect(() => {
    const fetchDatasets = async () => {
      if (queryString) {
        await getAllDatasets(activePage, queryString);
        return;
      }
      await getAllDatasets(activePage);
    };
    fetchDatasets();
  }, [getAllDatasets, activePage, queryString]);

  return (
    <>
      <DatasetLists
        collections={collections}
        collectionsCount={collectionsCount}
        activePage={activePage}
        onChange={onChange}
      />
    </>
  );
};
DatasetCollection.propTypes = {
  fetchDatasetsStarted: PropTypes.func.isRequired,
  collections: PropTypes.array.isRequired,
  collectionsCount: PropTypes.number.isRequired,
};
const mapStateToProps = createStructuredSelector({
  collections: selectItems,
  collectionsCount: selectItemsCount,
  sectors: selectSectors
});
const mapDispatchToProps = (dispatch) => ({
  fetchDatasetsStarted: (page, sectorId) => dispatch(fetchDatasetsStarted(page, sectorId))
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DatasetCollection));
