import { TOGGLE_MODE, TRAINING } from '../constants';

export default function mode(state = TRAINING, action) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_MODE:
      return payload.mode;

    default:
      return state;
  }
}
