import { TRAINING_START, TRAINING_STOP } from '../constants';

export default function training(state = false, action) {
  const { type } = action;

  switch (type) {
    case TRAINING_START:
      return true;

    case TRAINING_STOP:
      return false;

    default:
      return state;
  }
}
