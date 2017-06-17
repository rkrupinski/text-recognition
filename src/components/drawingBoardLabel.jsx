import React from 'react';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';
import { connect } from 'react-redux';

import Loader from './loader';
import { identity } from '../utils';

const DrawingBoardLabel = () => (
  <p>Draw a digit:</p>
);

export default compose(
  connect(
    ({ training }) => ({ training }),
  ),
  branch(
    ({ training }) => training,
    renderComponent(Loader),
    identity,
  ),
)(DrawingBoardLabel);
