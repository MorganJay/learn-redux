import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// let store = createStore(reducer)
// STORE -> GLOBALIZED STATE

//ACTION INCREMENT -- describe what you wanna do
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};
const decrement = () => {
  return { 
    type: 'DECREMENT',
  };
};

//REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state++;
    case 'DECREMENT':
      return state--;
  }
};

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

