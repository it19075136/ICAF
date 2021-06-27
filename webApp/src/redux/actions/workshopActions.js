import axios from 'axios';
import { GET_ALL_WORKSHOPS, ADD_WORKSHOP } from '../constants';

export const getAllWorkshops = () => {
    axios.get('http://localhost:5000/workshop')
    .then(res => {
        dispatchEvent({
            type: GET_ALL_WORKSHOPS,
            payload: res.data
        })
    })
}

export const addWorkshop = (payload) => dispatch => {
    axios.post('http://localhost:5000/workshop', payload)
    .then(res => {
        dispatch({
            type: ADD_WORKSHOP,
            payload: res.data
        })
    })
}