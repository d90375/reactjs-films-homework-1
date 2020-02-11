import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import Signature from './components/Signature';

ReactDOM.render(
  <Signature name="Tatsiana Krautsova" />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
