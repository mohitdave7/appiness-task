import {createStore} from 'redux';
import rootReducer from '../src/modules/rootReducer';

const store=createStore(rootReducer);

export default store;