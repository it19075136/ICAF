import React, {useState} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import AddSubmissionForm from './components/submissionManagement/AddSubmissionForm';
import singup from './components/user-singup-login/singup';
import singin from './components/user-singup-login/singin';
import NavBar from './layouts/navbar';
import SideDrawer from './layouts/SideDrawer';

export default function app(){

    const[sideToggle, setSideToggle] = useState(false);

    return (
        <div>
            <NavBar click={() => setSideToggle(true)}/>
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
            <BrowserRouter>
            <Switch>
                <Route exact path="/submission/upload" component={AddSubmissionForm} />
                <Route exact path="/singup" component={singup} />
                <Route exact path="/singin" component={singin} />
            </Switch>
            </BrowserRouter>
        </div>
    )
}