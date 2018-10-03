import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reduxFirebase, getFirebase } from 'react-redux-firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducers/reducer';
import fbConfig from './config/fbConfig';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reduxFirebase(fbConfig)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
