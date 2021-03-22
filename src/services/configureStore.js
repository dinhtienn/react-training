import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import reducers from '../reducers/index';

const persistConfig = {
  key: 'root',
  storage
};
const rootReduces = persistReducer(persistConfig, reducers);

const configureStore = () => {
  return {
    ...createStore(rootReduces, applyMiddleware(thunk)),
  };
};

const store = configureStore();
export const persistor = persistStore(store);
export default store;
