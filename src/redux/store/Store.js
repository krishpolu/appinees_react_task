import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import employeeRootReduser from '../reduser/index';

const store = createStore(employeeRootReduser, applyMiddleware(thunk));

export default (store);