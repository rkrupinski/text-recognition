import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import styles from 'normalize.css';
import Root from './components/root';

styles.use();

render(Root);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    render(Root);
  });
}

function render(RootComponent) {
  ReactDOM.render(
    (
      <AppContainer>
        <RootComponent />
      </AppContainer>
    ),
    document.querySelector('#app'),
  );
}
