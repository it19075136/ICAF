import axios from 'axios';
import {GET_ALL_SUBMISSIONS} from '../constants';

export const getAllSubmissions = () => dispatch => {
    axios.get('http://localhost:5000/submission')
    .then(res => {
        dispatch({
            type: GET_ALL_SUBMISSIONS,
            payload: res.data
        })
    })
}