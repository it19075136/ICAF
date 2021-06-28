import axios from 'axios';
import {GET_ALL_SUBMISSIONS,ADD_SUBMISSION,REMOVE_SUBMISSION} from '../constants';

export const getAllSubmissions = () => dispatch => {
    axios.get('http://localhost:5000/submission')
    .then(res => {
        dispatch({
            type: GET_ALL_SUBMISSIONS,
            payload: res.data
        })
    })
}

export const addSubmission = (payload) => dispatch => {
    axios.post('http://localhost:5000/submission',payload)
    .then(res => {
        if(res.status == 200)
        dispatch({
            type: ADD_SUBMISSION,
            payload: res.data
        })
        else
            console.log(res)
    })
}

export const deleteSubmission = (id) => dispatch => {
    axios.delete(`http://localhost:5000/submission/${id}`).then((res) => {
        if(res.status == 200)
        dispatch({
            type: REMOVE_SUBMISSION,
            payload: res.data
        })
        else
            console.log(res)
    })
} 