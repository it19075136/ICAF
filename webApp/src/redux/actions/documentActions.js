import {ADD_DOCUMENTS} from '../constants';
import axios from 'axios';

export const addDocuments = (data) => dispatch => {

    axios.post('http://localhost:5000/document', data).then((res) => { 
        console.log(res);
        dispatch({
            type: ADD_DOCUMENTS,
            payload: data
        })
    }).catch((err) => {
        console.log(err);
    });

}