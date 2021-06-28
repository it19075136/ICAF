import {combineReducers} from 'redux';
import submissionReducer from './submissionReducer'
import workshopReducer from './workshopReducer'
import userReducer from './userReducer';
import adminReducer from './adminReducer';

export default combineReducers({
    submission: submissionReducer,
    user:userReducer,
    workshop: workshopReducer,
    admin : adminReducer
});