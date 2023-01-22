import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Store from './store.js';
import App from './components/App.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={Store}>
    <App time={Date.now()} />
  </Provider>
)

// ReactDOM.render(
//   <Provider store={Store}>
//     <App time={Date.now()}/>
//   </Provider>,
//   document.getElementById('root')
// );

