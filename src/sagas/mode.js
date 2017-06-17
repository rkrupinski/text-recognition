import { take, put, call, select } from 'redux-saga/effects';

import { TOGGLE_MODE, TESTING } from '../constants';
import trainingStart from '../actionCreators/trainingStart';
import trainingStop from '../actionCreators/trainingStop';
import clearTrainingData from '../actionCreators/clearTrainingData';
import { train } from '../nn';

function* toggleTesting() {
  const { trainingData } = yield select();

  if (!trainingData.length) {
    return;
  }

  yield put(trainingStart());

  const result = yield call(train, trainingData, {
    /* Defaults FTW! */
  });

  console.log(result); // eslint-disable-line no-console

  yield put(clearTrainingData());
  yield put(trainingStop());
}

export default function* modeSaga() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(TOGGLE_MODE);

    const { mode } = yield select();

    if (mode === TESTING) {
      yield call(toggleTesting);
    }
  }
}
