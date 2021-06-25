import {GET_ALL_SUBMISSIONS} from '../constants'

const initstate = {
    submissions: []
}

export default function (state = initstate,action){

    switch (action.type) {
        case GET_ALL_SUBMISSIONS:
           return {
               ...state,
                submissions: action.payload
            };
        default:
            return state;
        }
}
