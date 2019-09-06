import { createStore , applyMiddleware} from 'redux';
import { Reducers } from '../reducers';
import reduxThunk from 'redux-thunk'

export const Store = createStore(Reducers, applyMiddleware(reduxThunk));