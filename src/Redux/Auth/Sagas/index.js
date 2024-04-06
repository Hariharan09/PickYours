import {
  hideLoader,
  showLoader,
  VALIDATE_USER,
  validateUserFailure,
  validateUserSuccess,
  PRODUCT,
  productSuccess,
  productFailure,
} from '../../../Redux';
import {validateUserApi, productApi} from '../../../Services';
import {call, put, takeLatest} from 'redux-saga/effects';

/**
 * Validate user
 */

function* validateUserSaga(action) {
  try {
    yield put(showLoader());
    const response = yield call(validateUserApi, action.payload.params);
    if (response.success) {
      yield put(hideLoader());
      yield put(validateUserSuccess({...response}));
      yield call(action.payload.onSuccess(response));
    } else {
      yield put(hideLoader());
      yield put(validateUserFailure(response));
      yield call(action.payload.onError(response));
    }
  } catch (error) {
    yield put(hideLoader());
    yield put(validateUserFailure(error));
    yield call(action.payload.onError(error));
  }
}

/**
 * submitLoginSaga
 */

function* productSaga(action) {
  try {
    yield put(showLoader());
    const response = yield call(productApi, action.payload.params);
    console.log('rss-----------+++++++++', response);
    if (response) {
      yield put(hideLoader());
      yield put(productSuccess({...response}));
      yield call(action.payload.onSuccess(response));
    } else {
      yield put(hideLoader());
      yield put(productFailure(response));
      yield call(action.payload.onError(response));
    }
  } catch (error) {
    yield put(hideLoader());
    yield put(productFailure(error));
    yield call(action.payload.onError(error));
  }
}

///watcher///

function* AuthSaga() {
  yield takeLatest(VALIDATE_USER, validateUserSaga);
  yield takeLatest(PRODUCT, productSaga);
}

export default AuthSaga;
