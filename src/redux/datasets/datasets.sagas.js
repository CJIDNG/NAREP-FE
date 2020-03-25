import {
  call, put, takeLatest, all
} from 'redux-saga/effects';
import API_REQUEST from './datasets.requests';
import DataSetsActionTypes from './datasets.types';
import {
  fetchDatasetsFailed, fetchDatasetsSucceeded, fetchSectorsFailed, fetchSectorsSucceeded
} from './datasets.actions';


export function* fetchDataset() {
  try {
    const fetchedDatasets = yield call(API_REQUEST.fetchDatasets);
    yield put(fetchDatasetsSucceeded(fetchedDatasets.data.files));
  } catch (error) {
    yield put(fetchDatasetsFailed(error));
  }
}

export function* fetchSectors() {
  try {
    const fetchedSectors = yield call(API_REQUEST.fetchSectors);
    yield put(fetchSectorsSucceeded(fetchedSectors.data.sectors));
  } catch (error) {
    yield put(fetchSectorsFailed(error));
  }
}


export function* onFetchDatasetsStart() {
  yield takeLatest(DataSetsActionTypes.FETCH_ALL_DATASETS_STARTED, fetchDataset);
}
export function* onFetchSectorsStart() {
  yield takeLatest(DataSetsActionTypes.FETCH_ALL_SECTORS_STARTED, fetchSectors);
}

export function* datasetsSagas() {
  yield all([
    call(onFetchDatasetsStart),
    call(onFetchSectorsStart),
  ]);
}
