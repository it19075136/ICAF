import {combineReducers} from 'redux';
import submissionReducer from './submissionReducer';
import documentReducer from './documentReducer';

export default combineReducers({
    submission: submissionReducer,
    document: documentReducer
});