import {ADD_DOCUMENTS} from '../constants';

export const addDocuments = (data) => dispatch => {
        dispatch({
            type: ADD_DOCUMENTS,
            payload: data
        })
}