import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const DebugOutlet = styled.pre`
  margin: 0;
`;

class Debug extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      input: PropTypes.arrayOf(PropTypes.number).isRequired,
      output: PropTypes.arrayOf(PropTypes.number).isRequired,
    })).isRequired,
  }

  static format(data) {
    return JSON.stringify(
      data,
      function replacer(key, val) {
        return this[key].output ?
            this[key].output.indexOf(1) : val;
      },
      2,
    );
  }

  render() {
    const { data } = this.props;
    const output = Debug.format(data);

    return (
      <DebugOutlet>{output}</DebugOutlet>
    );
  }
}

export default connect(
  ({ trainingData }) => ({ data: trainingData }),
)(Debug);
