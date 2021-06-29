import axios from 'axios';
import { GET_ALL_CONFERENCE, EDIT_CONFERENCE, ADD_CONFERENCE, DELETE_CONFERENCE } from '../constants';

export const getAllConference = () => dispatch => {
    axios.get('http://localhost:5000/conference')
        .then(res => {
            dispatch({
                type: GET_ALL_CONFERENCE,
                payload: res.data
            })
        })
}

export const addConference = (payload) => dispatch => {
    axios.post('http://localhost:5000/conference', payload)
    .then(res => {
        dispatch({
            type: ADD_CONFERENCE,
            payload: res.data
        })
    })
}

export const editConference = (id, payload) => dispatch => {
    axios.post(`http://localhost:5000/conference/${id}`, payload)
        .then(res => {
            dispatch({
                type: EDIT_CONFERENCE,
                payload: res.data
            })
        })
}

export const deleteConference = (id) => dispatch => {
    axios.delete(`http://localhost:5000/conference/${id}`).then((res) => {
        if(res.status == 200)
        dispatch({
            type: DELETE_CONFERENCE,
            payload: res.data
        })
        else
            console.log(res)
    })
} 