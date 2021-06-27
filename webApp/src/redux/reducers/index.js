import {combineReducers} from 'redux';
import submissionReducer from './submissionReducer' 
import workshopReducer from './workshopReducer'

export default combineReducers({
    submission: submissionReducer,
    workshop: workshopReducer
});