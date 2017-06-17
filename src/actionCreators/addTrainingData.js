import { ADD_TRAINING_DATA } from '../constants';

const addTrainingData = data => ({
  type: ADD_TRAINING_DATA,
  payload: { data },
});

export default addTrainingData;
