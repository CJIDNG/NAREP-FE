import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { datasetsSagas } from './datasets/get-datasets/datasets.sagas';
import { createDatasetSagas } from './datasets/create-dataset/create-dataset.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(datasetsSagas),
    call(createDatasetSagas)
  ]);
}
