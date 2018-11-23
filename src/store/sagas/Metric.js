import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";
import { delay } from "redux-saga";

function* watchFetchMetricData() {
    while (true) {
      const { error, data } = yield call(API.findMetricData);
      yield put({ type: actions.METRIC_DATA_RECEIVED, data });
      yield delay(4000);
      if(error){
      yield put({ type: actions.API_ERROR, code: error.code });
      yield cancel();
      return;
      }
    }
}

function* watchAppLoad() {
  yield all([takeEvery(actions.FETCH_METRICDATA, watchFetchMetricData)]);
}

export default [watchAppLoad];
