import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchSingleDatasetStarted } from '@Redux/datasets/datasets.actions';
import { selectDataset } from '@Redux/datasets/datasets.selectors';
import Spinner from '@Atoms/spinner/spinner.component';
import Header from '@Components/UI/organisms/header/header.component';
import DatasetPage from './dataset-component';

const SingleDataset = ({ match, getSingleDataset, singleDataset: { isLoading, singleDataset } }) => {
  useEffect(() => {
    const fetchSingleDataset = async () => {
      await getSingleDataset(match.params.slug);
    };
    fetchSingleDataset(match.params.slug);
  }, [match.params.slug, getSingleDataset]);
  return (
    <div>
      <Header />
      {
        isLoading ? <Spinner /> : <DatasetPage {...singleDataset} />
      }
    </div>

  );
};

const mapStateToProps = createStructuredSelector({
  singleDataset: selectDataset,
});
const mapDispatchToProps = (dispatch) => ({
  getSingleDataset: (slug) => dispatch(fetchSingleDatasetStarted(slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleDataset);
