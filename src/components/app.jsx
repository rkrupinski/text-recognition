import React from 'react';
import styled from 'styled-components';

import ModeSelector from './modeSelector';
import DrawingBoardLabel from './drawingBoardLabel';
import DrawingBoard from './drawingBoard';
import Debug from './debug';

const Row = styled.div`
  display: flex;
  padding: 1em;
`;

const Col = styled.div`
  &:not(:first-child) {
    margin-left: 2em;
  }
`;

const App = () => (
  <Row>
    <Col>
      <ModeSelector />
      <DrawingBoardLabel />
      <DrawingBoard />
      <p>View <a href="https://github.com/rkrupinski/text-recognition">source</a></p>
    </Col>
    <Col>
      <Debug />
    </Col>
  </Row>
);

export default App;
