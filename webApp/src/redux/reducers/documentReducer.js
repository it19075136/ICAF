import {ADD_DOCUMENTS} from '../constants'

const initstate = {
    documents: []
}

export default function (state = initstate,action){

    switch (action.type) {
        case ADD_DOCUMENTS:
            return {
                ...state,
                documents: action.payload
            }
        default:
            return state;
        }
}
