import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import toggleMode from '../actionCreators/toggleMode';
import { TESTING, TRAINING } from '../constants';

const Container = styled.fieldset`
  display: inline-block;
  padding: .5em;
  margin: 0;
`;

const Input = styled.input`
  margin-right: .25em;

  &:not(:first-child) {
    margin-left: 1em;
  }
`;

class ModeSelector extends Component { // eslint-disable-line
  static propTypes = {
    mode: PropTypes.string.isRequired,
    training: PropTypes.bool.isRequired,
    toggleMode: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { toggleMode: toggle } = this.props;

    toggle(e.target.value);
  }

  render() {
    const { mode, training } = this.props;

    return (
      <Container>
        <Input
          type="radio"
          name="mode"
          id="train"
          value={TRAINING}
          checked={mode === TRAINING}
          onChange={this.handleChange}
          disabled={training}
        />
        <label htmlFor="train">Train</label>

        <Input
          type="radio"
          name="mode"
          id="test"
          value={TESTING}
          checked={mode === TESTING}
          onChange={this.handleChange}
          disabled={training}
        />
        <label htmlFor="test">Test</label>
      </Container>
    );
  }
}

export default connect(
  ({ mode, training }) => ({
    mode,
    training,
  }),
  { toggleMode },
)(ModeSelector);
