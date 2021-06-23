import React from 'react';
import './SideDrawer.css';
import { Link } from 'react-router-dom';


const SideDrawer = (props) => {

    const sideDrawerClass = ["sidedrawer"];

    const {show,click} = props;


    if(show){
        sideDrawerClass.push("show");
    }

    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <a href="/#">
                        Item1
                    </a>
                </li>
                <li>
                    <a href="/#">
                        Item2
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
