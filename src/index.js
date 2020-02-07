import React from 'react';
import ReactDOM from 'react-dom'

import Signature from './components/Signature'

ReactDOM.render(
  <Signature name="Tatsiana Krautsova"/>,
  document.getElementById('root') // eslint-disable-line no-undef
)

if(module.hot) // eslint-disable-line no-undef  
  module.hot.accept() // eslint-disable-line no-undef  

