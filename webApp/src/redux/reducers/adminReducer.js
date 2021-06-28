const initstate = {
    documents : []
}

const GET_ALL_DOCUMENTS = "GET_ALL_DOCUMENTS";

export default function (state = initstate, action){
    switch(action.type){
        case GET_ALL_DOCUMENTS:
            return {
                ...state,
                documents : action.payload
            };
        default : 
            return state;    
    }
}