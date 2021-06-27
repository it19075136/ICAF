import {combineReducers} from 'redux';
import submissionReducer from './submissionReducer';
import adminReducer from './adminReducer'; 

export default combineReducers({
    submission: submissionReducer,
    // admin : adminReducer
});