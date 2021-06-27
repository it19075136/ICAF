import React, {useState} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import AddSubmissionForm from './components/submissionManagement/AddSubmissionForm';
import AddWorkshopForm from './components/workshopManagement/AddWorkshopForm';
import SubmitDocumet from './components/documentManagement/submitDocument';
import WebNavbar from './layouts/WebNavbar';
import AdminSideNav from './layouts/AdminSideNav';
import './app.css';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware)
)
);

export default function app(){

    return (
        <Provider store={store}>
            <WebNavbar/>
            <AdminSideNav />
            <BrowserRouter>
            <Switch>
                <Route exact path="/submission/add" component={AddSubmissionForm} />
                <Route exact path="/workshop/add" component={AddWorkshopForm} />
                <Route exact path="/document/submit" component={SubmitDocumet} />
            </Switch>
            </BrowserRouter>
        </Provider>
    )
}