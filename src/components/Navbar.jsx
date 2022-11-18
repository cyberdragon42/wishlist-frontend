import React from "react";
import './../styles/navbar.scss'
import {NavLink} from 'react-router-dom'

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="navbar">
                <NavLink to="/">
                    Main
                </NavLink>
                <NavLink to="/categories">
                    Categories
                </NavLink>
            </div>
        )
    }
}

export default Navbar;