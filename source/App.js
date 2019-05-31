import React from 'react';
import createStore from './store';
import {Provider } from 'react-redux';
const store = createStore;

const App = ({title = 'Sample React App by TG'}) => (
  <Provider store={store}>
    <h2>{title}</h2>
  </Provider>
);

export default App;
