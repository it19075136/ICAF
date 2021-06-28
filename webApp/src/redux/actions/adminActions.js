import axios from "axios";

const GET_ALL_DOCUMENTS = "GET_ALL_DOCUMENTS";

export const getAllDocuments = () => dispatch => {
    axios.get('http://localhost:5000/document/')
    .then(res => {
        dispatch({
            type : GET_ALL_DOCUMENTS,
            payload : res.data
        })
    })
}