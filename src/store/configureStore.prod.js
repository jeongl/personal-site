import {createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from '../middleware/api.js';
import findPost from '../middleware/findPost.js';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(thunk, api, findPost)
  );
  
  return store;
}
