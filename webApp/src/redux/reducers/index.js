import {combineReducers} from 'redux';
import submissionReducer from './submissionReducer' 
import userReducer from './userReducer';

export default combineReducers({
    submission: submissionReducer,
    user:userReducer

});