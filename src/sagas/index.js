import { all, call } from 'redux-saga/effects';

import modeSaga from './mode';
import drawingSaga from './drawing';
import waitingSaga from './waiting';

export default function* rootSaga() {
  yield all([
    call(modeSaga),
    call(drawingSaga),
    call(waitingSaga),
  ]);
}
