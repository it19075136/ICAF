import {combineReducers} from 'redux';
import submissionReducer from './submissionReducer';
import workshopReducer from './workshopReducer';
import userReducer from './userReducer';
import conferenceReducer from './conferenceReducer';

export default combineReducers({
    submission: submissionReducer,
    user:userReducer,
    workshop: workshopReducer,
    conference: conferenceReducer
});