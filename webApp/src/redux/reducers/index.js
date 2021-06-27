import {combineReducers} from 'redux';
<<<<<<< HEAD
=======
import documentReducer from './documentReducer';
>>>>>>> 67bd5301b061cc9b494bff830d6799b0f79370c5
import submissionReducer from './submissionReducer';
import workshopReducer from './workshopReducer';
import userReducer from './userReducer';
import conferenceReducer from './conferenceReducer';

export default combineReducers({
    submission: submissionReducer,
    user:userReducer,
    workshop: workshopReducer,
<<<<<<< HEAD
    conference: conferenceReducer
=======
    document: documentReducer
>>>>>>> 67bd5301b061cc9b494bff830d6799b0f79370c5
});