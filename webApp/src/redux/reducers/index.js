import {combineReducers} from 'redux';
import documentReducer from './documentReducer';
import submissionReducer from './submissionReducer';
import workshopReducer from './workshopReducer';
import userReducer from './userReducer';

export default combineReducers({
    submission: submissionReducer,
    user:userReducer,
    workshop: workshopReducer,
    document: documentReducer
});