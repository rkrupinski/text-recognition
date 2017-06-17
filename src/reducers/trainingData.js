import { ADD_TRAINING_DATA, CLEAR_TRAINING_DATA } from '../constants';

function trainingData(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TRAINING_DATA:
      return [
        ...state,
        payload.data,
      ];

    case CLEAR_TRAINING_DATA:
      return [];

    default:
      return state;
  }
}

export default trainingData;
