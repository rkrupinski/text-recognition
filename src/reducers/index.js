import { combineReducers } from 'redux';

import mode from './mode';
import training from './training';
import trainingData from './trainingData';

export default combineReducers({
  mode,
  training,
  trainingData,
});
