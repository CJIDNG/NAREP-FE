import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import API_REQUEST from './datasets.requests';
import DataSetsActionTypes from './datasets.types';
import {
  fetchDatasetsFailed, fetchDatasetsSucceeded
} from './datasets.actions';


export function* fetchDataset() {
  try {
    const fetchedDatasets = yield call(API_REQUEST.fetchDatasets);
    yield put(fetchDatasetsSucceeded(fetchedDatasets.data.files));
  } catch (error) {
    yield put(fetchDatasetsFailed(error));
  }
}

export function* onFetchDatasetsStart() {
  yield takeLatest(DataSetsActionTypes.FETCH_ALL_DATASETS_STARTED, fetchDataset);
}

export function* datasetsSagas() {
  yield all([
    call(onFetchDatasetsStart),
  ]);
}
