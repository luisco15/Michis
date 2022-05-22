import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

// state provider, reducer
import { Provider } from './state/Provider';
import reducer, { initialState } from './state/reducer'


ReactDOM.render(
  <React.StrictMode>
    <Provider initialState={initialState} reducer={reducer}>
      <App/>
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);