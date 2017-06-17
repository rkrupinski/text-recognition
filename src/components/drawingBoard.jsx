import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignatureCanvas from 'react-signature-canvas';

import setInput from '../actionCreators/setInput';
import { getImageData, isValidImageData } from '../utils';

class DrawingBoard extends Component {
  static propTypes = {
    training: PropTypes.bool.isRequired,
    setInput: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.ok = this.ok.bind(this);
    this.clear = this.clear.bind(this);
  }

  ok() {
    const { setInput: input } = this.props;
    const imageData = getImageData(this.sCanvas.getCanvas());

    if (isValidImageData(imageData)) {
      input(imageData);
    }

    this.clear();
  }

  clear() {
    this.sCanvas.clear();
  }

  render() {
    const { training } = this.props;

    return (
      <div>
        <SignatureCanvas
          ref={el => (this.sCanvas = el)}
          minWidth={4}
          maxWidth={4}
          dotSize={4}
          canvasProps={{
            width: 200,
            height: 200,
            style: { border: '2px groove threedface' },
          }}
        />
        <br />
        <button
          onClick={this.clear}
          disabled={training}
        >
          Clear
        </button>
        {' '}
        <button
          onClick={this.ok}
          disabled={training}
        >
          Go!
        </button>
      </div>
    );
  }
}

export default connect(
  ({ training }) => ({ training }),
  { setInput },
)(DrawingBoard);
