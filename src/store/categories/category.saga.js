import { takeLatest, all, call, put} from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from './category.action';
import { CATEGORIES_ACTION_TYPES } from './category.types';

  export function* fetchCategoriesStartAsync(){
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoriesArray));
        
        //dispatch(fetchCategoriesSuccess(categoriesArray));
      } catch (error) {
        yield put(fetchCategoriesFailure(error));
        //dispatch(fetchCategoriesFailure(error));
      }
    };




  export function* onFecthCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesStartAsync);
  }
  export function* categoriesSaga() {
    yield all([call(onFecthCategories)]);
  }