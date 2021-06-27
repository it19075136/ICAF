import { ADD_CONFERENCE, GET_ALL_CONFERENCE, EDIT_CONFERENCE } from "../constants";

const initstate = {
    conferences: []
}

export default function (state = initstate, action){
    switch (action.type) {
        case GET_ALL_CONFERENCE:
            return {
                ...state,
                conferences: action.payload
            }
        case ADD_CONFERENCE:
            return{
                ...state,
                conferences: [...state.conferences, action.payload]
            }
        case EDIT_CONFERENCE:
            return{
                ...state,
                conferences: action.payload
            }
        default:
            return state;
    }
}