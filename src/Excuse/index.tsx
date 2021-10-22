import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import allUserInputDataReducers from './states';

// eslint-disable-next-line
const userInputDataStore = createStore(
  allUserInputDataReducers,
  composeWithDevTools(applyMiddleware(logger))
);

function excuseForm(){
  return (
    <h1 className="text-white text-4xl">Thats our form</h1>
  )
};

export default excuseForm;