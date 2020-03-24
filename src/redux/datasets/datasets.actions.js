import DataSetsActionTypes from './datasets.types';

export const fetchDatasetsStarted = () => ({
  type: DataSetsActionTypes.FETCH_ALL_DATASETS_STARTED
});

export const fetchDatasetsSucceeded = (datasets) => ({
  type: DataSetsActionTypes.FETCH_ALL_DATASETS_SUCCEEDED,
  payload: datasets
});

export const fetchDatasetsFailed = (error) => ({
  type: DataSetsActionTypes.FETCH_ALL_DATASETS_FAILED,
  payload: error
});
