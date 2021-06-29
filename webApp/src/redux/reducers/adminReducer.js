const initstate = {
    documents : [],
    updateDocumentApprove : {}
}

const GET_ALL_DOCUMENTS = "GET_ALL_DOCUMENTS";
const UPDATE_DOCUMENT_APPROVE = "UPDATE_DOCUMENT_APPROVE";


export default function (state = initstate, action){
    switch(action.type){
        case GET_ALL_DOCUMENTS:
            return {
                ...state,
                documents : action.payload
            };
        case UPDATE_DOCUMENT_APPROVE:
            return {
                ...state,
                updateDocumentApprove : action.payload

            }    
        default : 
            return state;    
    }
}