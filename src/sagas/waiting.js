import { take } from 'redux-saga/effects';

import { TRAINING_START, TRAINING_STOP } from '../constants';

export default function* waitingSaga() {
  while (true) { // eslint-disable-line no-constant-condition
    yield take(TRAINING_START);

    const elevatorMusicFrame = document.createElement('iframe');

    elevatorMusicFrame.width = 0;
    elevatorMusicFrame.height = 0;
    elevatorMusicFrame.src = 'https://www.youtube.com/embed/VBlFHuCzPgY?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1';
    elevatorMusicFrame.frameBorder = 0;

    document.body.appendChild(elevatorMusicFrame);

    yield take(TRAINING_STOP);

    document.body.removeChild(elevatorMusicFrame);
  }
}
