import { SET_INPUT } from '../constants';

const setInput = data => ({
  type: SET_INPUT,
  payload: { data },
});

export default setInput;
