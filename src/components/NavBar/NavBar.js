import React from "react";
import logo from "../../assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";

const NavBar=()=>{


    
    

        return(
            <header>
            <Link to="/"><img className="logo" src={logo} alt="" /></Link>
            <Nav />
            <MenuIcon className="logo__menu" color="primary" fontSize="large" />
            <CartWidget/>
            </header>
        
    )
}



export default NavBar