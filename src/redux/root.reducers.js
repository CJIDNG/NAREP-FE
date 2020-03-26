import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import datasetsReducer from './datasets/datasets.reducer';
import singleDatasetReducer from './datasets/single-dataset.reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user', 'datasets']
//   // whitelist: ['user']
// };
const rootReducer = combineReducers({
  user: userReducer,
  datasets: datasetsReducer,
  singleDataset: singleDatasetReducer
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
