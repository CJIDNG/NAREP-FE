import { all, call } from 'redux-saga/effects';
import { userSagas } from './user/user.sagas';
import { datasetsSagas } from './datasets/get-datasets/datasets.sagas';
import { createDatasetSagas } from './datasets/create-dataset/create-dataset.sagas';
import { updateDatasetSagas } from './datasets/update-dataset/update-dataset.sagas';
import { deleteDatasetSagas } from './datasets/delete-dataset/delete-dataset.sagas';
import { adminSagas } from './admin/admin.sagas';
import { policyPaperSagas } from './policy-paper/get-policy-paper/policy-paper.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(datasetsSagas),
    call(createDatasetSagas),
    call(updateDatasetSagas),
    call(deleteDatasetSagas),
    call(adminSagas),
    call(policyPaperSagas)
  ]);
}
