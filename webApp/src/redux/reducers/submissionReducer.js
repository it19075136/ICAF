import {ADD_SUBMISSION, GET_ALL_SUBMISSIONS} from '../constants'

const initstate = {
    submissions: [],
    success: false
}

export default function (state = initstate,action){

    switch (action.type) {
        case GET_ALL_SUBMISSIONS:
           return {
               ...state,
                submissions: action.payload
            };
        case ADD_SUBMISSION:
            return {
                ...state,
                submissions: [...state.submissions,action.payload],
                success: true
            }
        default:
            return state;
        }
}
