import React from "react";
import "./header.styles.css"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect"

const Header = () => (
    <div className="header">
        
        <div className="options">

        <NavLink className="option1"
        to="/movies"
        activeClassName="active"
>MOVIES
</NavLink>
        <NavLink className="option2"
        to="/shows"
        activeClassName="active"
   
> TV SHOWS
</NavLink>  
</div>
    
    
    </div>
)



export default Header;