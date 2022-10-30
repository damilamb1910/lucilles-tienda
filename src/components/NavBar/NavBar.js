import React from "react";
import logo from "../../assets/logo.png"
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import UserWidget from "../UserWidget/UserWidget";
import FavWidget from "../FavWidget/FavWidget";
import { Context } from '../../context/CartContext';
import { useContext } from 'react';

const NavBar=()=>{

const {logueado,imgProfile}=useContext(Context)
    
    

        return(
            <header>
            <Link to="/"><img className="logo" src={logo} alt="" /></Link>
            <Nav />
            
            <UserWidget img={imgProfile}/>
            {logueado && <FavWidget/>}
            <CartWidget/>
            </header>
        
    )
}



export default NavBar