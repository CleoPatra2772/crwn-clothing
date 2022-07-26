import { compose, configureStore, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'; 
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';
//import { loggerMiddleware } from './middleware/middleware';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],

};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

//root-reducer
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);
// const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);
const composedEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore (persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
