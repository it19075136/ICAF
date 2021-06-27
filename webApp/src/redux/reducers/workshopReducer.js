import { ADD_WORKSHOP, GET_ALL_WORKSHOPS } from "../constants";

const initstate = {
    workshops: []
}

export default function (state = initstate, action){
    switch (action.type) {
        case GET_ALL_WORKSHOPS:
            return {
                ...state,
                workshops: action.payload
            }
        case ADD_WORKSHOP:
            return{
                ...state,
                workshops: [...state.workshops, action.payload]
            }
        default:
            return state;
    }
}