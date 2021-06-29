import axios from "axios";

const GET_ALL_DOCUMENTS = "GET_ALL_DOCUMENTS";
const UPDATE_DOCUMENT_APPROVE = "UPDATE_DOCUMENT_APPROVE";

export const getAllDocuments = () => dispatch => {
    axios.get('http://localhost:5000/document/')
    .then(res => {
        dispatch({
            type : GET_ALL_DOCUMENTS,
            payload : res.data
        })
    })
}

export function postDocumentApprove(values) {
    return (dispatch) => {
        axios.post(`http://localhost:5000/document/update/isApprove/${values.id}`, values)
            .then(res => {
                dispatch({
                    type: UPDATE_DOCUMENT_APPROVE,
                    payload: values
                });
                // this.getAllDocuments();
                console.log('res: ', res);
            }).catch((err) => {
                console.log(err);
            })
    }
}

