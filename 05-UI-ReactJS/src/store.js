import { createStore } from 'redux';
import moviesApp from './reducers'

let store = createStore(moviesApp);

export default store;
