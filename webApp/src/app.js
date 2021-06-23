import React, {useState} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './layouts/navbar';
import SideDrawer from './layouts/SideDrawer';
import './app.css';

export default function app(){

    const[sideToggle, setSideToggle] = useState(false);

    return (
        <div>
            <NavBar click={() => setSideToggle(true)}/>
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
            <BrowserRouter>
            <Switch>
                // add routes here
            </Switch>
            </BrowserRouter>
        </div>
    )
}