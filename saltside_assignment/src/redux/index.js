import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import common from './common/reducer';
import campaigns from './campaigns/reducer';

const reducers = combineReducers({
    common, campaigns
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;