import { TOGGLE_MODE } from '../constants';

const toggleMode = mode => ({
  type: TOGGLE_MODE,
  payload: { mode },
});

export default toggleMode;
