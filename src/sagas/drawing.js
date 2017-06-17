import { take, put, select, call } from 'redux-saga/effects';

import addTrainingData from '../actionCreators/addTrainingData';
import { SET_INPUT, TRAINING, TESTING } from '../constants';
import { isDigit, formatOutput, findMaxIndex } from '../utils';
import { test } from '../nn';

function* testing(input) {
  const result = yield call(test, input);

  alert(`You drew ${findMaxIndex(result)}!`); // eslint-disable-line no-alert
}

function* training(input) {
  const value = prompt('What digit is it?'); // eslint-disable-line no-alert

  if (value === null) {
    return;
  }

  yield isDigit(value) ?
      put(addTrainingData({ input, output: formatOutput(+value) })) :
      call(training, input);
}

export default function* drawingSaga() {
  while (true) { // eslint-disable-line no-constant-condition
    const { payload: { data } } = yield take(SET_INPUT);
    const { mode } = yield select();

    switch (mode) {
      case TRAINING:
        yield call(training, data);
        break;

      case TESTING:
        yield call(testing, data);
        break;

      default:
        break;
    }
  }
}
