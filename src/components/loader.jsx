import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loader extends Component {
  static propTypes = {
    interval: PropTypes.number.isRequired,
    frames: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  static defaultProps = {
    interval: 100,
    frames: ['|', '/', '-', '\\'],
  }

  state = {
    currentFrame: 0,
  }

  componentDidMount() {
    const { interval } = this.props;

    this.timer = setInterval(this.update.bind(this), interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  update() {
    this.setState((prevState, { frames }) => ({
      ...prevState,
      currentFrame: prevState.currentFrame < frames.length - 1 ?
        prevState.currentFrame + 1 : 0,
    }));
  }

  render() {
    const { frames } = this.props;
    const { currentFrame } = this.state;

    return (
      <p>
        Please wait
        {' '}
        <span style={{ fontFamily: 'monospace' }}>{frames[currentFrame]}</span>
      </p>
    );
  }
}

export default Loader;
